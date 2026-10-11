import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, X, Calendar } from 'lucide-react';
import { TransformationCard } from './TransformationCard';
import {
  Transformation1Before,
  Transformation1After,
  Transformation2Before,
  Transformation2After,
  Transformation3Before,
  Transformation3After,
  Transformation4Before,
  Transformation4After,
  Transformation5Before,
  Transformation5After,
  Transformation6Before,
  Transformation6After,
} from './TransformationImageSlots';

interface SmileTransformationsProps {
  onOpenBooking?: () => void;
}

export const SmileTransformations: React.FC<SmileTransformationsProps> = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const seeAllButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Return focus to the "See All" button when it closes
    setTimeout(() => {
      seeAllButtonRef.current?.focus();
    }, 0);
  }, []);

  // Trap focus, handle Escape key, and lock body scroll while modal is open
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the pop-up
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isModalOpen, closeModal]);

  // Combined marquee paused state (mouse hover, touch hold, or modal open)
  const isMarqueePaused = isPaused || isModalOpen;

  // Six transformation cards data definition
  const transformations = [
    {
      id: 1,
      title: 'Thin tooth covers',
      detail: 'Often 2 to 3 visits',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation1Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation1After loading={loading} />,
    },
    {
      id: 2,
      title: 'Brighter teeth',
      detail: 'Often 1 visit',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation2Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation2After loading={loading} />,
    },
    {
      id: 3,
      title: 'Straighter teeth',
      detail: 'Often 6 to 12 months',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation3Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation3After loading={loading} />,
    },
    {
      id: 4,
      title: 'Closing gaps',
      detail: 'Often 1 visit',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation4Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation4After loading={loading} />,
    },
    {
      id: 5,
      title: 'Fixing a chip',
      detail: 'Often 1 visit',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation5Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation5After loading={loading} />,
    },
    {
      id: 6,
      title: 'Replacing a missing tooth',
      detail: 'Often 3 to 6 months',
      renderBefore: (loading: 'lazy' | 'eager') => <Transformation6Before loading={loading} />,
      renderAfter: (loading: 'lazy' | 'eager') => <Transformation6After loading={loading} />,
    },
  ];

  return (
    <section
      id="transformations"
      className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#EEF5FF] overflow-hidden relative"
      aria-label="Before and after smile transformations"
    >
      {/* Inline styles for seamless infinite marquee and modal animations with reduced-motion fallback */}
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-scroll 40s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track,
        .marquee-paused {
          animation-play-state: paused !important;
        }

        /* Modal scale and fade-in animation (0.2s) */
        @keyframes modal-fade-scale-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-animate-in {
          animation: modal-fade-scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* prefers-reduced-motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .marquee-wrapper {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .marquee-wrapper::-webkit-scrollbar {
            display: none;
          }
          .marquee-track {
            animation: none !important;
            transform: none !important;
            width: auto !important;
          }
          .marquee-duplicate-set {
            display: none !important;
          }
          .marquee-card-wrapper {
            scroll-snap-align: center;
          }
          .modal-animate-in {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Accessible screen-reader heading */}
      <h2 className="sr-only">See what a new smile can look like - Before and after transformations</h2>

      {/* Marquee Carousel Container */}
      <div
        className="relative w-full overflow-hidden marquee-wrapper py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        {/* Soft 60px fade gradient into background (#EEF5FF) on the left */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[40px] sm:w-[60px] lg:w-[80px] z-10 bg-gradient-to-r from-[#EEF5FF] via-[#EEF5FF]/80 to-transparent"
          aria-hidden="true"
        />

        {/* Soft 60px fade gradient into background (#EEF5FF) on the right */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[40px] sm:w-[60px] lg:w-[80px] z-10 bg-gradient-to-l from-[#EEF5FF] via-[#EEF5FF]/80 to-transparent"
          aria-hidden="true"
        />

        {/* Continuous sliding track */}
        <div
          className={`marquee-track ${isMarqueePaused ? 'marquee-paused' : ''}`}
          style={{ animationPlayState: isMarqueePaused ? 'paused' : 'running' }}
        >
          {/* SET 1: Original 6 cards */}
          <div className="flex gap-6 pr-6 shrink-0">
            {transformations.map((item, index) => {
              // Eager load first 3 cards, lazy load the rest
              const loading = index < 3 ? 'eager' : 'lazy';
              return (
                <div
                  key={`original-${item.id}`}
                  className="marquee-card-wrapper w-[82vw] max-w-[340px] sm:w-[380px] md:w-[390px] lg:w-[430px] shrink-0"
                >
                  <TransformationCard
                    title={item.title}
                    detail={item.detail}
                    beforeSlot={item.renderBefore(loading)}
                    afterSlot={item.renderAfter(loading)}
                  />
                </div>
              );
            })}
          </div>

          {/* SET 2: Duplicate 6 cards for endless seamless loop (aria-hidden for screen readers) */}
          <div className="flex gap-6 pr-6 shrink-0 marquee-duplicate-set" aria-hidden="true">
            {transformations.map((item) => (
              <div
                key={`duplicate-${item.id}`}
                className="marquee-card-wrapper w-[82vw] max-w-[340px] sm:w-[380px] md:w-[390px] lg:w-[430px] shrink-0"
              >
                <TransformationCard
                  title={item.title}
                  detail={item.detail}
                  beforeSlot={item.renderBefore('lazy')}
                  afterSlot={item.renderAfter('lazy')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons row below the sliding images: See All and Book a Call */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
        <button
          ref={seeAllButtonRef}
          type="button"
          onClick={openModal}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-[#FFFFFF] border-[1.5px] border-[#3B82F6] text-[#3B82F6] font-heading font-bold text-[15px] sm:text-[16px] flex items-center justify-center gap-2 hover:bg-[#EEF5FF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 transition-colors cursor-pointer group shadow-xs w-full sm:w-auto"
        >
          <span>See All Transformations</span>
          <ArrowRight
            className="w-4 h-4 text-[#3B82F6] transition-transform duration-200 group-hover:translate-x-[3px]"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={onOpenBooking}
          className="h-12 sm:h-14 px-8 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[16px] sm:text-[17px] shadow-lg shadow-[#16A34A]/20 hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <Calendar className="w-5 h-5 text-[#FFFFFF]" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Tiny grey centred disclaimer note under the slider */}
      <p className="text-[12px] text-[#64748B] text-center mt-3 sm:mt-4 px-4 font-sans">
        Sample images made with AI. They are not our real patients.
      </p>

      {/* Pop-up modal displaying all 6 transformations */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: 'rgba(17, 28, 44, 0.55)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
          aria-hidden="false"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-smile-changes-title"
            className="modal-animate-in relative w-full max-w-[1100px] max-h-[90vh] bg-[#FFFFFF] rounded-[24px] shadow-2xl flex flex-col overflow-hidden focus:outline-none"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#111C2C]/10 bg-[#FFFFFF] shrink-0">
              <h3
                id="all-smile-changes-title"
                className="font-heading font-bold text-xl sm:text-2xl text-[#111C2C]"
              >
                All Smile Changes
              </h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#111C2C] hover:bg-[#EEF5FF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
              {/* Grid: 3 columns on desktop, 2 on tablet, 1 on mobile, gap 24px */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {transformations.map((item) => (
                  <div key={`modal-${item.id}`} className="w-full">
                    <TransformationCard
                      title={item.title}
                      detail={item.detail}
                      beforeSlot={item.renderBefore('lazy')}
                      afterSlot={item.renderAfter('lazy')}
                    />
                  </div>
                ))}
              </div>

              {/* Tiny grey centred disclaimer note under the grid */}
              <p className="text-[12px] text-[#64748B] text-center pt-2 pb-1 font-sans">
                Sample images made with AI. They are not our real patients.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

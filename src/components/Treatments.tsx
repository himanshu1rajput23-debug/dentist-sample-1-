import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  VeneerIcon,
  ImplantIcon,
  AlignerIcon,
  CheckupIcon,
  ToothPainIcon,
  SmileVisitIcon,
} from './ServiceIcons';
import { HelpTopic } from '../types/booking';

interface TreatmentsProps {
  onSelectTopic: (topic: HelpTopic) => void;
}

interface TreatmentItem {
  id: string;
  topic: HelpTopic;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  badge?: string;
}

interface TreatmentCardProps {
  treatment: TreatmentItem;
  onSelect: (topic: HelpTopic) => void;
}

/**
 * Shared Treatment Card Component
 * Applied uniformly across all 6 service cards.
 */
const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[16px] p-[20px] border border-[#2563EB]/25 shadow-[0_2px_10px_rgba(17,28,44,0.06)] hover:border-[#2563EB]/50 transition-all flex flex-col justify-between h-full group">
      {/* Upper Content Area */}
      <div>
        {/* Icon & Optional Badge Header */}
        <div className="flex items-center justify-between">
          {/* Icon tiles: rounded square with blue-deep background and white icon (56px, 14px radius, blue #2563EB) */}
          <div className="w-[56px] h-[56px] min-w-[56px] rounded-[14px] bg-[#2563EB] text-[#FFFFFF] flex items-center justify-center shrink-0">
            {treatment.icon}
          </div>
          {treatment.badge && (
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.04em] text-[#16A34A] bg-[#16A34A]/12 py-[4px] px-[10px] rounded-md">
              {treatment.badge}
            </span>
          )}
        </div>

        {/* Card Title & Subtitle */}
        <div className="mt-[14px]">
          <h3 className="font-heading text-[20px] font-bold text-[#111C2C] leading-[1.25]">
            {treatment.title}
          </h3>
          <p className="font-sans text-[13px] font-medium text-[#111C2C]/70 leading-[1.4] mt-[8px]">
            {treatment.tagline}
          </p>
        </div>

        {/* Card Description */}
        <p className="font-sans text-[15px] text-[#111C2C]/70 leading-[1.55] mt-[12px]">
          {treatment.description}
        </p>

        {/* Bullet List with 14px divider above */}
        <ul className="mt-[14px] pt-[14px] border-t border-[#111C2C]/10 space-y-[6px]">
          {treatment.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-[8px] font-sans text-[14px] text-[#111C2C]/70 leading-[1.4]"
            >
              {/* Bullet dots blue-deep */}
              <span className="w-[5px] h-[5px] rounded-full bg-[#2563EB] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button with divider and 14px-16px spacing: Secondary blue outlined style */}
      <div className="mt-[14px] pt-[14px] border-t border-[#111C2C]/10">
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(treatment.topic);
          }}
          className="w-full h-[44px] px-[20px] rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] text-[#2563EB] font-heading font-semibold text-[15px] hover:bg-[#2563EB]/[0.08] active:bg-[#2563EB] active:text-[#FFFFFF] transition-all cursor-pointer flex items-center justify-center text-center"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTopic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const treatments: (TreatmentItem & { badge?: string })[] = [
    {
      id: 'smile',
      topic: 'Improve my smile',
      title: 'Thin Tooth Covers',
      tagline: 'Fix chips, stains and uneven teeth',
      description: 'Thin covers sit on your front teeth. They make your smile even and bright. They look like real teeth.',
      features: ['See your smile on a screen first', 'Made just for your teeth', 'Easy to keep clean'],
      icon: <VeneerIcon className="w-7 h-7" />,
    },
    {
      id: 'implant',
      topic: 'Replace a missing tooth',
      title: 'New Teeth That Look Real',
      tagline: 'Replace a missing tooth',
      description: 'A strong post goes in your jaw. A tooth that looks real goes on top. You can bite and smile with ease.',
      features: ['One tooth or many', 'A picture on a screen helps us plan', 'Can last many years with care'],
      icon: <ImplantIcon className="w-7 h-7" />,
    },
    {
      id: 'straighten',
      topic: 'Straighten my teeth',
      title: 'Clear Trays',
      tagline: 'Straighten teeth without wires',
      description: 'Clear trays move your teeth a little at a time. Most people will not see them.',
      features: ['Take them out to eat', 'Take them out to brush', 'We check your progress'],
      icon: <AlignerIcon className="w-7 h-7" />,
    },
    {
      id: 'clean',
      topic: 'Check-up and clean',
      title: 'Check-up and Clean',
      tagline: 'Healthy gums and fresh breath',
      description: 'We check your teeth and gums. We clean off the build-up. You leave with a clear plan.',
      features: ['Gentle and quick', 'No judging', 'Plain words, no big words'],
      icon: <CheckupIcon className="w-7 h-7" />,
    },
    {
      id: 'pain',
      topic: 'Tooth pain',
      badge: 'Fast help',
      title: 'Tooth Pain Help',
      tagline: 'Help when it hurts',
      description: 'Tooth pain is scary. Call us. We will see you as soon as we can, often the same day.',
      features: ['We ease the pain first', 'We tell you what is wrong', 'We tell you the price before we fix it'],
      icon: <ToothPainIcon className="w-7 h-7" />,
    },
    {
      id: 'not-sure',
      topic: 'Not sure yet',
      badge: 'Free',
      title: 'Full Smile Visit',
      tagline: 'A free chat about your whole mouth',
      description: 'Not sure where to start? Sit with our dentist. We look at your teeth and talk about what you want.',
      features: ['A look at teeth and gums', 'Your smile on a screen', 'A plan and price on paper'],
      icon: <SmileVisitIcon className="w-7 h-7" />,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % treatments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  const pauseAutoPlayTemporarily = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // Automatic right-to-left slide interval for mobile
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % treatments.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, treatments.length]);

  return (
    <section id="treatments" className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-y border-[#111C2C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-[28px] sm:mb-[32px]">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-xs font-heading font-semibold text-[#2563EB]">
            <span>Our care</span>
          </div>
          <h2 className="font-heading text-[28px] lg:text-[36px] font-extrabold text-[#111C2C] tracking-tight leading-tight">
            How can we help your smile today?
          </h2>
          <p className="font-sans text-[16px] sm:text-[17px] text-[#111C2C]/70 max-w-[640px] mx-auto leading-relaxed">
            Pick what you need. We will help you take the first step.
          </p>
        </div>

        {/* Desktop & Tablet: Standard Grid Layout (3 cols on desktop, 2 cols on tablet) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {treatments.map((t) => (
            <TreatmentCard key={t.id} treatment={t} onSelect={onSelectTopic} />
          ))}
        </div>

        {/* Phone Variant: Sliding Right-to-Left Animation + Left/Right (Horizontal Only) Drag When Touched */}
        <div className="block md:hidden">
          <div
            className="relative overflow-visible py-2"
            onTouchStart={pauseAutoPlayTemporarily}
          >
            {/* Sliding & Horizontal-Only Draggable Container */}
            <div className="relative min-h-[460px] flex items-center justify-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={treatments[currentIndex].id}
                  drag="x"
                  dragDirectionLock
                  dragSnapToOrigin
                  dragElastic={0.4}
                  initial={{ x: 140, opacity: 0, scale: 0.94 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -140, opacity: 0, scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  whileDrag={{
                    scale: 1.03,
                    zIndex: 50,
                    boxShadow: '0 20px 30px -5px rgba(37,99,235,0.25), 0 10px 15px -5px rgba(0,0,0,0.1)',
                    cursor: 'grabbing',
                  }}
                  onDragStart={pauseAutoPlayTemporarily}
                  onDragEnd={(_, info) => {
                    // If dragged horizontally past 40px or with quick flick, advance cards
                    if (info.offset.x < -40 || info.velocity.x < -300) {
                      handleNext();
                    } else if (info.offset.x > 40 || info.velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  className="w-full max-w-[340px] touch-pan-y select-none cursor-grab active:cursor-grabbing"
                >
                  <TreatmentCard
                    treatment={treatments[currentIndex]}
                    onSelect={onSelectTopic}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Phone Variant Navigation Controls: Left/Right arrows + Slide dots */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button
                type="button"
                onClick={() => {
                  pauseAutoPlayTemporarily();
                  handlePrev();
                }}
                aria-label="Previous card"
                className="w-9 h-9 rounded-full bg-white border border-[#2563EB]/25 text-[#111C2C] flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-[#2563EB]" />
              </button>

              {/* Dots indicating current treatment card */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Treatment slides">
                {treatments.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      pauseAutoPlayTemporarily();
                      setCurrentIndex(idx);
                    }}
                    role="tab"
                    aria-selected={currentIndex === idx}
                    aria-label={`Go to treatment card ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-[#2563EB]' : 'w-2 bg-[#2563EB]/25'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  pauseAutoPlayTemporarily();
                  handleNext();
                }}
                aria-label="Next card"
                className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

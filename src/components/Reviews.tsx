import React, { useState, useRef } from 'react';
import { Star, CheckCircle, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import reviewsBgImage from '../assets/images/clinic_reviews_bg_1791698440061.jpg';

interface ReviewItem {
  id: string;
  name: string;
  avatarColor: string;
  treatment: string;
  category: 'All' | 'Cosmetic' | 'General' | 'Nervous Patients' | 'Aligners';
  rating: number;
  date: string;
  verified: boolean;
  source: 'Google Review' | 'Verified Patient';
  title: string;
  quote: string;
  helpfulCount: number;
}

export const Reviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [desktopIndex, setDesktopIndex] = useState<number>(0);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Nervous Patients', 'Cosmetic', 'Aligners', 'General'];

  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      name: 'Sarah Jenkins',
      avatarColor: 'bg-emerald-600',
      treatment: 'Smile Makeover & Porcelain Veneers',
      category: 'Cosmetic',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      source: 'Google Review',
      title: 'Completely changed my confidence',
      quote:
        'I had been terrified of dentists for nearly 12 years after a bad experience. Rahul Clinic made me feel calm from the very second I walked in. They showed me my new smile on screen before doing anything, and the price on paper was exact. No shocks. My teeth look incredibly natural!',
      helpfulCount: 14,
    },
    {
      id: 'rev-2',
      name: 'Michael Chen',
      avatarColor: 'bg-blue-600',
      treatment: 'Clear Aligners & Whitening',
      category: 'Aligners',
      rating: 5,
      date: '1 month ago',
      verified: true,
      source: 'Google Review',
      title: 'Gentle, modern and totally painless',
      quote:
        'No messy molds or gooey impression trays. Just a quick digital scan and a clear payment plan spread out monthly. The team explains every step and checks in constantly. 6 months in and the results are already better than I expected.',
      helpfulCount: 9,
    },
    {
      id: 'rev-3',
      name: 'Elena Rostova',
      avatarColor: 'bg-purple-600',
      treatment: 'Gentle Clean & Tooth Restoration',
      category: 'Nervous Patients',
      rating: 5,
      date: '3 weeks ago',
      verified: true,
      source: 'Google Review',
      title: 'Finally a clinic made for nervous people',
      quote:
        'If you have dental anxiety, this is the only clinic you should go to. They stop the second you raise your hand, give you time to breathe, and never judge you for how long it has been since your last visit. 10/10 care.',
      helpfulCount: 21,
    },
    {
      id: 'rev-4',
      name: 'David O\'Connor',
      avatarColor: 'bg-amber-600',
      treatment: 'Single Tooth Implant Replacement',
      category: 'General',
      rating: 5,
      date: '2 months ago',
      verified: true,
      source: 'Google Review',
      title: 'Honest pricing and zero pressure',
      quote:
        'Got my quote written down on paper to take home and consider. No pushy sales talk, no hidden fees tacked on at the counter. The procedure was smooth and healed without a single issue. Outstanding professionalism.',
      helpfulCount: 7,
    },
    {
      id: 'rev-5',
      name: 'Jessica Taylor',
      avatarColor: 'bg-rose-600',
      treatment: 'Chipped Tooth Repair & Composite Bonding',
      category: 'Cosmetic',
      rating: 5,
      date: '1 month ago',
      verified: true,
      source: 'Google Review',
      title: 'Fixed my front tooth in one visit',
      quote:
        'Chipped my front tooth right before my sister’s wedding. Rahul Clinic booked me in quickly, numbed me thoroughly, and matched the tooth colour so seamlessly you cannot tell anything happened. Truly grateful!',
      helpfulCount: 11,
    },
    {
      id: 'rev-6',
      name: 'Marcus Williams',
      avatarColor: 'bg-indigo-600',
      treatment: 'Check-up, Clean & Night Guard',
      category: 'Nervous Patients',
      rating: 5,
      date: '2 months ago',
      verified: true,
      source: 'Google Review',
      title: 'The calmest dental experience of my life',
      quote:
        'The team is so kind and respectful. They explain what every instrument does before using it and keep the room calm. For someone who used to avoid dental appointments for years, I now feel totally at ease.',
      helpfulCount: 16,
    },
    {
      id: 'rev-7',
      name: 'Chloe Nguyen',
      avatarColor: 'bg-teal-600',
      treatment: 'Clear Aligners & Teeth Straightening',
      category: 'Aligners',
      rating: 5,
      date: '3 weeks ago',
      verified: true,
      source: 'Google Review',
      title: 'Smooth journey from first scan to finish',
      quote:
        'Loved seeing my 3D simulated teeth move on screen before committing. The team checked in monthly, and the aligners fit seamlessly. Zero pain, clear upfront costs, and results I am obsessed with.',
      helpfulCount: 12,
    },
    {
      id: 'rev-8',
      name: 'Liam Patterson',
      avatarColor: 'bg-sky-600',
      treatment: 'Same-Day Crown & Gentle Cleaning',
      category: 'General',
      rating: 5,
      date: '1 month ago',
      verified: true,
      source: 'Google Review',
      title: 'Honest advice and completely painless',
      quote:
        'Had an old filling crack and feared the worst. Dr Daniel Nguyen was incredible—explained options calmly, preserved my natural tooth, and gave me an exact quote before starting. Five stars!',
      helpfulCount: 8,
    },
    {
      id: 'rev-9',
      name: 'Hannah Wilson',
      avatarColor: 'bg-pink-600',
      treatment: 'Composite Edge Bonding & Whitening',
      category: 'Cosmetic',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      source: 'Google Review',
      title: 'Natural smile without drilling my teeth',
      quote:
        'Wanted to smooth minor chipped edges without drilling healthy enamel away. The composite bonding was completed in 90 minutes and matched my shade flawlessly. The team treated me with such warmth.',
      helpfulCount: 15,
    },
    {
      id: 'rev-10',
      name: 'Anita Kumar',
      avatarColor: 'bg-violet-600',
      treatment: 'Anxiety-Free Check-up & Clean',
      category: 'Nervous Patients',
      rating: 5,
      date: '1 month ago',
      verified: true,
      source: 'Google Review',
      title: 'Felt heard, respected and never rushed',
      quote:
        'I had not stepped foot in a clinic for 8 years due to panic attacks. Rahul Clinic uses a hand-signal stop rule that they genuinely follow. The gentlest hygienist and dentists you will ever find in India.',
      helpfulCount: 19,
    },
    {
      id: 'rev-11',
      name: 'Sophie Martin',
      avatarColor: 'bg-orange-600',
      treatment: 'Wisdom Tooth Care & Preventative Check',
      category: 'General',
      rating: 5,
      date: '2 months ago',
      verified: true,
      source: 'Google Review',
      title: 'Quick recovery and crystal-clear fees',
      quote:
        'Dreaded getting my wisdom tooth checked for years. The team was extraordinarily skilled—gentle anaesthetic, fast procedure, zero surprises on the invoice, and full check-in phone call next day.',
      helpfulCount: 10,
    },
  ];

  const filteredReviews =
    selectedCategory === 'All'
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  const maxDesktopIndex = Math.max(0, filteredReviews.length - 3);
  const currentDesktopIndex = Math.min(desktopIndex, maxDesktopIndex);

  const handleNext = () => {
    if (filteredReviews.length <= 3) return;
    setDesktopIndex((prev) => (prev >= maxDesktopIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (filteredReviews.length <= 3) return;
    setDesktopIndex((prev) => (prev <= 0 ? maxDesktopIndex : prev - 1));
  };

  const toggleHelpful = (id: string) => {
    setHelpfulLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileReview, setActiveMobileReview] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const cardWidth = clientWidth - 72 + 12;
    const index = Math.round(scrollLeft / (cardWidth || 1));
    setActiveMobileReview(Math.min(Math.max(index, 0), reviews.length - 1));
  };

  const scrollToMobileReview = (index: number) => {
    if (!mobileScrollRef.current) return;
    const target = mobileScrollRef.current.children[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveMobileReview(index);
    }
  };

  return (
    <section id="reviews" className="relative overflow-hidden w-full py-5 sm:py-6 md:py-8 bg-[#F8FAFC] border-y border-[#111C2C]/10">
      {/* Background Image: Clean modern dental clinic waiting area with happy Indian family & receptionist spanning full width edge-to-edge */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none" aria-hidden="true">
        <img
          src={reviewsBgImage}
          alt=""
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full min-w-full h-full object-cover pointer-events-none"
        />
        {/* Soft veil overlay */}
        <div className="absolute inset-0 w-full h-full bg-[#F8FAFC]/75 md:bg-[#F8FAFC]/65 backdrop-blur-[0.5px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Summary Bar */}
        <div className="max-w-3xl mx-auto text-center space-y-1 mb-2.5 md:mb-3.5">
          {/* Eyebrow badge (hidden on mobile) */}
          <div className="hidden md:inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#2563EB]/10 text-xs font-heading font-semibold text-[#2563EB]">
            <span>Patient Stories</span>
          </div>

          <h2 className="font-heading text-[20px] md:text-2xl lg:text-[28px] font-extrabold text-[#111C2C] tracking-tight leading-snug">
            Real reviews from real patients in India
          </h2>

          <p className="hidden md:block font-sans text-xs sm:text-[13.5px] text-[#111C2C]/70 leading-relaxed max-w-2xl mx-auto">
            See why over 850+ patients trust Rahul Clinic for gentle, anxiety-free care and honest pricing.
          </p>

          {/* Aggregate Rating Summary Card - compact */}
          <div className="hidden md:inline-flex mt-1.5 md:mt-2 flex-wrap items-center justify-center gap-4 sm:gap-6 bg-[#FFFFFF] border border-[#2563EB]/20 shadow-xs rounded-2xl px-4 py-2">
            {/* Google Rating */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FFFFFF] border border-gray-200 flex items-center justify-center shadow-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg text-[#111C2C] leading-none">
                    4.9
                  </span>
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
                <div className="font-sans text-[10.5px] text-[#111C2C]/70 mt-0.5">
                  Overall rating from <strong>850+</strong> patient reviews
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-[#111C2C]/10" />

            {/* Recommendation badge */}
            <div className="flex items-center gap-2 text-left">
              <div className="w-7 h-7 rounded-full bg-[#16A34A]/12 flex items-center justify-center text-[#16A34A]">
                <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <div className="font-heading font-bold text-[11.5px] text-[#111C2C]">
                  98% Would Recommend
                </div>
                <div className="font-sans text-[10px] text-[#111C2C]/70">
                  Verified clinic records in India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills & Slider Controls (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-between gap-3 flex-wrap mb-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setDesktopIndex(0);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] text-[#FFFFFF] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#111C2C]/70 border border-[#111C2C]/10 hover:border-[#2563EB]/40 hover:text-[#111C2C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Slider Prev / Next Arrows & Counter */}
          {filteredReviews.length > 3 && (
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="font-sans text-xs font-medium text-[#111C2C]/60">
                <strong className="text-[#111C2C]">{currentDesktopIndex + 1}–{Math.min(currentDesktopIndex + 3, filteredReviews.length)}</strong> of {filteredReviews.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#2563EB]/25 hover:border-[#2563EB] hover:bg-[#2563EB]/5 text-[#111C2C] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review (show more reviews)"
                  className="w-8 h-8 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-[#FFFFFF] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop & Tablet: Slider displaying 3 reviews at a time */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden [--slider-gap:14px] lg:[--slider-gap:20px]">
            <div
              className="flex transition-transform duration-500 ease-out items-stretch"
              style={{
                gap: 'var(--slider-gap)',
                transform: `translateX(calc(-${currentDesktopIndex} * ((100% - 2 * var(--slider-gap)) / 3 + var(--slider-gap))))`,
              }}
            >
              {filteredReviews.map((r) => {
                const isLiked = helpfulLiked[r.id];
                const currentHelpful = r.helpfulCount + (isLiked ? 1 : 0);

                return (
                  <div
                    key={r.id}
                    className="shrink-0 flex flex-col w-[calc((100%-2*var(--slider-gap))/3)]"
                  >
                    <div className="bg-[#FFFFFF] rounded-xl p-3.5 lg:p-4 border border-[#2563EB]/20 shadow-xs hover:shadow-md hover:border-[#2563EB]/50 transition-all flex flex-col justify-between h-full space-y-2">
                      {/* Review Header: User info + Star rating */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          {/* User Avatar & Name */}
                          <div className="flex items-center gap-2 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-full ${r.avatarColor} text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                            >
                              {r.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-heading font-bold text-[13px] lg:text-[13.5px] text-[#111C2C] leading-snug truncate">
                                {r.name}
                              </h3>
                              <div className="flex items-center gap-1 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-[#16A34A] shrink-0" />
                                <span className="font-sans text-[10px] font-medium text-[#16A34A] truncate">
                                  {r.source}
                                </span>
                                <span className="text-[9px] text-[#111C2C]/40">&bull;</span>
                                <span className="font-sans text-[10px] text-[#111C2C]/60 shrink-0">
                                  {r.date}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Google Icon Badge */}
                          <div className="w-5 h-5 rounded-full bg-[#F8FAFC] border border-gray-200 flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Rating Stars & Treatment Tag */}
                        <div className="flex items-center justify-between gap-2 pt-0.5">
                          <div className="flex items-center gap-0.5 text-[#F59E0B]">
                            {[...Array(r.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                            ))}
                          </div>
                          <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-md bg-[#2563EB]/[0.08] text-[#2563EB] truncate max-w-[130px] lg:max-w-[150px]">
                            {r.treatment}
                          </span>
                        </div>

                        {/* Review Title */}
                        <h4 className="font-heading font-bold text-[13px] lg:text-[13.5px] text-[#111C2C] leading-snug">
                          "{r.title}"
                        </h4>

                        {/* Review Text */}
                        <p className="font-sans text-[11.5px] lg:text-[12px] text-[#111C2C]/80 leading-relaxed line-clamp-3">
                          {r.quote}
                        </p>
                      </div>

                      {/* Footer: Helpful button & Treatment */}
                      <div className="pt-2 border-t border-[#111C2C]/10 flex items-center justify-between text-xs text-[#111C2C]/60">
                        <span className="font-sans text-[10px] truncate max-w-[120px] lg:max-w-none">
                          Care: <strong className="text-[#111C2C] font-semibold">{r.treatment.split('&')[0]}</strong>
                        </span>

                        <button
                          type="button"
                          onClick={() => toggleHelpful(r.id)}
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors cursor-pointer shrink-0 ${
                            isLiked
                              ? 'bg-[#2563EB]/15 text-[#2563EB] font-semibold'
                              : 'text-[#111C2C]/60 hover:bg-[#111C2C]/5'
                          }`}
                          aria-label="Mark review as helpful"
                        >
                          <ThumbsUp className={`w-3 h-3 ${isLiked ? 'fill-[#2563EB]' : ''}`} />
                          <span>Helpful ({currentHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Slider Nav: Pagination Dots + "Show More Reviews" Button */}
          {filteredReviews.length > 3 && (
            <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-[#111C2C]/10">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Desktop review slides">
                {Array.from({ length: maxDesktopIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setDesktopIndex(idx)}
                    aria-label={`Go to review set ${idx + 1}`}
                    role="tab"
                    aria-selected={currentDesktopIndex === idx}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentDesktopIndex === idx
                        ? 'w-6 bg-[#2563EB]'
                        : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                    }`}
                  />
                ))}
              </div>

              {/* "Show More Reviews" Button */}
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#2563EB]/5 border border-[#2563EB]/30 hover:border-[#2563EB] text-[#2563EB] font-heading font-semibold text-xs transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-98"
              >
                <span>Show More Reviews</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Single horizontal swipe row (scroll snap, next card peeking ~40px at right edge) */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3 px-4 -mx-4 pb-1 items-stretch [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r) => (
              <div
                key={`mobile-${r.id}`}
                className="w-[calc(100vw-68px)] max-w-[340px] shrink-0 snap-start flex flex-col"
              >
                <div className="bg-[#FFFFFF] rounded-2xl p-3.5 border border-[#2563EB]/20 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    {/* Stars and the name on one line */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-full ${r.avatarColor} text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                        >
                          {r.name.charAt(0)}
                        </div>
                        <span className="font-heading font-bold text-[13.5px] text-[#111C2C] truncate">
                          {r.name}
                        </span>
                      </div>
                      <div className="flex text-[#F59E0B] shrink-0" aria-label={`${r.rating} stars`}>
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                    </div>

                    {/* Max 3 lines of review text (clipped with ellipsis) */}
                    <p className="font-sans text-[13px] text-[#111C2C]/80 leading-relaxed line-clamp-3 mt-2.5">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#111C2C]/5 flex items-center justify-between text-[10.5px] text-[#111C2C]/60">
                    <span className="truncate max-w-[180px]">{r.treatment}</span>
                    <span className="text-[#16A34A] font-semibold flex items-center gap-1 shrink-0">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small dots under the row to show the position (active dot is blue) */}
          <div
            className="flex justify-center items-center gap-1.5 mt-2.5"
            role="tablist"
            aria-label="Review position dots"
          >
            {reviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToMobileReview(idx)}
                aria-label={`Go to review ${idx + 1}`}
                role="tab"
                aria-selected={activeMobileReview === idx}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeMobileReview === idx
                    ? 'w-4 bg-[#2563EB]'
                    : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badge footer (desktop and tablet only) */}
        <div className="hidden md:block mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-sans text-[#111C2C]/70 bg-[#FFFFFF] border border-[#111C2C]/10 rounded-full px-4 py-1.5 shadow-xs">
            <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>All reviews are from genuine patients verified through our India clinic appointment records.</span>
          </div>
        </div>
      </div>
    </section>
  );
};


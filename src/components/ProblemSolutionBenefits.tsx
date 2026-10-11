import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import boySmilingTeethBg from '../assets/images/boy_smiling_teeth_1791531858160.jpg';
import smilingWomanPhoto from '../assets/images/smiling_woman_steps_1791532397478.jpg';

// Replace with the uploaded smiling woman photo
const UPLOADED_SMILING_WOMAN_PHOTO = smilingWomanPhoto;

interface ProblemSolutionBenefitsProps {
  onOpenBooking: () => void;
}

export const ProblemSolutionBenefits: React.FC<ProblemSolutionBenefitsProps> = ({
  onOpenBooking,
}) => {
  return (
    <div id="our-way" className="space-y-0">
      {/* 1. PROBLEM (PAS: Problem, Agitate, Solve) */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-t border-[#111C2C]/10">
        {/* BACKGROUND & OVERLAYS */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
          {/* Hyper-realistic smiling boy with beautiful teeth */}
          <img
            src={boySmilingTeethBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-[center_25%] blur-[0.5px] opacity-80 md:opacity-85"
          />

          {/* Desktop & tablet white overlay: soft wash so the boy's smile is visible while text and cards stay crystal clear */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.48) 50%, rgba(255,255,255,0.74) 100%)',
            }}
          />

          {/* Center readability overlay for desktop/tablet: keeps center text readable while preserving the warm portrait */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.08) 100%)',
            }}
          />

          {/* Mobile white overlay (<768px): soft readability wash */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0.82) 100%)',
            }}
          />
        </div>

        {/* Content (z-index above the background layer) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/15 backdrop-blur-xs text-xs font-heading font-semibold text-[#2563EB]">
            <span>We get it</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight">
              You waited because the dentist felt scary.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#111C2C]/80 leading-relaxed">
              Maybe it hurt once. Maybe the bill was a shock. Maybe a friend's new teeth looked fake. So you hide your smile. And you wait.
            </p>
          </div>

          {/* Agitate lines in soft frosted cards with thin white border */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            <div
              className="p-4 rounded-xl border border-white/90 bg-[#EEF5FF]/85 backdrop-blur-md shadow-xs flex items-start gap-3"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            >
              <AlertCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
              <p className="font-heading font-bold text-sm text-[#111C2C]">
                Waiting makes small problems big.
              </p>
            </div>
            <div
              className="p-4 rounded-xl border border-white/90 bg-[#EEF5FF]/85 backdrop-blur-md shadow-xs flex items-start gap-3"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            >
              <AlertCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
              <p className="font-heading font-bold text-sm text-[#111C2C]">
                Big problems cost more.
              </p>
            </div>
            <div
              className="p-4 rounded-xl border border-white/90 bg-[#F0FDF4]/90 backdrop-blur-md shadow-xs flex items-start gap-3"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            >
              <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
              <p className="font-heading font-bold text-sm text-[#16A34A]">
                It does not have to be this way.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-md hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION (4 P's: Picture, Promise) */}
      <section className="py-16 sm:py-20 bg-[#2563EB]/[0.08] border-t border-[#2563EB]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#2563EB]/20 text-xs font-heading font-semibold text-[#2563EB]">
            <span>Our Promise</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight">
            See Your New Smile and Your Price Before We Start
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111C2C]/75 max-w-2xl mx-auto leading-relaxed">
            Most people worry about the unknown. So we remove it. We talk first. Then we show your new smile on a screen. Then you get your price on paper. We only start when you say yes.
          </p>
        </div>
      </section>

      {/* 3. BENEFITS (three zigzag rows) */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-[#111C2C]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Row 1 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#2563EB]/25 bg-[#FFFFFF] shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-heading font-semibold text-[#2563EB] uppercase tracking-wider block">
                What you get
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#111C2C]">
                A smile that looks like yours
              </h3>
              <p className="font-sans text-base text-[#111C2C]/70">
                We match the color and shape to your face. No fake look. You pick what feels right.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#2563EB]/25 bg-[#2563EB]/[0.04] shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-heading font-semibold text-[#2563EB] uppercase tracking-wider block">
                What you get
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#111C2C]">
                Care that feels calm
              </h3>
              <p className="font-sans text-base text-[#111C2C]/70">
                We tell you each step. We go slow. Raise your hand and we stop.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#2563EB]/25 bg-[#FFFFFF] shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-heading font-semibold text-[#2563EB] uppercase tracking-wider block">
                What you get
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#111C2C]">
                A price with no shocks
              </h3>
              <p className="font-sans text-base text-[#111C2C]/70">
                You see the price on paper first. One dentist knows your story. Pay a little at a time if you need to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS (three steps) */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-[#2563EB]/[0.08] border-t border-[#2563EB]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 lg:gap-12">
          {/* LEFT COLUMN: 58% on tablet, 55% on desktop; all left-aligned */}
          <div className="contents md:flex md:flex-col md:w-[58%] lg:w-[55%] text-left">
            {/* 1. Heading: left-aligned, same size and style */}
            <div className="order-1 md:order-1 mb-0 md:mb-6 lg:mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight text-left">
                Three easy steps to a smile you love
              </h2>
            </div>

            {/* 2. Three step cards: stacked vertically, full width, 16px between them */}
            <div className="order-3 md:order-2 flex flex-col gap-4 w-full">
              {/* Step 1 */}
              <div className="p-5 md:p-4 lg:p-5 rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs flex items-start gap-4 w-full">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-[#FFFFFF] font-heading font-bold flex items-center justify-center text-lg shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1 min-w-0 text-left">
                  <h3 className="font-heading font-bold text-xl text-[#111C2C]">
                    Book a free visit
                  </h3>
                  <p className="font-sans text-sm text-[#111C2C]/70 leading-relaxed">
                    Pick a time or call us. It takes one minute.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 md:p-4 lg:p-5 rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs flex items-start gap-4 w-full">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-[#FFFFFF] font-heading font-bold flex items-center justify-center text-lg shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1 min-w-0 text-left">
                  <h3 className="font-heading font-bold text-xl text-[#111C2C]">
                    Meet your dentist
                  </h3>
                  <p className="font-sans text-sm text-[#111C2C]/70 leading-relaxed">
                    We look at your teeth. We show your new smile on a screen. We talk. It takes about 30 minutes.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 md:p-4 lg:p-5 rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs flex items-start gap-4 w-full">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-[#FFFFFF] font-heading font-bold flex items-center justify-center text-lg shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1 min-w-0 text-left">
                  <h3 className="font-heading font-bold text-xl text-[#111C2C]">
                    Get your plan
                  </h3>
                  <p className="font-sans text-sm text-[#111C2C]/70 leading-relaxed">
                    You get the steps and the price on paper. Take your time. Start only when you are ready.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Green "Book Appointment" button below cards, left-aligned, 28px space above */}
            <div className="order-4 md:order-3 pt-0 md:pt-7 w-full md:w-auto text-left">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-md hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: photo, 42% on tablet, 45% on desktop */}
          <div className="order-2 md:order-2 w-full md:w-[42%] lg:w-[45%] flex justify-center md:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Soft blue rounded shape (about 90% of photo size, #3B82F6 at 12% opacity) slightly behind and offset to bottom right */}
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-[90%] h-[90%] rounded-[20px] md:rounded-[28px] bg-[#3B82F6]/12 pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Photo container: 4:3 on mobile with 20px corners; 4:5 on desktop (~480px x 600px) & ~480px height on tablet with 28px corners */}
              <div className="relative w-full aspect-4/3 md:aspect-auto md:h-[480px] lg:h-[600px] lg:aspect-4/5 rounded-[20px] md:rounded-[28px] overflow-hidden shadow-md bg-gradient-to-br from-[#EEF5FF] to-[#BFDBFE]">
                {UPLOADED_SMILING_WOMAN_PHOTO ? (
                  <img
                    src={UPLOADED_SMILING_WOMAN_PHOTO}
                    alt="Smiling woman with healthy white teeth"
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                ) : (
                  /* Replace with the uploaded smiling woman photo */
                  <div className="w-full h-full bg-gradient-to-br from-[#EEF5FF] to-[#BFDBFE] flex items-center justify-center p-6 text-center">
                    <span className="font-heading font-medium text-sm sm:text-base text-[#2563EB]/80">
                      Photo: smiling woman
                    </span>
                  </div>
                )}

                {/* Small white floating pill at bottom left with green dot */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#FFFFFF] px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-[#111C2C]/5 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] shrink-0" aria-hidden="true" />
                  <span className="text-[14px] font-heading font-semibold text-[#111C2C] whitespace-nowrap">
                    Gentle care. Clear prices.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

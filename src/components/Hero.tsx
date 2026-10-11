import React from 'react';
import { Star, Check, Clock, Calendar } from 'lucide-react';
import { ClinicConfig } from '../types/booking';
import heroPhotoAsset from '../assets/images/hero-photo.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  config: ClinicConfig;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, config }) => {
  return (
    <section className="relative overflow-hidden bg-[#EEF5FF] flex items-center pt-4 pb-8 md:pt-8 md:pb-16 lg:pt-16 lg:pb-24 md:min-h-[580px] lg:min-h-[640px]">
      {/* Background very soft gradient from --blue at 8% at the top right to white at the left */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(225deg, rgba(37, 99, 235, 0.08) 0%, rgba(238, 245, 255, 0) 65%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Photo Container (id="hero-photo") */}
      <div
        id="hero-photo"
        className="absolute inset-x-0 bottom-0 h-[300px] md:inset-x-auto md:top-0 md:right-0 md:bottom-0 md:w-[62%] lg:w-[65%] md:h-full z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#DBEAFE] to-[#BFDBFE]"
        style={{
          backgroundColor: '#EEF5FF',
        }}
      >
        {/* Put the photo file in the same folder and name it hero-photo.jpg */}
        <img
          id="hero-photo-img"
          src="/hero-photo.jpg"
          onError={(e) => {
            // Fallback to bundled asset if /hero-photo.jpg is not found
            if (e.currentTarget.src !== heroPhotoAsset) {
              e.currentTarget.src = heroPhotoAsset;
            }
          }}
          alt="Smiling woman patient in a dental chair with a dentist holding a mirror"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[65%_20%] md:object-[70%_25%]"
          style={{
            transform: 'scaleX(-1)',
          }}
        />

        {/* Desktop overlay: Fade only the LEFT edge of the photo into the background (#EEF5FF) */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(90deg, #EEF5FF 0%, rgba(238,245,255,0.85) 15%, rgba(238,245,255,0) 42%)',
          }}
          aria-hidden="true"
        />

        {/* Mobile overlay: Fade only the top edge of the photo into the background (#EEF5FF) */}
        <div
          className="block md:hidden absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(180deg, #EEF5FF 0%, rgba(238,245,255,0) 50%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating "Book Appointment" card lowered to the very bottom right corner (does not cover face or smile) */}
      <div
        onClick={onOpenBooking}
        className="hidden md:flex absolute bottom-3 right-4 lg:bottom-4 lg:right-6 z-20 items-center gap-3 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#2563EB]/15 shadow-xl hover:shadow-2xl transition-all cursor-pointer group hover:scale-[1.02]"
        role="button"
        tabIndex={0}
        aria-label="Book appointment"
      >
        <div className="w-10 h-10 rounded-xl bg-[#16A34A] flex items-center justify-center text-[#FFFFFF] shadow-sm group-hover:bg-[#15803d] transition-colors shrink-0">
          <Calendar className="w-5 h-5 text-[#FFFFFF]" />
        </div>
        <div className="text-left">
          <div className="font-heading font-bold text-sm text-[#111C2C] flex items-center gap-1.5">
            <span>Book Appointment</span>
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
          </div>
          <div className="text-xs text-[#111C2C]/70">No pressure · 100% Free visit</div>
        </div>
      </div>

      {/* 3. Hero Content: Relative with z-20 above background and overlay */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-[620px]">
          {/* Trust badge / Google Rating Pill:
              - Authentic Google multi-color G icon
              - 4.9 score with 5 Google gold/amber stars (#F59E0B)
              - 850+ Google Reviews text with interactive link to #reviews
          */}
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 sm:gap-2.5 mt-3 md:mt-0 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#FFFFFF] border border-[#111C2C]/12 hover:border-[#2563EB]/35 shadow-xs hover:shadow-md transition-all text-[#111C2C] group"
            aria-label="Rated 4.9 out of 5 stars based on 850+ Google reviews"
          >
            {/* Google multi-color G logo */}
            <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" aria-hidden="true">
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

            {/* Score & Stars */}
            <div className="flex items-center gap-1.5 font-heading">
              <span className="font-extrabold text-[13px] sm:text-sm text-[#111C2C] leading-none">
                4.9
              </span>
              <span className="flex text-[#F59E0B] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </span>
            </div>

            <span className="text-gray-300 text-xs" aria-hidden="true">·</span>

            {/* Google Reviews count */}
            <span className="font-sans text-[12px] sm:text-[13px] text-[#111C2C]/80 group-hover:text-[#111C2C] font-medium leading-none">
              <strong className="font-semibold text-[#111C2C]">850+</strong> Google Reviews
            </span>
          </a>

          {/* Headline & Paragraph */}
          <div className="mt-3.5 md:mt-6">
            {/* Headline:
                - Mobile (<768px): 32px, font-extrabold (weight 800), line-height 1.15
                - sm+: text-5xl lg:text-6xl
            */}
            <h1 className="font-heading text-[32px] sm:text-5xl lg:text-6xl font-extrabold text-[#111C2C] tracking-tight leading-[1.15] md:leading-[1.12]">
              Love your smile again.{' '}
              <span className="text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-[6px] inline-block">
                We go slow.
              </span>{' '}
              You know the price first.
            </h1>

            {/* Paragraph:
                - Mobile (<768px): mt-3 (gap 12px from headline), text-[15px], line-height 1.5, color #111C2C at 70%
                - md+: mt-4, text-lg sm:text-xl
            */}
            <p className="mt-3 md:mt-4 font-sans text-[15px] sm:text-lg lg:text-xl text-[#111C2C]/70 leading-[1.5] md:leading-relaxed">
              Scared of the dentist? Hiding your smile? We get it. We tell you each step. We show you the plan and the price first. You say yes when you are ready.
            </p>
          </div>

          {/* Value bullets:
              - Mobile (<768px): mt-3.5 (14px gap below paragraph), 1 column, gap-2 (8px gap between items), 13px text
              - sm+: grid-cols-2 gap-3.5 pt-1 mt-6 text-sm
          */}
          <div className="mt-3.5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
            <div className="flex items-center gap-2 font-sans text-[13px] sm:text-sm text-[#111C2C]">
              <div className="w-5 h-5 rounded-full bg-[#16A34A]/12 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
              </div>
              <span>Kind care for nervous people</span>
            </div>
            <div className="flex items-center gap-2 font-sans text-[13px] sm:text-sm text-[#111C2C]">
              <div className="w-5 h-5 rounded-full bg-[#16A34A]/12 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
              </div>
              <span>See your new smile on a screen first</span>
            </div>
            <div className="flex items-center gap-2 font-sans text-[13px] sm:text-sm text-[#111C2C]">
              <div className="w-5 h-5 rounded-full bg-[#16A34A]/12 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
              </div>
              <span>Pay a little at a time</span>
            </div>
            <div className="flex items-center gap-2 font-sans text-[13px] sm:text-sm text-[#111C2C]">
              <div className="w-5 h-5 rounded-full bg-[#16A34A]/12 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#16A34A] stroke-[3]" />
              </div>
              <span>No referral needed</span>
            </div>
          </div>

          {/* CTA action area:
              - Mobile (<768px): mt-4 (16px gap below bullets), single primary booking button full width, 48px height, 16px text (weight 700), secondary call button HIDDEN on mobile (accessible via top phone icon and bottom bar)
              - sm+: pt-2 flex-row gap-4
          */}
          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Primary button: GREEN #16A34A, text --white, font weight 700, pill shape */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto h-12 sm:h-auto px-6 sm:px-8 py-0 sm:py-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[16px] sm:text-[17px] shadow-lg shadow-[#16A34A]/20 hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-[#FFFFFF]" />
              <span>Book Appointment</span>
            </button>

            {/* Secondary button: hidden on mobile (<sm), visible on sm+ */}
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex px-6 py-4 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] text-[#2563EB] font-heading font-semibold text-[17px] hover:bg-[#2563EB]/[0.08] transition-colors text-center items-center justify-center"
            >
              Call {config.phone}
            </a>
          </div>

          {/* Reassurance note */}
          <p className="mt-2 md:mt-3 font-sans text-[11px] sm:text-xs text-[#111C2C]/70 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>Free. No pressure. We call you back in 2 hours when we are open.</span>
          </p>

          {/* Social Proof Statistics placed in place of the section */}
          <div className="mt-5 md:mt-6 pt-4 border-t border-[#111C2C]/10">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* Card 1 */}
              <div className="p-2 sm:p-3 md:py-3.5 md:px-3 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-0.5">
                <div className="font-heading text-lg sm:text-2xl md:text-[26px] font-extrabold text-[#2563EB] leading-tight">
                  850+
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#111C2C]/70 leading-tight">
                  patients have rated us
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-2 sm:p-3 md:py-3.5 md:px-3 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-0.5">
                <div className="font-heading text-lg sm:text-2xl md:text-[26px] font-extrabold text-[#2563EB] leading-tight">
                  4.9 out of 5
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#111C2C]/70 leading-tight">
                  stars from patients
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-2 sm:p-3 md:py-3.5 md:px-3 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-0.5">
                <div className="font-heading text-lg sm:text-2xl md:text-[26px] font-extrabold text-[#2563EB] leading-tight">
                  10+ years
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#111C2C]/70 leading-tight">
                  caring for smiles in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

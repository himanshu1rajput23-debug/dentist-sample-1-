import React from 'react';

interface SocialProofStatsProps {
  onOpenBooking: () => void;
}

export const SocialProofStats: React.FC<SocialProofStatsProps> = ({ onOpenBooking }) => {
  return (
    <section className="pt-[24px] pb-[32px] md:pb-[40px] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three equal width statistics cards: 1 column on mobile (12px gap), 3 columns on desktop (20px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] md:gap-[20px]">
          {/* Card 1 */}
          <div className="p-[16px] md:py-[20px] md:px-[24px] rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-1">
            <div className="font-heading text-[32px] md:text-[36px] font-extrabold text-[#2563EB] leading-tight">
              850+
            </div>
            <p className="font-sans text-[14px] md:text-[15px] text-[#111C2C]/70">
              patients have rated us
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-[16px] md:py-[20px] md:px-[24px] rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-1">
            <div className="font-heading text-[32px] md:text-[36px] font-extrabold text-[#2563EB] leading-tight">
              4.9 out of 5
            </div>
            <p className="font-sans text-[14px] md:text-[15px] text-[#111C2C]/70">
              stars from patients
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-[16px] md:py-[20px] md:px-[24px] rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/25 shadow-xs text-center space-y-1">
            <div className="font-heading text-[32px] md:text-[36px] font-extrabold text-[#2563EB] leading-tight">
              10+ years
            </div>
            <p className="font-sans text-[14px] md:text-[15px] text-[#111C2C]/70">
              caring for smiles in India
            </p>
          </div>
        </div>

        {/* Centered button with exactly 24px space above it */}
        <div className="mt-[24px] text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-md hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

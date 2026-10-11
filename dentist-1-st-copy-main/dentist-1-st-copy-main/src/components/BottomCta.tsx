import React from 'react';
import { Sparkles, Phone, Calendar, Clock } from 'lucide-react';
import { ClinicConfig } from '../types/booking';

interface BottomCtaProps {
  onOpenBooking: () => void;
  config: ClinicConfig;
}

export const BottomCta: React.FC<BottomCtaProps> = ({ onOpenBooking, config }) => {
  return (
    <section className="py-20 bg-[#111C2C] text-[#FFFFFF] relative overflow-hidden border-t border-[#2563EB]/20">
      {/* Background subtle light ambient blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/15 text-xs font-heading font-semibold text-[#FFFFFF]">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Ready when you are</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
            Your free visit is one tap away. Leave with a plan and a price.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#FFFFFF]/85 leading-relaxed">
            We keep a small number of free visits each week. That way, you never feel rushed. Pick your time today.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary booking button: GREEN #16A34A, white text, 700 weight, min 17px */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-xl hover:bg-[#15803d] active:bg-[#166534] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-[#FFFFFF]" />
            <span>Book a Call</span>
          </button>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-7 py-4 rounded-full border-2 border-[#FFFFFF] text-[#FFFFFF] font-heading font-semibold text-[17px] hover:bg-[#FFFFFF]/10 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FFFFFF]" />
            <span>Call (02) 8319 2888</span>
          </a>
        </div>

        {/* Checklist */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFFFFF]/85 font-sans">
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0">
              <Clock className="w-3 h-3 text-[#FFFFFF]" />
            </span>
            Your new smile on a screen
          </span>
          <span>&bull;</span>
          <span>A clear price on paper</span>
          <span>&bull;</span>
          <span>A kind team that never rushes you</span>
        </div>

        {/* Microcopy under button */}
        <p className="font-sans text-xs text-[#FFFFFF]/70 pt-2">
          Free. No pressure. We call you back in 2 hours when we are open.
        </p>
      </div>
    </section>
  );
};

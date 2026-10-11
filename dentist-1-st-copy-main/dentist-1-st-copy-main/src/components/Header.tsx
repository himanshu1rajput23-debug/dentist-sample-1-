import React from 'react';
import { Phone } from 'lucide-react';
import { ClinicConfig } from '../types/booking';
import { LogoIcon } from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenSettings?: () => void;
  config: ClinicConfig;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, config }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#111C2C]/10 w-full">
      {/* 
        Responsive Container:
        - Mobile (<768px): h-[56px], px-4 (16px), py-2 (8px), flex items-center justify-between
        - Tablet (768px - 1023px): h-20, px-6, flex items-center justify-between
        - Desktop (>=1024px): max-w-[1120px], h-16, px-6, centered, no wrap
      */}
      <div className="mx-auto flex items-center justify-between h-[56px] px-4 md:h-20 md:px-6 lg:max-w-[1120px] lg:h-16 lg:px-6">
        
        {/* LOGO: Left - Unified, fully responsive and visible across mobile, tablet, and desktop */}
        <a
          href="#"
          className="flex items-center gap-2 md:gap-3 group shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded py-1"
          aria-label="Apex Dental India Home"
        >
          <LogoIcon size={34} className="group-hover:scale-105 md:w-[38px] md:h-[38px] shrink-0" />
          <div className="flex flex-col justify-center">
            {/* Main brand name */}
            <span className="font-heading text-[16px] sm:text-[17px] md:text-[18px] font-extrabold leading-tight text-[#111C2C] block whitespace-nowrap">
              Apex Dental
            </span>
            {/* Tagline / Subtitle */}
            <span className="font-sans text-[10px] md:text-[11px] leading-tight text-[#111C2C]/70 block font-normal tracking-wide whitespace-nowrap">
              India
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (1024px and above): 5 short labels, 24px gap, Inter 15px weight 500, no wrap */}
        <nav className="hidden lg:flex items-center gap-6 font-sans text-[15px] font-medium text-[#111C2C] shrink-0 whitespace-nowrap">
          <a
            href="#treatments"
            className="py-2 px-1 hover:text-[#2563EB] hover:underline hover:decoration-[#2563EB] hover:decoration-2 transition-colors min-h-[40px] flex items-center"
          >
            Treatments
          </a>
          <a
            href="#transformations"
            className="py-2 px-1 hover:text-[#2563EB] hover:underline hover:decoration-[#2563EB] hover:decoration-2 transition-colors min-h-[40px] flex items-center"
          >
            Results
          </a>
          <a
            href="#reviews"
            className="py-2 px-1 hover:text-[#2563EB] hover:underline hover:decoration-[#2563EB] hover:decoration-2 transition-colors min-h-[40px] flex items-center"
          >
            Reviews
          </a>
          <a
            href="#faqs"
            className="py-2 px-1 hover:text-[#2563EB] hover:underline hover:decoration-[#2563EB] hover:decoration-2 transition-colors min-h-[40px] flex items-center"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action: Phone & Primary Booking Button */}
        {/* Mobile (<768px): Navbar Call Button only (40px circle, 2px solid blue border, blue phone icon, links to tel:) */}
        <div className="flex md:hidden items-center shrink-0">
          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="w-10 h-10 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB]/[0.08] active:bg-[#2563EB]/[0.15] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5 text-[#2563EB]" />
          </a>
        </div>

        {/* Tablet (768px to 1023px): unchanged */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] text-[#2563EB] font-heading font-semibold text-sm hover:bg-[#2563EB]/[0.08] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2563EB]" />
            <span>{config.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-sm hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        {/* Desktop (>=1024px): compact phone link + compact green button on one line */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#2563EB] text-[#2563EB] font-heading font-semibold text-[14px] hover:bg-[#2563EB]/[0.08] transition-colors h-10 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>{config.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[15px] shadow-sm hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer h-10 whitespace-nowrap flex items-center justify-center"
          >
            Book a Call
          </button>
        </div>

      </div>
    </header>
  );
};

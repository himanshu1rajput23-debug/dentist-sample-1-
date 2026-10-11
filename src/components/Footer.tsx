import React from 'react';
import { Phone, Mail, MapPin, Settings } from 'lucide-react';
import { ClinicConfig } from '../types/booking';
import { LogoIcon } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenSettings: () => void;
  config: ClinicConfig;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenSettings, config }) => {
  return (
    <footer className="bg-[#111C2C] text-[#FFFFFF] border-t border-[#FFFFFF]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FFFFFF]/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoIcon size={40} className="hover:scale-105" />
              <div>
                <span className="font-heading text-lg font-bold tracking-tight text-[#FFFFFF] block leading-none">
                  RAHUL CLINIC
                </span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#FFFFFF]/70 block font-semibold mt-1">
                  INDIA
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#FFFFFF]/85 leading-relaxed">
              Gentle dental care in India.
            </p>

            <div className="pt-1">
              {/* Primary booking button: GREEN #16A34A */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[15px] hover:bg-[#15803d] transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Col 2: Care & Results Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#FFFFFF] uppercase tracking-wider">
              Care
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#FFFFFF]/85">
              <li>
                <a href="#treatments" className="hover:text-[#FFFFFF] hover:underline hover:decoration-[#2563EB]">
                  Care
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#FFFFFF] hover:underline hover:decoration-[#2563EB]">
                  Results
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FFFFFF] hover:underline hover:decoration-[#2563EB]">
                  Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#FFFFFF] uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#FFFFFF]/85">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Rahul Clinic, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#2563EB] font-bold">&bull;</span>
                <span>Open Monday to Saturday</span>
              </li>
              <li>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-[#FFFFFF] hover:underline hover:decoration-[#2563EB] hover:decoration-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{config.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Integrations & Delivery */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#FFFFFF] uppercase tracking-wider">
              Clinic Admin
            </h4>
            <p className="font-sans text-xs text-[#FFFFFF]/85 leading-relaxed">
              Leads are dispatched to clinic email &amp; webhook.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#FFFFFF] text-xs font-sans font-medium transition-colors cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Configure Webhook &amp; Email</span>
              </button>
            </div>
          </div>
        </div>

        {/* Small print */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FFFFFF]/70">
          <div>
            Every smile is different. Your dentist will tell you what can work for you.
          </div>
          <div className="flex items-center gap-6">
            <span>Registration no. 2849104</span>
            <span>&bull;</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>&bull;</span>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

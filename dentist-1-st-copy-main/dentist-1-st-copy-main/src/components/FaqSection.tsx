import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is the first visit really free?',
      a: 'Yes. The visit, the scan and your plan are free. You do not have to buy anything.',
    },
    {
      q: 'What if I am scared?',
      a: 'Tell us when you book. We give you more time. We say each step before we do it. You can say stop at any time.',
    },
    {
      q: 'Will it hurt?',
      a: 'We numb the area first. We go slow. Tell us if you feel pain and we will stop.',
    },
    {
      q: 'How much will it cost?',
      a: 'We give you the price on paper before we start. No shocks.',
    },
    {
      q: 'Can I pay a little at a time?',
      a: 'Yes. We have plans to pay over time. Ask us at your visit.',
    },
    {
      q: 'What if I do not like my result?',
      a: 'Tell us. We will talk and make a plan together.',
    },
    {
      q: 'Do I need a referral?',
      a: 'No. You can book on your own.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-[#FFFFFF] border-t border-[#111C2C]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight">
            Questions people ask
          </h2>
        </div>

        {/* FAQ list: white rows with 1px --blue at 25% borders. Open row: --blue 8% background */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border border-[#2563EB]/25 overflow-hidden transition-all shadow-xs ${
                  isOpen ? 'bg-[#2563EB]/[0.08]' : 'bg-[#FFFFFF]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#111C2C]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#2563EB]' : 'text-[#111C2C]/60'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-sans text-[#111C2C]/80 leading-relaxed border-t border-[#2563EB]/15">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          {/* Primary CTA button: GREEN #16A34A */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-sm hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

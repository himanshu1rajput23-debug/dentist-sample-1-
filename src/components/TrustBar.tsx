import React from 'react';
import { ShieldCheck, Sparkles, FileText, Zap } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#2563EB]" />,
      text: 'Real, registered dentists',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#2563EB]" />,
      text: 'Clean, safe tools every time',
    },
    {
      icon: <FileText className="w-4 h-4 text-[#2563EB]" />,
      text: 'Your price on paper',
    },
    {
      icon: <Zap className="w-4 h-4 text-[#2563EB]" />,
      text: 'Fast help for tooth pain',
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-y border-[#111C2C]/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <span className="font-heading font-bold text-sm text-[#111C2C] uppercase tracking-wider shrink-0">
            Indian families trust Rahul Clinic
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#111C2C]/85">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

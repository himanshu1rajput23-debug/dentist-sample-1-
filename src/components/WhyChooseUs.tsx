import React from 'react';
import { HeartHandshake, Eye, FileText, Clock, CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#2563EB]" />,
      title: 'A kind, calm team',
      desc: 'We go at your pace. We tell you each step. You can ask us to stop at any time.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#2563EB]" />,
      title: 'See your new smile first',
      desc: 'No messy trays. A quick scan makes a picture on a screen. You see your new smile before we start.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#2563EB]" />,
      title: 'Your price on paper',
      desc: 'You get a clear price in writing. No shocks. Take it home and think.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#2563EB]" />,
      title: 'A call back fast',
      desc: 'Leave your number. We call you back in 2 hours when we are open.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#2563EB]/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Eyebrow pill: blue tint background, text --blue-deep, weight 600 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-xs font-heading font-semibold text-[#2563EB]">
                <span>Why Rahul Clinic</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight">
                Made for people who hate the dentist.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#111C2C]/70 leading-relaxed">
                Fear of the dentist is real. We get it. We go at your speed. Your comfort comes first.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-[#2563EB]/25 bg-[#FFFFFF] hover:border-[#2563EB]/50 transition-all space-y-3 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111C2C]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-[#111C2C]/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              {/* Primary button: GREEN #16A34A, white text, 700 weight, min 17px, pill shape */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] shadow-md hover:bg-[#15803d] active:bg-[#166534] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Column: Visual Box in dark navy --ink (#111C2C) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#111C2C] text-[#FFFFFF] relative overflow-hidden shadow-xl border border-[#2563EB]/20 flex flex-col">
              {/* Consultation Suite Editorial Photo */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden border-b border-[#FFFFFF]/10 bg-[#111C2C]">
                <img
                  src="/src/assets/images/dental_consultation_1791443540148.jpg"
                  alt="Friendly, relaxed dental consultation in modern suite showing digital smile preview on tablet"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111C2C] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#111C2C]/80 backdrop-blur-xs text-xs font-heading font-semibold text-[#FFFFFF] border border-[#FFFFFF]/20 shadow-xs">
                    A friendly chat, not a scary visit.
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF]/15 text-xs font-heading font-semibold text-[#FFFFFF] mb-3">
                    What to expect on day one
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#FFFFFF]">
                    A relaxed, conversational consultation.
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#FFFFFF]/85 leading-relaxed">
                  Your 30-minute consultation is a friendly conversation. We listen to what you want to achieve, examine your teeth gently, and show you options on screen.
                </p>

                <div className="space-y-3.5 pt-2 border-t border-[#FFFFFF]/15 text-sm font-sans text-[#FFFFFF]/92">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                    </span>
                    <span>Private consultation suite with ceiling entertainment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                    </span>
                    <span>No surprise dental work or sudden drilling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                    </span>
                    <span>Take-home tailored quote to review with family</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                    </span>
                    <span>Free on-site parking &amp; 3-min walk from station</span>
                  </div>
                </div>

                <div className="pt-4">
                  {/* Action button inside navy card: primary action = GREEN */}
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-3.5 px-4 rounded-full bg-[#16A34A] text-[#FFFFFF] font-heading font-bold text-[17px] hover:bg-[#15803d] active:bg-[#166534] transition-colors cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { HelpTopic } from '../types/booking';

interface ResultsGalleryProps {
  onOpenBookingWithTopic: (topic: HelpTopic) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onOpenBookingWithTopic }) => {
  const cases = [
    {
      title: 'Handcrafted Porcelain Veneers',
      topic: 'Improve my smile' as HelpTopic,
      duration: '2 visits across 3 weeks',
      details: 'Restored severely chipped, worn front teeth with natural ultra-thin feldspathic porcelain veneers.',
      patient: 'Michael T., 34',
    },
    {
      title: 'Guided Titanium Dental Implant',
      topic: 'Replace a missing tooth' as HelpTopic,
      duration: 'Completed in 3 months',
      details: 'Replaced a missing lower premolar with 3D CT surgical guided implant and custom screw-retained crown.',
      patient: 'Karen S., 49',
    },
    {
      title: 'Invisalign Clear Aligner Therapy',
      topic: 'Straighten my teeth' as HelpTopic,
      duration: '8 months active treatment',
      details: 'Corrected severe deep bite and upper anterior crowding discreetly without metal wires or brackets.',
      patient: 'David R., 27',
    },
    {
      title: 'Airflow Deep Clean & In-Chair Whitening',
      topic: 'Check-up and clean' as HelpTopic,
      duration: 'Single 75-minute appointment',
      details: 'Removed heavy coffee and tea staining gently with warm erythritol powder, followed by 6 shades lighter whitening.',
      patient: 'Elena W., 41',
    },
  ];

  return (
    <section id="results" className="py-20 bg-[#FFFFFF] border-t border-[#111C2C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {/* Eyebrow pill: blue tint background, text --blue-deep, weight 600 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-xs font-heading font-semibold text-[#2563EB]">
            <span>PROVEN PATIENT RESULTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111C2C] tracking-tight">
            Real transformations, life-changing smiles.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111C2C]/70">
            Every smile is customized to complement your facial structure, lip dynamics, and tooth shade preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#2563EB]/25 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                {/* Visual block in --blue-deep with white text */}
                <div className="h-40 rounded-xl bg-[#2563EB] text-[#FFFFFF] p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-center text-[11px] font-sans">
                    <span className="bg-[#FFFFFF]/20 text-[#FFFFFF] px-2 py-0.5 rounded font-medium">
                      Case #{i + 1}
                    </span>
                    <span className="text-[#FFFFFF]/85">{c.duration}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#FFFFFF] font-heading font-bold opacity-90">
                      {c.topic}
                    </div>
                    <div className="font-heading font-bold text-base text-[#FFFFFF] leading-snug">
                      {c.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-sans text-[#111C2C]/70 leading-relaxed">
                    {c.details}
                  </p>
                  <p className="text-[11px] font-heading font-semibold text-[#111C2C]/50">
                    Patient: {c.patient}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#111C2C]/10">
                <button
                  type="button"
                  onClick={() => onOpenBookingWithTopic(c.topic)}
                  className="w-full py-2.5 px-3 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] text-[#2563EB] font-heading font-semibold text-xs hover:bg-[#2563EB]/[0.08] transition-colors cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

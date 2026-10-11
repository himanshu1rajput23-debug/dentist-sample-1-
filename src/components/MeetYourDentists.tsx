import React, { useState, useRef, useEffect } from 'react';
import { Check, Smile, ShieldCheck, Sparkles, Clock, FileCheck } from 'lucide-react';
import emilyPhoto from '../assets/images/dentist_emily_carter_1791456014702.jpg';
import clinicBgImage from '../assets/images/doctor_clinic_chair_1791698964597.jpg';

interface MeetYourDentistsProps {
  onOpenBooking: () => void;
}

interface Doctor {
  id: string;
  name: string;
  firstName: string;
  role: string;
  initials: string;
  image: string;
  altText: string;
  experience: string;
  patients: string;
  qualifications: string[];
  quote: string;
}

const DOCTORS: Doctor[] = [
  {
    id: 'emily-carter',
    name: 'Dr. Emily Carter',
    firstName: 'Emily',
    role: 'Principal Dentist',
    initials: 'EC',
    image: emilyPhoto,
    altText: 'Portrait of Dr. Emily Carter, Principal Dentist smiling warmly in clean clinical scrubs',
    experience: '15 Years Experience',
    patients: '3,000+ Happy Patients',
    qualifications: [
      'Bachelor of Dental Surgery, University of Sydney',
      'Member, Australian Dental Association',
      'Focus: Check-ups, fillings and gentle care for nervous patients',
    ],
    quote: 'I never rush. I explain everything first.',
  },
];

const TRUST_ITEMS = [
  { text: 'Fully Registered Dentists', icon: ShieldCheck },
  { text: 'Modern Sterilisation', icon: Sparkles },
  { text: 'Years of Local Experience', icon: Clock },
  { text: 'Clear Prices First', icon: FileCheck },
];

export const MeetYourDentists: React.FC<MeetYourDentistsProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Gentle fade-up animation when the section scrolls into view (respecting prefers-reduced-motion)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="meet-your-dentists"
      aria-labelledby="meet-dentists-heading"
      className="relative overflow-hidden w-full py-4 sm:py-5 lg:py-6 bg-[#F8FAFC] border-b border-[#111C2C]/10"
    >
      {/* BACKGROUND CLINIC IMAGE WRAPPER (full edge-to-edge width, z-index 0) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* High-resolution clinic interior image with slow loop zoom spanning full width */}
        <img
          src={clinicBgImage}
          alt=""
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full min-w-full h-full object-cover animate-slow-zoom pointer-events-none"
        />

        {/* Readability Overlay - increased opacity to decrease background image visibility by 20% */}
        <div
          className="absolute inset-0 w-full h-full bg-white/75 md:bg-white/70 backdrop-blur-[0.5px] pointer-events-none"
        />
      </div>

      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0'
        }`}
      >
        {/* SECTION HEADER (centred, compact height) */}
        <div className="text-center max-w-xl mx-auto space-y-0.5 mb-2.5 sm:mb-3">
          {/* Small blue pill label: "Principal Dentist" */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm shadow-xs border border-[#3B82F6]/20 text-[10.5px] font-heading font-semibold text-[#2563EB]">
            <span>Principal Dentist</span>
          </div>

          {/* Heading (navy, "Your Dentist" in blue): "Meet Your Dentist" */}
          <h2
            id="meet-dentists-heading"
            className="font-heading text-[20px] sm:text-[23px] lg:text-[25px] font-extrabold text-[#111C2C] tracking-tight leading-tight"
          >
            Meet <span className="text-[#3B82F6]">Your Dentist</span>
          </h2>

          {/* Sub-text (grey, short, 4th grade English) */}
          <p className="font-sans text-[12.5px] sm:text-[13px] text-[#475569] max-w-[480px] mx-auto leading-relaxed font-medium">
            Kind, skilled and easy to talk to. Dr. Emily will explain every step before she starts.
          </p>
        </div>

        {/* CENTERED DOCTOR CARD (horizontal layout to fit lower section height) */}
        <div className="max-w-[580px] mx-auto w-full">
          <DoctorCard doctor={DOCTORS[0]} onOpenBooking={onOpenBooking} />
        </div>

        {/* TRUST STRIP UNDER THE CARDS (one thin row, compact) */}
        <div className="mt-2.5 sm:mt-3 py-1.5 px-3 sm:px-5 rounded-xl bg-white/95 backdrop-blur-sm border border-[#3B82F6]/20 flex flex-wrap items-center justify-center gap-y-1 gap-x-4 sm:gap-x-6 max-w-2xl mx-auto shadow-[0_3px_12px_rgba(17,28,44,0.04)]">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-sans font-medium text-[#111C2C]"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                  <Icon className="w-2 h-2 text-[#3B82F6]" />
                </div>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-[10px] text-[#64748B] text-center mt-1.5 font-sans">
          Sample team photos shown. Images are created with AI and are not our real staff.
        </p>
      </div>
    </section>
  );
};

interface DoctorCardProps {
  doctor: Doctor;
  onOpenBooking: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(17,28,44,0.05)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(17,28,44,0.08)] transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group">
      {/* Photo column */}
      <div className="relative w-full sm:w-[175px] shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#DBEAFE] to-[#BFDBFE]">
        {/* Soft blue gradient placeholder with doctor's initials */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-[#1E3A8A]"
          aria-hidden={!imageError}
        >
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF]/80 backdrop-blur-sm shadow-inner flex items-center justify-center border border-[#3B82F6]/25">
            <span className="font-heading font-extrabold text-[18px] tracking-wider text-[#2563EB]">
              {doctor.initials}
            </span>
          </div>
          <span className="font-sans text-[9px] font-semibold mt-1 text-[#1E3A8A]/70 uppercase tracking-wider">
            Rahul Clinic Team
          </span>
        </div>

        {/* Doctor Photo */}
        {!imageError && (
          <img
            src={doctor.image}
            alt={doctor.altText}
            loading="lazy"
            onError={() => setImageError(true)}
            className="relative z-10 w-full h-full object-cover object-[center_20%] group-hover:scale-[1.02] transition-transform duration-500"
          />
        )}
      </div>

      {/* Content column */}
      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
        <div>
          {/* Header row: Name, Role & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-[#111C2C] leading-snug">
                {doctor.name}
              </h3>
              <p className="font-heading font-semibold text-[11.5px] text-[#3B82F6] mt-0.5">
                {doctor.role}
              </p>
            </div>
            {/* Stats pills */}
            <div className="flex items-center gap-1.5 mt-0.5 sm:mt-0">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0B7A3E]/10 text-[#0B7A3E]">
                <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                <span>{doctor.experience}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#3B82F6]/10 text-[#2563EB]">
                <Smile className="w-2.5 h-2.5" />
                <span>{doctor.patients}</span>
              </span>
            </div>
          </div>

          {/* Qualifications */}
          <ul className="space-y-0.5 my-1.5 text-[11px] sm:text-[11.5px] text-[#111C2C]/80 font-sans leading-snug">
            {doctor.qualifications.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <Check className="w-2.5 h-2.5 text-[#0B7A3E] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <p className="font-sans italic text-[11px] text-[#64748B] leading-relaxed mb-2">
            &ldquo;{doctor.quote}&rdquo;
          </p>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="w-full sm:w-auto self-start py-1.5 px-3.5 rounded-full border-2 border-[#3B82F6] text-[#2563EB] hover:bg-[#3B82F6] hover:text-[#FFFFFF] active:bg-[#2563EB] font-heading font-bold text-xs transition-all duration-200 inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] cursor-pointer"
        >
          Book with Dr. {doctor.firstName}
        </button>
      </div>
    </div>
  );
};

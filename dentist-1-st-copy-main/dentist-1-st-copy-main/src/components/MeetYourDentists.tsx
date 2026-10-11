import React, { useState, useRef, useEffect } from 'react';
import { Check, Smile, ShieldCheck, Sparkles, Clock, FileCheck } from 'lucide-react';
import emilyPhoto from '../assets/images/dentist_emily_carter_1791456014702.jpg';
import danielPhoto from '../assets/images/dentist_daniel_nguyen_1791456035270.jpg';
import priyaPhoto from '../assets/images/dentist_priya_sharma_1791456049005.jpg';

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
  {
    id: 'daniel-nguyen',
    name: 'Dr. Daniel Nguyen',
    firstName: 'Daniel',
    role: 'Cosmetic and Implant Dentist',
    initials: 'DN',
    image: danielPhoto,
    altText: 'Portrait of Dr. Daniel Nguyen, Cosmetic and Implant Dentist smiling warmly in modern dental scrubs',
    experience: '11 Years Experience',
    patients: '2,000+ Happy Patients',
    qualifications: [
      'Bachelor of Dental Surgery, University of Queensland',
      'Advanced training in dental implants and veneers',
      'Focus: Smile makeovers, veneers and implants',
    ],
    quote: 'A great smile should look natural, like yours.',
  },
  {
    id: 'priya-sharma',
    name: 'Dr. Priya Sharma',
    firstName: 'Priya',
    role: 'Family and Clear Aligner Dentist',
    initials: 'PS',
    image: priyaPhoto,
    altText: 'Portrait of Dr. Priya Sharma, Family and Clear Aligner Dentist with a friendly welcoming smile',
    experience: '8 Years Experience',
    patients: '1,500+ Happy Patients',
    qualifications: [
      'Bachelor of Dental Surgery, University of Melbourne',
      'Certified clear aligner provider',
      'Focus: Kids, teens, adults and straighter teeth',
    ],
    quote: 'Every visit should feel calm and friendly.',
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const cardWidth = clientWidth * 0.82;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), DOCTORS.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const targetCard = scrollContainerRef.current.children[index] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSlide(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="meet-your-dentists"
      aria-labelledby="meet-dentists-heading"
      className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#111C2C]/10"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0'
        }`}
      >
        {/* SECTION HEADER (centred) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          {/* Small blue pill label: "Our Team" */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B82F6]/10 text-xs font-heading font-semibold text-[#3B82F6]">
            <span>Our Team</span>
          </div>

          {/* Heading (navy, "Your Dentists" in blue): "Meet Your Dentists" */}
          <h2
            id="meet-dentists-heading"
            className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#111C2C] tracking-tight leading-tight"
          >
            Meet <span className="text-[#3B82F6]">Your Dentists</span>
          </h2>

          {/* Sub-text (grey, short, 4th grade English) */}
          <p className="font-sans text-[16px] sm:text-[17px] text-[#64748B] max-w-[580px] mx-auto leading-relaxed">
            Kind, skilled and easy to talk to. They will explain every step before they start.
          </p>
        </div>

        {/* DOCTOR CARDS */}
        {/* Desktop (3 in one row, 24px gap) & Tablet (3 in ONE single row, 12px gap, equal height) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-3 lg:gap-6 items-stretch">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onOpenBooking={onOpenBooking} />
          ))}
        </div>

        {/* Mobile: horizontal swipe row, one card at a time with the next card peeking in, plus small dots below */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 gap-4 px-4 -mx-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center flex flex-col"
              >
                <DoctorCard doctor={doctor} onOpenBooking={onOpenBooking} />
              </div>
            ))}
          </div>

          {/* Mobile swipe indicator dots */}
          <div
            className="flex justify-center items-center gap-2 mt-2"
            role="tablist"
            aria-label="Dentist card slides"
          >
            {DOCTORS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`View doctor slide ${idx + 1}`}
                aria-selected={activeSlide === idx}
                role="tab"
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] cursor-pointer ${
                  activeSlide === idx ? 'w-6 bg-[#3B82F6]' : 'w-2 bg-[#3B82F6]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* TRUST STRIP UNDER THE CARDS (one thin row, centred, 4 small items with blue icons) */}
        <div className="mt-10 sm:mt-12 py-3.5 px-4 sm:px-6 rounded-2xl bg-[#EEF5FF] border border-[#3B82F6]/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 max-w-4xl mx-auto shadow-[0_2px_8px_rgba(59,130,246,0.04)]">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-sans font-medium text-[#111C2C]"
              >
                <div className="w-5 h-5 rounded-full bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                </div>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Replace the photos, names, qualifications and registration details with the real dentists, then delete this line. */}
        <p className="text-[12px] text-[#64748B] text-center mt-3 font-sans">
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
    <div className="bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(17,28,44,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(17,28,44,0.1)] transition-all duration-300 flex flex-col h-full overflow-hidden group">
      {/* Top: a portrait photo, 4:5 ratio, rounded top corners, object-fit cover, face in the upper half */}
      <div className="relative w-full aspect-[4/5] rounded-t-[20px] overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#DBEAFE] to-[#BFDBFE] shrink-0">
        {/* Soft blue gradient placeholder with doctor's initials (always present as background/fallback) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-[#1E3A8A]"
          aria-hidden={!imageError}
        >
          <div className="w-20 h-20 rounded-full bg-[#FFFFFF]/80 backdrop-blur-sm shadow-inner flex items-center justify-center border border-[#3B82F6]/25">
            <span className="font-heading font-extrabold text-[28px] tracking-wider text-[#2563EB]">
              {doctor.initials}
            </span>
          </div>
          <span className="font-sans text-xs font-semibold mt-2 text-[#1E3A8A]/70 uppercase tracking-wider">
            Apex Dental Team
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

      {/* Under the photo, inside the card with 20px padding (reduced to 12px on tablet) */}
      <div className="p-5 md:p-3 lg:p-5 flex flex-col flex-1">
        {/* Name (bold, navy, 20px desktop/mobile, 16px tablet) */}
        <h3 className="font-heading font-bold text-[20px] md:text-[16px] lg:text-[20px] text-[#111C2C] leading-snug">
          {doctor.name}
        </h3>

        {/* Role (blue, semibold, 15px desktop/mobile, 13px tablet) */}
        <p className="font-heading font-semibold text-[15px] md:text-[13px] lg:text-[15px] text-[#3B82F6] mt-0.5">
          {doctor.role}
        </p>

        {/* A row of two small stats in pills: green tick pill and blue pill (12px on tablet) */}
        <div className="flex flex-wrap items-center gap-2 md:gap-1.5 lg:gap-2 mt-3 md:mt-2 lg:mt-3 mb-3 md:mb-2 lg:mb-3">
          {/* Green tick pill */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-2 md:py-0.5 lg:px-2.5 lg:py-1 rounded-full text-xs md:text-[12px] lg:text-xs font-semibold bg-[#0B7A3E]/10 text-[#0B7A3E]">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{doctor.experience}</span>
          </span>

          {/* Blue pill */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-2 md:py-0.5 lg:px-2.5 lg:py-1 rounded-full text-xs md:text-[12px] lg:text-xs font-semibold bg-[#3B82F6]/10 text-[#2563EB]">
            <Smile className="w-3.5 h-3.5" />
            <span>{doctor.patients}</span>
          </span>
        </div>

        {/* Qualifications: on tablet, show only the first bullet; hide remaining bullets */}
        <ul className="space-y-1.5 md:space-y-1 lg:space-y-1.5 mb-3 md:mb-0 lg:mb-3 text-[13px] md:text-[12px] lg:text-[13px] text-[#111C2C]/80 font-sans leading-snug">
          {doctor.qualifications.map((bullet, idx) => (
            <li
              key={idx}
              className={`items-start gap-1.5 ${idx === 0 ? 'flex' : 'flex md:hidden lg:flex'}`}
            >
              <Check className="w-3.5 h-3.5 text-[#0B7A3E] shrink-0 mt-0.5 stroke-[2.5]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* One short quote in grey italic, 14px (hidden on tablet) */}
        <p className="font-sans italic text-[14px] text-[#64748B] leading-relaxed mb-4 block md:hidden lg:block">
          &ldquo;{doctor.quote}&rdquo;
        </p>

        {/* A small outlined pill button at the bottom: "Book with Dr. [first name]" (hidden on tablet) */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="mt-auto w-full py-2.5 px-4 rounded-full border-2 border-[#3B82F6] text-[#2563EB] hover:bg-[#3B82F6] hover:text-[#FFFFFF] active:bg-[#2563EB] font-heading font-bold text-[14px] transition-all duration-200 flex md:hidden lg:inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] cursor-pointer"
        >
          Book with Dr. {doctor.firstName}
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SmileTransformations } from './components/transformations/SmileTransformations';
import { MeetYourDentists } from './components/MeetYourDentists';
import { Treatments } from './components/Treatments';
import { ProblemSolutionBenefits } from './components/ProblemSolutionBenefits';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ClinicSettingsModal } from './components/ClinicSettingsModal';
import { HelpTopic, ClinicConfig } from './types/booking';
import { getClinicConfig } from './services/bookingService';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<HelpTopic | ''>('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [clinicConfig, setClinicConfig] = useState<ClinicConfig>(getClinicConfig());

  const handleOpenBooking = (topic?: HelpTopic) => {
    setSelectedTopic(topic || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111C2C] selection:bg-[#2563EB]/20 selection:text-[#111C2C] relative">
      {/* Top Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenSettings={() => setIsSettingsOpen(true)}
        config={clinicConfig}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          config={clinicConfig}
        />

        {/* Smile Changes (Before and after) */}
        <SmileTransformations
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Meet Your Dentists */}
        <MeetYourDentists
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Our Care */}
        <Treatments
          onSelectTopic={(topic) => handleOpenBooking(topic)}
        />

        {/* Problem, Solution, Benefits, Process */}
        <ProblemSolutionBenefits
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Reviews */}
        <Reviews />

        {/* FAQ */}
        <FaqSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Final CTA */}
        <BottomCta
          onOpenBooking={() => handleOpenBooking()}
          config={clinicConfig}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenSettings={() => setIsSettingsOpen(true)}
        config={clinicConfig}
      />

      {/* THE BOOKING FORM MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTopic={selectedTopic}
      />

      {/* CLINIC SETTINGS / DESTINATION CONFIG MODAL */}
      <ClinicSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={clinicConfig}
        onUpdateConfig={(newConfig) => setClinicConfig(newConfig)}
      />
    </div>
  );
}

import React from 'react';

export const HeroImageOverlay: React.FC = () => {
  return (
    <>
      {/* Desktop horizontal gradient (md and up): Fade into #EEF5FF */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(90deg, #EEF5FF 0%, rgba(238,245,255,0.85) 15%, rgba(238,245,255,0) 45%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile vertical gradient (< 768px): Fade into #EEF5FF */}
      <div
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(180deg, #EEF5FF 0%, rgba(238,245,255,0) 55%)',
        }}
        aria-hidden="true"
      />
    </>
  );
};


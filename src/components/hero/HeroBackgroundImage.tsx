import React from 'react';
import heroPhotoAsset from '../../assets/images/hero-photo.jpg';

export const HeroBackgroundImage: React.FC = () => {
  return (
    <div id="hero-photo" className="absolute inset-x-0 bottom-0 h-[280px] md:inset-x-auto md:top-0 md:right-0 md:bottom-0 md:w-[60%] md:h-full z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#DBEAFE] to-[#BFDBFE]">
      {/* Put the photo file in the same folder and name it hero-photo.jpg */}
      <img
        id="hero-photo-img"
        src="/hero-photo.jpg"
        onError={(e) => {
          if (e.currentTarget.src !== heroPhotoAsset) {
            e.currentTarget.src = heroPhotoAsset;
          }
        }}
        alt="Smiling woman patient in a dental chair with a dentist holding a mirror"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover object-[center_15%] md:object-[center_20%]"
      />
    </div>
  );
};


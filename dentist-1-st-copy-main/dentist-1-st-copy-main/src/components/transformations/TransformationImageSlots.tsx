import React from 'react';
import veneersBeforeImg from '../../assets/images/veneers_before_1791435841817.jpg';
import veneersAfterImg from '../../assets/images/veneers_after_1791435859331.jpg';
import whiteningBeforeImg from '../../assets/images/whitening_before_1791435873786.jpg';
import whiteningAfterImg from '../../assets/images/whitening_after_1791435887659.jpg';
import alignersBeforeImg from '../../assets/images/aligners_before_1791435906336.jpg';
import alignersAfterImg from '../../assets/images/aligners_after_1791435918274.jpg';
import gapBeforeImg from '../../assets/images/gap_teeth_before_1791441752950.jpg';
import gapAfterImg from '../../assets/images/gap_teeth_after_1791441768608.jpg';
import chipBeforeImg from '../../assets/images/chipped_tooth_before_1791441783184.jpg';
import chipAfterImg from '../../assets/images/chipped_tooth_after_1791441801455.jpg';
import missingBeforeImg from '../../assets/images/missing_tooth_before_1791441819663.jpg';
import missingAfterImg from '../../assets/images/missing_tooth_after_1791441838528.jpg';

interface SlotProps {
  customSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * REPLACEMENT NOTE:
 * When the clinic has real patient photos with written consent,
 * replace the image source in these twelve components, change the section headline
 * to "Real patient results", remove the AI disclaimer, and replace it with
 * "Photos shared with patient consent. Individual results vary."
 */

// IMAGE SLOT: "Transformation 1 Before"
export const Transformation1Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || veneersBeforeImg}
        alt="Transformation 1 Before - Natural teeth before veneers"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 1 After"
export const Transformation1After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || veneersAfterImg}
        alt="Transformation 1 After - Restored smile with natural-look porcelain veneers"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      {/* After chip: GREEN represents "this is good/success" */}
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 2 Before"
export const Transformation2Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || whiteningBeforeImg}
        alt="Transformation 2 Before - Teeth before professional whitening"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 2 After"
export const Transformation2After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || whiteningAfterImg}
        alt="Transformation 2 After - Bright, radiant smile after professional whitening"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 3 Before"
export const Transformation3Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || alignersBeforeImg}
        alt="Transformation 3 Before - Crowded teeth before clear aligners"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 3 After"
export const Transformation3After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || alignersAfterImg}
        alt="Transformation 3 After - Symmetrical, straightened smile after clear aligners"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 4 Before"
export const Transformation4Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || gapBeforeImg}
        alt="Transformation 4 Before - Diastema gap between front teeth before bonding"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 4 After"
export const Transformation4After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || gapAfterImg}
        alt="Transformation 4 After - Seamless gap closure with composite bonding"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 5 Before"
export const Transformation5Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || chipBeforeImg}
        alt="Transformation 5 Before - Chipped front tooth enamel edge before repair"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 5 After"
export const Transformation5After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || chipAfterImg}
        alt="Transformation 5 After - Restored front tooth with natural composite bonding"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 6 Before"
export const Transformation6Before: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || missingBeforeImg}
        alt="Transformation 6 Before - Missing tooth gap in dental arch"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#111C2C]/80 text-[#FFFFFF] shadow-xs backdrop-blur-xs">
        Before
      </span>
    </div>
  );
};

// IMAGE SLOT: "Transformation 6 After"
export const Transformation6After: React.FC<SlotProps> = ({ customSrc, className = '', loading = 'lazy' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden bg-[#111C2C]/5 ${className}`}>
      <img
        src={customSrc || missingAfterImg}
        alt="Transformation 6 After - Restored smile with natural dental implant crown"
        className="w-full h-full object-cover object-center"
        loading={loading}
      />
      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-[#16A34A] text-[#FFFFFF] shadow-xs">
        After
      </span>
    </div>
  );
};

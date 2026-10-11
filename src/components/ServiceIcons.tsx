import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Shared tooth path geometry used for Veneers, Implants and Tooth Pain
 * Creates a cohesive family of icons with consistent proportions.
 */
const SHARED_TOOTH_PATH =
  'M 12 5.5 C 10 4, 6 4.5, 5.5 8 C 5 11.5, 6 13.5, 7 15 C 7.5 16.5, 7.5 19.5, 8.5 20.5 C 9.2 21, 10.2 19, 11 16.5 C 11.5 14.8, 12.5 14.8, 13 16.5 C 13.8 19, 14.8 21, 15.5 20.5 C 16.5 19.5, 16.5 16.5, 17 15 C 18 13.5, 19 11.5, 18.5 8 C 18 4.5, 14 4, 12 5.5 Z';

/**
 * 1. Thin Tooth Covers (Veneers)
 * A front tooth outline with a four-point sparkle at its top right corner.
 */
export const VeneerIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Shared tooth outline, slightly shifted to allow sparkle room */}
    <path d="M 11 6 C 9.2 4.6, 5.8 5.1, 5.3 8.2 C 4.8 11.4, 5.7 13.3, 6.7 14.7 C 7.2 16.1, 7.2 18.9, 8.1 19.8 C 8.8 20.3, 9.7 18.4, 10.4 16.1 C 10.9 14.5, 11.8 14.5, 12.3 16.1 C 13 18.4, 13.9 20.3, 14.6 19.8 C 15.5 18.9, 15.5 16.1, 16 14.7 C 16.9 13.3, 17.8 11.4, 17.4 8.2 C 17.1 6.5, 15.8 5.4, 14 5.3" />
    {/* Subtle veneer sheen/facet line on front face */}
    <path d="M 8.5 9 C 8.5 11.5 9.5 13 10 13.5" opacity="0.6" />
    {/* Four-point sparkle at top right corner */}
    <path d="M 19 2 L 19.7 4.2 A 0.8 0.8 0 0 0 20.3 4.8 L 22.5 5.5 L 20.3 6.2 A 0.8 0.8 0 0 0 19.7 6.8 L 19 9 L 18.3 6.8 A 0.8 0.8 0 0 0 17.7 6.2 L 15.5 5.5 L 17.7 4.8 A 0.8 0.8 0 0 0 18.3 4.2 Z" />
  </svg>
);

/**
 * 2. New Teeth That Look Real (Dental Implants)
 * A tooth outline sitting on top of a screw-shaped implant post.
 */
export const ImplantIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Upper tooth crown */}
    <path d="M 12 4.5 C 9.8 3.5, 6.5 4, 6 7 C 5.5 9.8, 6.8 11.5, 8.5 12.5 L 15.5 12.5 C 17.2 11.5, 18.5 9.8, 18 7 C 17.5 4, 14.2 3.5, 12 4.5 Z" />
    {/* Implant platform / collar */}
    <line x1="9" y1="13.5" x2="15" y2="13.5" />
    {/* Central screw rod */}
    <line x1="12" y1="13.5" x2="12" y2="21" />
    {/* Screw thread lines */}
    <line x1="9.5" y1="15.5" x2="14.5" y2="15.5" />
    <line x1="10" y1="17.5" x2="14" y2="17.5" />
    <line x1="10.5" y1="19.5" x2="13.5" y2="19.5" />
    {/* Screw apex tip */}
    <path d="M 11 21 L 12 22 L 13 21" />
  </svg>
);

/**
 * 3. Clear Trays (Aligners)
 * A smooth, curved tray shape wrapping over a row of teeth arch.
 */
export const AlignerIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Outer clear tray smooth top curve */}
    <path d="M 3 13.5 C 3 7.5, 7.5 4.5, 12 4.5 C 16.5 4.5, 21 7.5, 21 13.5" />
    {/* Outer clear tray bottom edge wrapping around teeth */}
    <path d="M 3.2 15.5 C 4 18, 7.5 19.5, 12 19.5 C 16.5 19.5, 20 18, 20.8 15.5" />
    {/* 4 small teeth inside the tray (row of teeth) */}
    <path d="M 5 14 C 6.2 14.8, 7.2 14.8, 8.5 14 C 9.8 14.8, 10.8 14.8, 12 14 C 13.2 14.8, 14.2 14.8, 15.5 14 C 16.8 14.8, 17.8 14.8, 19 14" />
    {/* Vertical tooth dividing lines */}
    <line x1="8.5" y1="7.5" x2="8.5" y2="14" />
    <line x1="12" y1="6.5" x2="12" y2="14" />
    <line x1="15.5" y1="7.5" x2="15.5" y2="14" />
  </svg>
);

/**
 * 4. Check-up and Clean
 * A dental mirror (round head on angled handle) with a small cleaning sparkle.
 */
export const CheckupIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Round dental mirror head */}
    <circle cx="8.5" cy="8.5" r="4.75" />
    {/* Mirror reflective highlight */}
    <path d="M 6.5 6.5 A 2.8 2.8 0 0 1 10.5 6.5" />
    {/* Mirror neck / angle */}
    <line x1="12.5" y1="12" x2="14.5" y2="14" />
    {/* Long slender dental handle */}
    <line x1="14.5" y1="14" x2="21.5" y2="21" />
    {/* Clean sparkle next to mirror */}
    <path d="M 18 3 L 18.5 4.5 A 0.5 0.5 0 0 0 18.9 4.9 L 20.4 5.4 L 18.9 5.9 A 0.5 0.5 0 0 0 18.5 6.3 L 18 7.8 L 17.5 6.3 A 0.5 0.5 0 0 0 17.1 5.9 L 15.6 5.4 L 17.1 4.9 A 0.5 0.5 0 0 0 17.5 4.5 Z" />
    {/* Small secondary sparkle point */}
    <circle cx="21" cy="9.5" r="0.5" fill="currentColor" />
  </svg>
);

/**
 * 5. Tooth Pain Help
 * Shared tooth outline with two short, calm pain burst lines at top right.
 */
export const ToothPainIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Shared tooth outline (shifted slightly left to accommodate calm burst lines) */}
    <path d="M 11 6 C 9.2 4.6, 5.8 5.1, 5.3 8.2 C 4.8 11.4, 5.7 13.3, 6.7 14.7 C 7.2 16.1, 7.2 18.9, 8.1 19.8 C 8.8 20.3, 9.7 18.4, 10.4 16.1 C 10.9 14.5, 11.8 14.5, 12.3 16.1 C 13 18.4, 13.9 20.3, 14.6 19.8 C 15.5 18.9, 15.5 16.1, 16 14.7 C 16.9 13.3, 17.8 11.4, 17.4 8.2 C 17.1 6.5, 15.8 5.4, 14 5.3" />
    {/* Two short calm pain burst lines at top right corner (not lightning, calm radiating pulses) */}
    <line x1="18.5" y1="5" x2="21.5" y2="3" />
    <line x1="19.5" y1="8" x2="22.5" y2="8.5" />
  </svg>
);

/**
 * 6. Full Smile Visit
 * A wide smiling mouth showing teeth with a small calendar tick at bottom right.
 */
export const SmileVisitIcon: React.FC<IconProps> = ({ className = 'w-7 h-7', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Wide upper smile lip line */}
    <path d="M 2.5 8 C 6 10, 14 10, 17.5 8" />
    {/* Smiling mouth lower contour */}
    <path d="M 2.5 8 C 2.5 13.5, 7 16.5, 11 16.5 C 12.2 16.5, 13.3 16.2, 14.2 15.6" />
    {/* Upper teeth bite line */}
    <path d="M 4 10.5 C 7 11.8, 12 11.8, 14.5 10.8" />
    {/* Tooth dividers */}
    <line x1="7.5" y1="9.3" x2="7.5" y2="11.2" />
    <line x1="10.5" y1="9.6" x2="10.5" y2="11.6" />
    {/* Dimple corners */}
    <path d="M 2 7 C 2.3 8, 2.3 9, 2 10" />

    {/* Small calendar card in bottom right corner */}
    <rect x="14" y="13.5" width="7.5" height="7.5" rx="1.5" />
    {/* Calendar binder pins */}
    <line x1="16" y1="12" x2="16" y2="14" />
    <line x1="19.5" y1="12" x2="19.5" y2="14" />
    {/* Small calendar tick / checkmark */}
    <path d="M 16 17.5 L 17.5 19 L 20 16" />
  </svg>
);

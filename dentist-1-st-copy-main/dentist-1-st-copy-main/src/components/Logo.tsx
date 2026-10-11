import React from 'react';

interface LogoIconProps {
  size?: number;
  className?: string;
  variant?: 'standalone' | 'contained';
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  size = 34,
  className = '',
  variant = 'standalone',
}) => {
  const uniqueId = React.useId().replace(/:/g, '');
  const greenGradId = `apex-green-grad-${uniqueId}`;
  const blueGradId = `apex-blue-grad-${uniqueId}`;
  const sparkleGradId = `apex-sparkle-grad-${uniqueId}`;

  const svgMarkup = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Vitality Emerald/Forest Green gradient */}
        <linearGradient id={greenGradId} x1="12" y1="20" x2="52" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="60%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        {/* Clinical Trust Blue gradient */}
        <linearGradient id={blueGradId} x1="48" y1="20" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Radiance Sparkle gradient */}
        <linearGradient id={sparkleGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Left lobe: Natural organic tooth contour (green) */}
      <path
        d="M 48 23
           C 34 19, 18 26, 15 42
           C 12 56, 17 70, 24 80
           C 28 86, 34 89, 39 89
           C 43 89, 44 83, 45 77
           C 47 64, 48 51, 48 38
           Z"
        fill={`url(#${greenGradId})`}
      />

      {/* Right lobe: Precision tooth contour (blue) */}
      <path
        d="M 52 23
           C 66 19, 82 26, 85 42
           C 88 56, 83 70, 76 80
           C 72 86, 66 89, 61 89
           C 57 89, 56 83, 55 77
           C 53 64, 52 51, 52 38
           Z"
        fill={`url(#${blueGradId})`}
      />

      {/* Center smile arch */}
      <path
        d="M 31 46
           Q 50 63 69 46
           Q 50 56 31 46"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* 4-point Radiance Sparkle (upper right) */}
      <path
        d="M 78 14
           Q 78 22 86 22
           Q 78 22 78 30
           Q 78 22 70 22
           Q 78 22 78 14 Z"
        fill={`url(#${sparkleGradId})`}
      />
      <circle cx="78" cy="22" r="1.8" fill="#FFFFFF" />
    </svg>
  );

  if (variant === 'contained') {
    return (
      <div
        className="flex items-center justify-center rounded-[9px] bg-[#FFFFFF] border border-[#2563EB]/20 shadow-xs shrink-0 p-1"
        style={{ width: size, height: size }}
      >
        {svgMarkup}
      </div>
    );
  }

  return svgMarkup;
};

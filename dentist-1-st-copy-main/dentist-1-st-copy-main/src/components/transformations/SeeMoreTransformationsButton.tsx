import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SeeMoreTransformationsButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

/**
 * See More Transformations Button
 * Secondary outlined button to expand / collapse additional smile transformations.
 */
export const SeeMoreTransformationsButton: React.FC<SeeMoreTransformationsButtonProps> = ({
  isExpanded,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isExpanded}
      aria-controls="extra-transformations-row"
      className="h-[48px] px-6 sm:px-8 rounded-full bg-[#FFFFFF] border-2 border-[#2563EB] text-[#2563EB] font-semibold text-[17px] hover:bg-[#2563EB]/[0.08] active:bg-[#2563EB]/[0.15] transition-all cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap"
    >
      <span>{isExpanded ? 'Show Fewer' : 'See More Smile Changes'}</span>
      <ChevronDown
        className={`w-[18px] h-[18px] text-[#2563EB] transition-transform duration-300 ease-in-out ${
          isExpanded ? 'rotate-180' : 'rotate-0'
        }`}
      />
    </button>
  );
};

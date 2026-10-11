import React from 'react';

interface TransformationCardProps {
  title: string;
  detail: string;
  beforeSlot: React.ReactNode;
  afterSlot: React.ReactNode;
  className?: string;
}

export const TransformationCard: React.FC<TransformationCardProps> = ({
  title,
  detail,
  beforeSlot,
  afterSlot,
  className = '',
}) => {
  return (
    <div className={`bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#2563EB]/25 shadow-xs hover:shadow-md hover:border-[#2563EB]/50 transition-all flex flex-col justify-between space-y-4 h-full ${className}`}>
      {/* Before/After Image Pair: two 4:3 images side by side inside one rounded 20px frame */}
      <div className="rounded-[20px] overflow-hidden border border-[#111C2C]/10 grid grid-cols-2 gap-0.5 bg-[#111C2C]/10 aspect-[8/3]">
        {beforeSlot}
        {afterSlot}
      </div>

      {/* Card Information */}
      <div className="space-y-1.5 pt-1 flex-1 flex flex-col justify-end">
        <h3 className="font-heading font-bold text-lg text-[#111C2C] tracking-tight">
          {title}
        </h3>
        <p className="font-sans text-xs text-[#111C2C]/70">
          {detail}
        </p>
      </div>
    </div>
  );
};

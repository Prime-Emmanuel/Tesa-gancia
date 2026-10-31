import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isLast?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, isLast = false }) => {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-4 sm:p-6 ${
        !isLast ? 'lg:border-r border-[#EADBFA]' : ''
      }`}
    >
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#260C45] font-normal tracking-tight flex items-baseline justify-center">
        <span>{count}</span>
        <span className="text-[#7B2CBF] ml-1 font-semibold">{suffix}</span>
      </div>
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] text-[#6C5B82] font-sans font-semibold max-w-[190px]">
        {label}
      </p>
    </div>
  );
};

export const StatsBand: React.FC<{
  stats: { value: number; suffix: string; label: string }[];
}> = ({ stats }) => {
  return (
    <div className="w-full bg-white border border-[#EADBFA] shadow-[0_8px_30px_rgba(123,44,191,0.05)] my-12 p-3 sm:p-6 rounded-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2">
        {stats.map((stat, idx) => (
          <StatItem
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            isLast={idx === stats.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

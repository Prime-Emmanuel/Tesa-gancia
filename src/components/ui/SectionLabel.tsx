import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'dark' | 'light';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  align = 'center',
  className = '',
  theme = 'light',
}) => {
  const alignClass = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
  }[align];

  const lineColor = theme === 'dark' ? 'bg-[#9D4EDD]' : 'bg-[#7B2CBF]/50';
  const textColor = theme === 'dark' ? 'text-[#E0AAFF]' : 'text-[#7B2CBF]';

  return (
    <div className={`inline-flex items-center gap-3 ${alignClass} ${className}`}>
      <span className={`h-px w-6 sm:w-10 ${lineColor}`} aria-hidden="true" />
      <span className={`text-[11px] sm:text-xs tracking-[0.22em] uppercase font-bold font-sans ${textColor}`}>
        {children}
      </span>
      <span className={`h-px w-6 sm:w-10 ${lineColor}`} aria-hidden="true" />
    </div>
  );
};

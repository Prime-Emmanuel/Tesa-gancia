import React from 'react';

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'dark' | 'light';
  as?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  theme = 'light',
  as = 'h2',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#260C45]';
  const subtitleColor = theme === 'dark' ? 'text-white/80' : 'text-[#6C5B82]';
  const Tag = as;

  const fontClass =
    as === 'h1' ? 'text-fluid-h1' : as === 'h2' ? 'text-fluid-h2' : 'text-fluid-h3';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <Tag className={`font-serif ${fontClass} font-normal tracking-tight ${titleColor}`}>
        {title}{' '}
        {highlight && (
          <span className="italic font-normal text-violet-gradient font-serif">
            {highlight}
          </span>
        )}
      </Tag>

      {subtitle && (
        <p className={`mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed max-w-2xl font-sans ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

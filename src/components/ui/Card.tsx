import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'white' | 'subtle' | 'dark' | 'glass';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  theme = 'white',
  hoverEffect = true,
  onClick,
}) => {
  const themeClasses = {
    white: 'bg-white border border-[#EADBFA] text-[#220A3D] shadow-[0_8px_30px_rgba(123,44,191,0.06)]',
    subtle: 'bg-[#FAF5FE] border border-[#EADBFA] text-[#220A3D] shadow-[0_6px_25px_rgba(123,44,191,0.04)]',
    dark: 'bg-[#260C45] border border-[#3E1570] text-white',
    glass: 'bg-[#260C45]/90 backdrop-blur-md border border-[#7B2CBF]/40 text-white',
  }[theme];

  const hoverClasses = hoverEffect
    ? 'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#7B2CBF] hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(123,44,191,0.12)]'
    : '';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden p-6 sm:p-8 ${themeClasses} ${hoverClasses} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'subtle' | 'outline' | 'gold';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'violet',
  className = '',
}) => {
  const variantClasses = {
    violet: 'bg-[#7B2CBF] text-white border border-[#7B2CBF]',
    subtle: 'bg-[#FAF5FE] text-[#7B2CBF] border border-[#EADBFA]',
    outline: 'bg-transparent text-[#7B2CBF] border border-[#7B2CBF]/60',
    gold: 'bg-[#FAF5FE] text-[#7B2CBF] border border-[#EADBFA]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium font-sans ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};

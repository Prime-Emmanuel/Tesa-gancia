import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'violet' | 'link' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  className = '',
  external = false,
  'aria-label': ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-sans tracking-[0.16em] uppercase transition-all duration-300 relative select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group min-h-[44px] rounded-sm';

  const sizeClasses = {
    sm: 'text-[11px] px-4 py-2 min-w-[110px]',
    md: 'text-xs px-6 py-3 min-w-[140px]',
    lg: 'text-xs px-8 py-3.5 min-w-[180px]',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#7B2CBF] via-[#8B35D4] to-[#6823A4] text-white font-semibold shadow-[0_4px_18px_rgba(123,44,191,0.25)] hover:shadow-[0_6px_25px_rgba(123,44,191,0.4)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF]/10 font-semibold',
    violet:
      'bg-[#260C45] text-white hover:bg-[#3E1570] font-semibold shadow-[0_4px_16px_rgba(38,12,69,0.25)] hover:-translate-y-0.5 active:translate-y-0',
    link:
      'p-0 min-h-[44px] min-w-0 text-[#7B2CBF] hover:text-[#521C94] bg-transparent underline-offset-8 hover:underline font-semibold',
    ghost:
      'text-current hover:text-[#7B2CBF] hover:bg-[#FAF5FE] border border-transparent',
  }[variant];

  const content = (
    <>
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

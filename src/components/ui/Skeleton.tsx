import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rect',
}) => {
  const variantClasses = {
    rect: 'rounded-none',
    circle: 'rounded-full',
    text: 'h-4 w-3/4 rounded-none',
  }[variant];

  return (
    <div
      className={`bg-gradient-to-r from-[#161619] via-[#2A2A2E]/50 to-[#161619] bg-[length:200%_100%] animate-pulse ${variantClasses} ${className}`}
      aria-hidden="true"
    />
  );
};

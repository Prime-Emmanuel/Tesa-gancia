import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const maxWidthClass = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1240px]',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  }[size];

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};

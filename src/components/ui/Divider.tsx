import React from 'react';

interface DividerProps {
  className?: string;
  withOrnament?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  className = '',
  withOrnament = true,
}) => {
  return (
    <div className={`relative flex items-center justify-center my-8 sm:my-12 w-full ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent flex-1" />
      {withOrnament && (
        <div className="mx-4 flex items-center justify-center text-[#7B2CBF]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent flex-1" />
    </div>
  );
};

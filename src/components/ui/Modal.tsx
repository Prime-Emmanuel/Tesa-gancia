import React from 'react';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '2xl',
}) => {
  const containerRef = useFocusTrap(isOpen, onClose);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  }[maxWidth];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Modal Dialog'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-[#1C0833]/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={containerRef}
        className={`relative w-full ${maxWidthClasses} bg-white border border-[#EADBFA] p-6 sm:p-10 shadow-[0_20px_50px_rgba(123,44,191,0.2)] z-10 my-auto rounded-sm text-[#220A3D]`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6C5B82] hover:text-[#220A3D] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors cursor-pointer rounded-sm border border-[#EADBFA] hover:border-[#7B2CBF]"
          aria-label="Fermer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {title && (
          <div className="mb-6 pb-4 border-b border-[#EADBFA]">
            <h3 className="font-serif text-2xl text-[#260C45] tracking-tight">{title}</h3>
          </div>
        )}

        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

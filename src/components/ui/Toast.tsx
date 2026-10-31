import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  isVisible: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  const typeStyles = {
    success: 'border-[#7B2CBF] text-[#220A3D] bg-white',
    info: 'border-[#EADBFA] text-[#220A3D] bg-white',
    warning: 'border-amber-400 text-[#220A3D] bg-[#FFFBF0]',
    error: 'border-red-400 text-[#220A3D] bg-[#FFF5F5]',
  }[type];

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100%-2rem)] transition-all duration-300"
    >
      <div
        className={`border px-5 py-4 shadow-[0_10px_35px_rgba(123,44,191,0.15)] flex items-center justify-between gap-4 rounded-sm ${typeStyles}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7B2CBF]" />
          <p className="text-xs sm:text-sm font-sans tracking-wide leading-relaxed font-medium">
            {message}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#6C5B82] hover:text-[#220A3D] p-1 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
            aria-label="Fermer la notification"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
};

import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  options?: Option[];
  rows?: number;
  hint?: string;
  disabled?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  options = [],
  rows = 4,
  hint,
  disabled = false,
  className = '',
  theme = 'light',
}) => {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  const isLight = theme === 'light';

  const inputBaseClasses = isLight
    ? 'w-full bg-white text-[#220A3D] border placeholder-[#8C7E99] text-sm px-4 py-3.5 transition-colors duration-200 outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF]/30 min-h-[48px] rounded-sm'
    : 'w-full bg-[#1C0833] text-white border placeholder-white/40 text-sm px-4 py-3.5 transition-colors duration-200 outline-none focus:border-[#9D4EDD] focus:ring-1 focus:ring-[#9D4EDD]/30 min-h-[48px] rounded-sm';

  const borderClass = error
    ? 'border-red-500 focus:border-red-500'
    : isLight
    ? 'border-[#EADBFA]'
    : 'border-[#521C94]';

  const labelColor = isLight ? 'text-[#220A3D]' : 'text-[#E0AAFF]';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={id}
        className={`text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-between ${labelColor}`}
      >
        <span>
          {label} {required && <span className="text-[#7B2CBF]">*</span>}
        </span>
        {hint && !error && (
          <span id={hintId} className="text-[10px] lowercase tracking-normal text-[#8C7E99] font-normal">
            {hint}
          </span>
        )}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={`${inputBaseClasses} ${borderClass} resize-y font-sans`}
        />
      ) : type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={`${inputBaseClasses} ${borderClass} appearance-none pr-10 cursor-pointer font-sans`}
          >
            {placeholder && (
              <option value="" disabled className={isLight ? 'text-[#8C7E99]' : 'bg-[#260C45] text-white/50'}>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className={isLight ? 'bg-white text-[#220A3D]' : 'bg-[#260C45] text-white'}
              >
                {opt.label}
              </option>
            ))}
          </select>
          <div className={`absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? 'text-[#7B2CBF]' : 'text-[#C77DFF]'}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={`${inputBaseClasses} ${borderClass} font-sans`}
        />
      )}

      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500 mt-1 flex items-center gap-1.5 font-sans">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

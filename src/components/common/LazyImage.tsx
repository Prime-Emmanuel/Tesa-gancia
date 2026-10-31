import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1", "3/2"
  priority?: boolean;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  priority = false,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const BRAND_LOGO_URL = 'https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg';

  return (
    <div
      className={`relative overflow-hidden bg-[#FAF5FE] ${className}`}
      style={{ aspectRatio }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      ) : (
        // Luxury White & Violet placeholder with actual brand logo fallback
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#260C45] to-[#1C0833] border border-[#7B2CBF]/30 p-4 text-center">
          <div className="w-12 h-12 rounded-full border border-[#7B2CBF] p-0.5 overflow-hidden flex items-center justify-center mb-2 shadow-md">
            <img
              src={BRAND_LOGO_URL}
              alt="Logo Tesa Gancia"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E0AAFF] font-serif">
            Tesa Gancia
          </span>
          <span className="text-[10px] text-white/60 mt-1 max-w-[180px] truncate">{alt}</span>
        </div>
      )}

      {/* Shimmer loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EEDBFA]/30 to-transparent animate-pulse" />
      )}
    </div>
  );
};

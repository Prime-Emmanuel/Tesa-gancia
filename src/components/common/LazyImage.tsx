import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1", "3/2"
  priority?: boolean;
  className?: string;
}

const GUARANTEED_EVENT_FALLBACK =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85';

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  priority = false,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleImageError = () => {
    if (!hasTriedFallback && currentSrc !== GUARANTEED_EVENT_FALLBACK && !src.includes('logo')) {
      setHasTriedFallback(true);
      setCurrentSrc(GUARANTEED_EVENT_FALLBACK);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#FAF5FE] ${className}`}
      style={{ aspectRatio }}
    >
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          ref={(imgNode) => {
            if (imgNode && imgNode.complete && !isLoaded) {
              setIsLoaded(true);
            }
          }}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-90'
          }`}
          {...props}
        />
      ) : (
        // Elegant brand fallback
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#260C45] to-[#1C0833] border border-[#7B2CBF]/30 p-4 text-center">
          <div className="w-12 h-12 rounded-full border border-[#7B2CBF] p-0.5 overflow-hidden flex items-center justify-center mb-2 shadow-md bg-white">
            <img
              src="/logo.jpg"
              alt="Logo Tesa Gancia"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EEDBFA]/30 to-transparent animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

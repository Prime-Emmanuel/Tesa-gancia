import { useState, useEffect, useRef } from 'react';

/**
 * Animated count-up hook triggered once on viewport entry.
 * Respects prefers-reduced-motion and provides immediate fallback if JS or observer fails.
 */
export function useCountUp(endValue: number, duration = 1800): { count: number; ref: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If user prefers reduced motion, set endValue immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(endValue);
      return;
    }

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setCount(endValue);
      return;
    }

    // Safety fallback: if observer hasn't fired within 1s, display end value
    const safetyTimer = setTimeout(() => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        setCount(endValue);
      }
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          clearTimeout(safetyTimer);

          const startTime = performance.now();
          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * endValue));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [endValue, duration]);

  return { count, ref };
}

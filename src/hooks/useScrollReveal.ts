import { useEffect, useRef } from 'react';

/**
 * Lightweight IntersectionObserver hook for Awwwards-grade luxury scroll reveals.
 * Falls back gracefully so content is never stuck hidden if JS or observer fails.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Immediately mark as revealed to guarantee zero blank spaces
    element.classList.add('is-revealed');

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

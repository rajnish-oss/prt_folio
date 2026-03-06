import { useEffect, useRef, useState } from 'react';

export function useLazyImage(options = {}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = ref.current;
        if (img) {
          const actualSrc = img.dataset.src;
          if (actualSrc) {
            img.src = actualSrc;
            img.dataset.src = '';
            setIsLoaded(true);
            observer.unobserve(img);
          }
        }
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isLoaded };
}

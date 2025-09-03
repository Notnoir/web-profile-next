"use client";

import { useEffect, useRef, useState } from "react";

// Hook untuk animasi reveal saat scroll
export const useRevealOnScroll = (threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return { ref, isVisible };
};

// Hook untuk animasi staggered (berurutan)
export const useStaggeredReveal = (
  itemCount: number,
  baseDelay = 0,
  itemDelay = 100
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal items satu per satu dengan delay
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, baseDelay + i * itemDelay);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [itemCount, baseDelay, itemDelay]);

  return { ref, visibleItems };
};

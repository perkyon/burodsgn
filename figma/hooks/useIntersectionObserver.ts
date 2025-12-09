import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Хук для отслеживания видимости элемента через IntersectionObserver
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T | null>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const { threshold = 0.3, rootMargin = '0px', triggerOnce = false } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isVisible;
}

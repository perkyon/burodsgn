import { useEffect, useState, RefObject } from 'react';

interface UseScrollArrowsOptions {
  scrollThreshold?: number;
}

/**
 * Хук для управления видимостью стрелок навигации при скролле
 */
export function useScrollArrows(
  containerRef: RefObject<HTMLDivElement | null>,
  options: UseScrollArrowsOptions = {}
): { showLeft: boolean; showRight: boolean } {
  const { scrollThreshold = 10 } = options;
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtStart = scrollLeft < scrollThreshold;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - scrollThreshold;

      setShowLeft(scrollLeft > scrollThreshold);
      setShowRight(!isAtStart && !isAtEnd);
    };

    container.addEventListener('scroll', handleScroll);
    // Проверяем сразу и после небольшой задержки для корректного расчета размеров
    setTimeout(() => handleScroll(), 100);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, scrollThreshold]);

  return { showLeft, showRight };
}

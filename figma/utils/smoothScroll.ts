// Настройка скорости прокрутки - меняй здесь (в миллисекундах, больше = медленнее)
export const SCROLL_DURATION = 2000; // 2000ms = 2 секунды (можно изменить на 3000 для еще более медленной прокрутки)

// Функция плавной прокрутки с контролем скорости
export const smoothScrollTo = (target: number, duration: number = SCROLL_DURATION) => {
  const start = window.pageYOffset;
  const distance = target - start;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Функция для прокрутки к элементу по селектору
export const smoothScrollToElement = (selector: string, duration: number = SCROLL_DURATION) => {
  const element = document.querySelector(selector);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    smoothScrollTo(targetPosition, duration);
  }
};


// Конфигурация анимаций для проекта

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.0,
} as const;

export const ANIMATION_DELAY = {
  NONE: 0,
  SHORT: 0.2,
  MEDIUM: 0.3,
  LONG: 0.5,
  VERY_LONG: 0.8,
} as const;

export const ANIMATION_EASING = {
  EASE_OUT: 'easeOut',
  EASE_IN: 'easeIn',
  EASE_IN_OUT: 'easeInOut',
} as const;

// Стандартные варианты анимации для появления элементов
export const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: ANIMATION_DURATION.SLOW,
    ease: ANIMATION_EASING.EASE_OUT,
  },
};

export const fadeInLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: ANIMATION_DURATION.SLOW,
    ease: ANIMATION_EASING.EASE_OUT,
  },
};

export const fadeInRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: ANIMATION_DURATION.SLOW,
    ease: ANIMATION_EASING.EASE_OUT,
  },
};

export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: ANIMATION_DURATION.SLOW,
    ease: ANIMATION_EASING.EASE_OUT,
  },
};

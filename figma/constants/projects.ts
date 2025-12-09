// Константы для проектов

export const PROJECT_IDS = {
  SOYUZNIKI: 1,
  TOM_SAWYER: 2,
  SURF_COFFEE: 3,
  LEIBL: 4,
} as const;

// Названия проектов
export const PROJECT_NAMES: Record<number, string> = {
  [PROJECT_IDS.SOYUZNIKI]: "Союзники",
  [PROJECT_IDS.TOM_SAWYER]: "Том Сойер",
  [PROJECT_IDS.SURF_COFFEE]: "Surf Coffee®",
  [PROJECT_IDS.LEIBL]: "Логотип лейбл",
};

// Пути к логотипам
export const PROJECT_LOGOS = {
  SOYUZNIKI: "/figma/лого союзники.png",
  TOM_SAWYER: "/figma/том лого.png",
  SURF_COFFEE: "/figma/surf-coffee-logo.png",
  LEIBL: "/figma/логотип лейбл.jpg",
} as const;

// Основные логотипы проектов (для отображения сверху вместо названия)
export const PROJECT_MAIN_LOGOS: Record<number, string | null> = {
  [PROJECT_IDS.SOYUZNIKI]: PROJECT_LOGOS.SOYUZNIKI,
  [PROJECT_IDS.TOM_SAWYER]: PROJECT_LOGOS.TOM_SAWYER,
  [PROJECT_IDS.SURF_COFFEE]: PROJECT_LOGOS.SURF_COFFEE,
  [PROJECT_IDS.LEIBL]: PROJECT_LOGOS.LEIBL,
};

// Изображения для проекта Серф кофе (из1.webp - из16.webp)
export const SURF_COFFEE_IMAGES = Array.from(
  { length: 16 },
  (_, i) => `/figma/из${i + 1}.webp`
);

// Изображения для проекта Союзники (со1, со2, со3, со4, со6, со7 - без со5)
export const SOYUZNIKI_IMAGES = Array.from(
  { length: 7 },
  (_, i) => `/figma/со${i + 1}.jpg`
).filter((_, i) => i !== 4);

// Изображения для проекта Том Сойер (том1, том2, том3, том5, том7, том8 - без том4 и том6)
export const TOM_SAWYER_IMAGES = Array.from(
  { length: 8 },
  (_, i) => `/figma/том${i + 1}.jpg`
).filter((_, i) => i !== 3 && i !== 5);

// Изображения для проекта Лейбл (лейбл.JPG, лейбл1.JPG - лейбл19.JPG)
export const LEIBL_IMAGES = [
  '/figma/лейбл.JPG',
  ...Array.from({ length: 19 }, (_, i) => `/figma/лейбл${i + 1}.JPG`),
];

// Изображения для каждого проекта
export const PROJECT_IMAGES: Record<number, string[]> = {
  [PROJECT_IDS.SOYUZNIKI]: SOYUZNIKI_IMAGES,
  [PROJECT_IDS.TOM_SAWYER]: TOM_SAWYER_IMAGES,
  [PROJECT_IDS.SURF_COFFEE]: SURF_COFFEE_IMAGES,
  [PROJECT_IDS.LEIBL]: LEIBL_IMAGES,
};

// Иконки для проектов
export const PROJECT_ICONS = {
  LYAGUSHKA: "/figma/лягушка.png",
  PALMA: "/figma/пальма.png",
  SURFIK: "/figma/сурфик.png",
  KISS: "/figma/кисс.png",
  PROPAGANDA: "/figma/пропаганда.png",
} as const;

// Вспомогательные изображения
export const HELPER_IMAGES = {
  IMG1: "/figma/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png",
  IMG4: "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png",
  IMG5: "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png",
  IMG11: "/figma/16393cc7dc02cfbc023b4e62108786f91a7a6971.png",
  IMG202511241325471: "/figma/49b9a026e52e18f51955454f7d4658b2b54c3385.png",
} as const;

// Логотипы для каждого проекта (5 штук для бесконечного скролла)
export const PROJECT_LOGOS_LIST: Record<number, string[]> = {
  [PROJECT_IDS.SOYUZNIKI]: [
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
  ],
  [PROJECT_IDS.TOM_SAWYER]: [
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
  ],
  [PROJECT_IDS.SURF_COFFEE]: [
    PROJECT_ICONS.LYAGUSHKA,
    PROJECT_ICONS.PALMA,
    PROJECT_ICONS.SURFIK,
    PROJECT_ICONS.KISS,
    PROJECT_ICONS.PROPAGANDA,
  ],
  [PROJECT_IDS.LEIBL]: [
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
    HELPER_IMAGES.IMG202511241325471,
    HELPER_IMAGES.IMG11,
  ],
};

// Превью проектов для галереи
export const PROJECT_PREVIEWS = [
  {
    id: PROJECT_IDS.SOYUZNIKI,
    img: HELPER_IMAGES.IMG1,
    title: PROJECT_NAMES[PROJECT_IDS.SOYUZNIKI],
  },
  {
    id: PROJECT_IDS.TOM_SAWYER,
    img: "/figma/том7.jpg",
    title: PROJECT_NAMES[PROJECT_IDS.TOM_SAWYER],
  },
  {
    id: PROJECT_IDS.SURF_COFFEE,
    img: "/figma/из16.webp",
    title: PROJECT_NAMES[PROJECT_IDS.SURF_COFFEE],
  },
  {
    id: PROJECT_IDS.LEIBL,
    img: "/figma/лейбл14.JPG",
    title: PROJECT_NAMES[PROJECT_IDS.LEIBL],
  },
] as const;

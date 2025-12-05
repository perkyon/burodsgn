'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-oe02cphzzc";
import { ContactModal } from './ContactModal';
import { LegalInfo, PrivacyPolicy, UserAgreement } from './LegalModals';

// Изображения для кофеен (из первого скриншота - 4 панели слева направо)
const img1 = "/figma/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png"; // 1 - Союзники (первая панель)
const img2 = "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png"; // 2 - Том Сойер (вторая панель)
const img3 = "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png"; // 3 - Серф Кофе (третья панель)
const img4 = "/figma/ced97181c62287b9cda1eac6b72da3abdbb81d20.png"; // 4 - Лейбл (четвертая панель)

// Для каждой кофейни используем её основное изображение + два соседних для трёх фото
const cafes = [
  {
    id: 1,
    name: "Союзники",
    logo: "Союзники",
    images: [img1, img2, img3], // Основное + два следующих
  },
  {
    id: 2,
    name: "Том Сойер",
    logo: "Том Сойер",
    images: [img2, img3, img4],
  },
  {
    id: 3,
    name: "Surf Coffee",
    logo: "Surf Coffee®",
    images: [img3, img4, img1],
  },
  {
    id: 4,
    name: "Лейбл",
    logo: "Лейбл",
    images: [img4, img1, img2],
  }
];

export function Projects() {
  const [currentCafeIndex, setCurrentCafeIndex] = useState(2); // Surf Coffee (индекс 2)
  const [isVisible, setIsVisible] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [userAgreementOpen, setUserAgreementOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const offsetX = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentCafe = cafes[currentCafeIndex];

  return (
    <>
      {/* Первый экран - как Surf Coffee скриншот */}
    <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="relative w-full max-w-[1440px] py-12 lg:py-0 lg:h-[1024px]">
        
          {/* Логотип кофейни */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-8 lg:mb-12"
          >
            <h1 className="font-['Unbounded:Regular',sans-serif] text-[clamp(32px,4vw,56px)] font-normal text-black mb-4">
              {currentCafe.logo}
            </h1>
            <div className="mx-auto h-px w-full max-w-[800px] bg-black" />
          </motion.div>

          {/* Три фото в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {currentCafe.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-gray-200"
              >
                <img
                  src={img}
                  alt={`${currentCafe.name} - фото ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Иконки внизу (как на скриншоте Surf Coffee) - 5 иконок в ряд */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center gap-6 lg:gap-8"
          >
            {/* Иконка 1 - машина с доской */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#f3f4f6" />
              </svg>
            </div>
            {/* Иконка 2 - геометрическая */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#f3f4f6" />
              </svg>
            </div>
            {/* Иконка 3 - пальма */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#f3f4f6" />
              </svg>
            </div>
            {/* Иконка 4 - SURF coffee текст */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#f3f4f6" />
              </svg>
            </div>
            {/* Иконка 5 - KISS */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#f3f4f6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Второй экран - точь-в-точь как Footer (контакты) */}
      <div className="bg-[#141414] relative w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[1440px] min-h-[900px] py-12 lg:py-0 px-4 lg:px-0 mx-auto">
          
          {/* Desktop version */}
          <div className="hidden lg:block">
            {/* Логотип БЮРО */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute h-[466.023px] w-[844px]" 
              style={{ left: `${318 + offsetX + 5}px`, top: '112px' }}
              data-name="Букавки"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 844 467">
                <g id="Букавки">
                  <path d={svgPaths.p38105f80} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.pb642d00} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.pccad00} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.p2064be00} fill="white" stroke="white" strokeWidth="6" />
                </g>
              </svg>
            </motion.div>

            {/* dsgn подпись */}
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 lg:translate-x-[-50%] text-white text-[16px] sm:text-[18px] lg:text-[20px] text-center text-nowrap top-[380px] sm:top-[520px] lg:top-[565px] whitespace-pre" style={{ left: `${1217.5 + offsetX}px` }}>
              dsgn
            </p>

            {/* Заголовок справа */}
            <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none text-[40px] text-nowrap text-white whitespace-pre" style={{ left: `${690 + offsetX}px`, top: '19px' }}>
              <motion.p 
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mb-0"
              >
                Напишите
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                {`            если есть вопрос`}
              </motion.p>
            </div>

            {/* Линия под заголовком */}
            <div className="absolute h-0 w-[603.001px]" style={{ left: `${690 + offsetX}px`, top: '110px' }}>
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 603 1">
              <motion.line 
                    stroke="white" 
                    x2="603.001" 
                y1="0.5" 
                y2="0.5"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>
            </div>

            {/* Кнопка "Оставьте заявку" */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="absolute h-[52px] w-[365px]"
              style={{ left: `${537 + offsetX}px`, top: '588px' }}
            >
              <svg className="block size-full cursor-pointer" fill="none" preserveAspectRatio="none" viewBox="0 0 365 52" onClick={() => setContactModalOpen(true)}>
                <path d={svgPaths.p3d2dee80} fill="#141414" stroke="white" strokeWidth="2" className="transition-all duration-300 hover:fill-white" />
              </svg>
              <p 
                onClick={() => setContactModalOpen(true)}
                className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-1/2 -translate-x-1/2 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap top-1/2 -translate-y-1/2 whitespace-pre cursor-pointer hover:text-[#141414] transition-colors duration-300"
              >
                Оставьте заявку
              </p>
            </motion.div>

            {/* Контакты слева */}
            <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a href="tel:+79181234567" className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-center text-nowrap text-white whitespace-pre hover:opacity-70 transition-opacity" style={{ left: `${200 + offsetX}px`, top: '669px' }}>
                +7 (918) 123-45-67
              </a>
              <a href="mailto:sales@burodsgn.ru" className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-center text-nowrap text-white whitespace-pre hover:opacity-70 transition-opacity" style={{ left: `${206.5 + offsetX}px`, top: '705px' }}>
                sales@burodsgn.ru
              </a>
            </motion.div>

            {/* Режим работы */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-center text-nowrap text-white -translate-x-1/2 whitespace-pre"
              style={{ left: `${720 + offsetX}px`, top: '669px' }}
            >
              <p className="mb-0">{`Режим работы: `}</p>
              <p>Пн-Пт с 9:00 до 18:00</p>
            </motion.div>

            {/* Адрес */}
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[0px] text-center text-nowrap text-white -translate-x-1/2 whitespace-pre" style={{ left: `${720 + offsetX}px`, top: '710px' }}>
              <span className="text-[14px]">К</span>
              <span className="text-[12px]">раснодар, ул. Примерная, д. 10, офис 5</span>
            </p>

            {/* Соц иконки */}
            <div>
              {/* Telegram */}
              <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${603 + offsetX}px`, top: '746px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_594)">
                    <path clipRule="evenodd" d={svgPaths.p1a720400} fill="white" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_594">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/buro.house?igsh=MTVseTV1cW5neG14cQ==" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${653 + offsetX}px`, top: '746px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_586)">
                    <path d={svgPaths.p2ceaaa00} fill="white" />
                    <path d={svgPaths.p36254ab0} fill="white" />
                    <path d={svgPaths.p13029f80} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_586">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Pinterest */}
              <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${703 + offsetX}px`, top: '746px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_583)">
                    <path d={svgPaths.p36467600} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_583">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${753 + offsetX}px`, top: '746px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <path d={svgPaths.pbb24c00} fill="white" />
                </svg>
              </a>

              {/* VK */}
              <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${803 + offsetX}px`, top: '746px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_591)">
                    <path clipRule="evenodd" d={svgPaths.p976a400} fill="white" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_591">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            {/* BURO digital, dsgn, crm */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a href="https://www.burodigital.ru" target="_blank" rel="noopener noreferrer" className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[16px] leading-none left-[1266px] text-[0px] text-white w-[149px] hover:opacity-70 transition-opacity" style={{ left: `${1131 + offsetX}px`, top: '676px' }}>
                <span className="text-[14px]">BURO</span>
                <span className="text-[12px]"> digital</span>
              </a>
              <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[16px] leading-none text-[0px] text-white w-[135px]" style={{ left: `${1131 + offsetX}px`, top: '710px' }}>
                <span className="text-[14px]">BURO </span>
                <span className="text-[12px]">dsgn</span>
              </p>
              <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[17px] leading-none text-[0px] text-white w-[142px]" style={{ left: `${1131 + offsetX}px`, top: '742px' }}>
                <span className="text-[14px]">BURO</span>
                <span className="text-[12px]"> crm</span>
              </p>
            </motion.div>

            {/* Юр ссылки */}
            <div className="font-['Unbounded:Regular',sans-serif] font-normal leading-none text-[12px] text-[rgba(255,255,255,0.7)]">
              <button onClick={() => setLegalInfoOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105" style={{ left: `${200 + offsetX}px`, top: '787px' }}>
                Юридическая информация
              </button>
              <button onClick={() => setUserAgreementOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105 -translate-x-1/2" style={{ left: `${720 + offsetX}px`, top: '787px' }}>
                Пользовательское соглашение
              </button>
              <button onClick={() => setPrivacyOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105" style={{ left: `${1020 + offsetX}px`, top: '787px' }}>
                Политика конфиденциальности
              </button>
            </div>

            {/* Линия */}
            <div className="absolute h-0 w-[1190px] left-1/2 -translate-x-1/2" style={{ top: '811px' }}>
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1190 1">
                  <line stroke="white" x2="1190" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>

            {/* Copyright */}
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] -translate-x-1/2 text-[8px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre" style={{ left: `${720 + offsetX}px`, top: '815px' }}>
              @ Buro dsgn,  2025
            </p>
        </div>
        
          {/* Mobile version - упрощенная версия */}
          <div className="lg:hidden flex flex-col items-center text-white space-y-8 py-12">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[280px]"
            >
              <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 844 467">
                <g id="Букавки">
                  <path d={svgPaths.p38105f80} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.pb642d00} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.pccad00} fill="white" stroke="white" strokeWidth="6" />
                  <path d={svgPaths.p2064be00} fill="white" stroke="white" strokeWidth="6" />
                </g>
              </svg>
            </motion.div>

            <p className="font-['Unbounded:Regular',sans-serif] text-[18px] -mt-4">dsgn</p>

              <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="relative h-[52px] w-[280px]"
            >
              <svg className="block size-full cursor-pointer" fill="none" preserveAspectRatio="none" viewBox="0 0 365 52" onClick={() => setContactModalOpen(true)}>
                <path d={svgPaths.p3d2dee80} fill="#141414" stroke="white" strokeWidth="2" className="transition-all duration-300 hover:fill-white" />
              </svg>
              <p 
                onClick={() => setContactModalOpen(true)}
                className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-1/2 -translate-x-1/2 text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-1/2 -translate-y-1/2 whitespace-pre cursor-pointer"
              >
                Оставьте заявку
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-['Unbounded:Regular',sans-serif] text-center space-y-3"
            >
              <a href="tel:+79181234567" className="block text-[16px] hover:opacity-70 transition-opacity">
                +7 (918) 123-45-67
              </a>
              <a href="mailto:sales@burodsgn.ru" className="block text-[16px] hover:opacity-70 transition-opacity">
                sales@burodsgn.ru
              </a>
              </motion.div>

            <div className="flex justify-center gap-4 py-4">
              <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_594_mobile)">
                    <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p1a720400} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_594_mobile">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/buro.house?igsh=MTVseTV1cW5neG14cQ==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_586_mobile)">
                    <path d={svgPaths.p2ceaaa00} fill="white" />
                    <path d={svgPaths.p36254ab0} fill="white" />
                    <path d={svgPaths.p13029f80} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_586_mobile">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_583_mobile)">
                    <path d={svgPaths.p36467600} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_583_mobile">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <path d={svgPaths.pbb24c00} fill="white" />
                </svg>
              </a>
              <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_591_mobile)">
                    <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p976a400} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_591_mobile">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            <div className="font-['Unbounded:Regular',sans-serif] text-center text-[10px] text-[rgba(255,255,255,0.7)] flex flex-col gap-3 pb-4">
              <button className="hover:text-white transition-colors">
                Юридическая информация
              </button>
              <button className="hover:text-white transition-colors">
                Пользовательское соглашение
              </button>
              <button className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
            </div>

            <p className="font-['Unbounded:Regular',sans-serif] text-[8px] text-[rgba(255,255,255,0.7)] text-center pb-8">
              @ Buro dsgn,  2025
            </p>
          </div>
        </div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <LegalInfo isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
      <UserAgreement isOpen={userAgreementOpen} onClose={() => setUserAgreementOpen(false)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}

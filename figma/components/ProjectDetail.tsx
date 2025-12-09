import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../imports/svg-oe02cphzzc";
import { LegalInfo, PrivacyPolicy, UserAgreement } from './LegalModals';
import { ContactModal } from './ContactModal';
import {
  PROJECT_NAMES,
  PROJECT_MAIN_LOGOS,
  PROJECT_IMAGES,
  PROJECT_LOGOS_LIST,
} from '../constants/projects';
import { ProjectDetailProps } from '../types';

export function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(true);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [userAgreementOpen, setUserAgreementOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [logoHeight, setLogoHeight] = useState('60px');
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // Настройки позиции кнопки "назад" - меняй здесь
  const backButtonLeft = '40px'; // Движение влево/вправо (больше = правее, меньше = левее, можно отрицательные значения)
  const backButtonTop = '32px'; // Движение вверх/вниз (больше = ниже, меньше = выше, можно отрицательные значения)
  
  // Настройки размера логотипа - меняй здесь
  const logoHeightMobile = '60px'; // Высота логотипа на мобильных (меньше = меньше размер)
  const logoHeightTablet = '80px'; // Высота логотипа на планшетах
  const logoHeightDesktop = '100px'; // Высота логотипа на десктопе

  // Обновляем размер логотипа в зависимости от размера экрана
  useEffect(() => {
    const updateLogoHeight = () => {
      if (window.innerWidth >= 1024) {
        setLogoHeight(logoHeightDesktop);
      } else if (window.innerWidth >= 640) {
        setLogoHeight(logoHeightTablet);
      } else {
        setLogoHeight(logoHeightMobile);
      }
    };

    updateLogoHeight();
    window.addEventListener('resize', updateLogoHeight);
    return () => window.removeEventListener('resize', updateLogoHeight);
  }, [logoHeightMobile, logoHeightTablet, logoHeightDesktop]);

  const projectName = PROJECT_NAMES[projectId] || "Проект";
  const projectImgs = PROJECT_IMAGES[projectId] || [];
  const projectLogosList = PROJECT_LOGOS_LIST[projectId] || [];

  useEffect(() => {
    setIsVisible1(true);
    
    // Сохраняем текущую позицию скролла
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Блокируем скролл через position: fixed
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    
    // Также добавляем класс для CSS правил
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    // Observer для логотипов
    const logosObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLogosVisible(true);
        } else {
          setIsLogosVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    // Небольшая задержка для установки ref
    setTimeout(() => {
      if (logosRef.current) {
        logosObserver.observe(logosRef.current);
      }
    }, 100);

    return () => {
      observer.disconnect();
      logosObserver.disconnect();
      
      // Восстанавливаем скролл основного body и html при закрытии проекта
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('left');
      document.body.style.removeProperty('right');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
      document.documentElement.style.removeProperty('overflow');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      
      // Восстанавливаем позицию скролла
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Offset для центрирования контента (как в Footer)
  const offsetX = 50;

  // Логика для стрелок навигации карусели
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 10);
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        setShowRightArrow(!isAtEnd);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      setTimeout(() => handleScroll(), 100);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isVisible1, projectImgs]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 650; // Ширина карточки + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <LegalInfo isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <UserAgreement isOpen={userAgreementOpen} onClose={() => setUserAgreementOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      
      {/* Back button - стрелка назад слева */}
      <button
        onClick={onClose}
        className="fixed z-50 flex items-center justify-center transition-opacity hover:opacity-70 cursor-pointer"
        style={{
          left: backButtonLeft,
          top: backButtonTop
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Section 1 - Surf Coffee Style */}
      <section ref={section1Ref} className="bg-white relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1440px]">
          {/* Логотип по центру с линией ниже */}
          <div className="flex flex-col items-center mb-12 lg:mb-16">
            {/* Логотип или название */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              {PROJECT_MAIN_LOGOS[projectId] ? (
                <img 
                  src={PROJECT_MAIN_LOGOS[projectId]!} 
                  alt={projectName}
                  style={{ height: logoHeight }}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const textFallback = target.nextElementSibling as HTMLElement;
                    if (textFallback) {
                      textFallback.style.display = 'block';
                    }
                  }}
                />
              ) : null}
              <h1 
                className={`font-['Unbounded:Regular',sans-serif] font-normal text-3xl sm:text-4xl lg:text-5xl text-black text-center whitespace-nowrap ${PROJECT_MAIN_LOGOS[projectId] ? 'hidden' : ''}`}
              >
                {projectName}
              </h1>
            </motion.div>
            
            {/* Линия ниже логотипа */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[1171px] h-px bg-black origin-center"
            />
          </div>
          
          {/* Карусель изображений с навигацией - листание по одной фотографии */}
          <div className="relative mb-12 lg:mb-16">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projectImgs.map((img, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="flex-none w-full sm:w-[500px] lg:w-[600px] aspect-3/2 rounded-[10px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out snap-center group"
                  onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}
                >
                  <div className="relative w-full h-full">
                    <img alt={`${projectName} ${index + 1}`} className="w-full h-full object-cover transition-all duration-500 ease-in-out" src={img} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 ease-in-out rounded-[10px]"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5 логотипов внизу - бесконечный скролл (только для Серф кофе) */}
          {projectId === 3 && (
            <div ref={logosRef} className="mt-8 lg:mt-12 w-full overflow-hidden">
              <motion.div
                animate={{ x: [0, -2000] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8 lg:gap-12 whitespace-nowrap"
              >
                {[...Array(12)].map((_, i) => (
                  <React.Fragment key={i}>
                    {projectLogosList.map((logo, index) => (
                      <div key={`${i}-${index}`} className="h-[40px] w-[120px] sm:h-[50px] sm:w-[150px] lg:h-[60px] lg:w-[180px] shrink-0 flex items-center justify-center">
                        <img alt={`Logo ${index + 1}`} className="h-full w-auto object-contain" src={logo} />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Section 2 - Footer (точная копия) */}
      <section ref={section2Ref} className="bg-[#141414] relative w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[1440px] min-h-[900px] py-12 lg:py-0 px-4 lg:px-0 mx-auto">
          
          {/* Desktop version */}
          <div className="hidden lg:block">
            {/* Кнопка "Оставьте заявку" */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible2 ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="absolute h-[52px] w-[365px]"
              style={{ left: `${537 + offsetX}px`, bottom: '240px' }}
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
              animate={isVisible2 ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a href="tel:+79898055659" className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-center text-nowrap text-white whitespace-pre hover:opacity-70 transition-opacity" style={{ left: `${200 + offsetX}px`, bottom: '159px' }}>
                +7 (989) 805 56-59
              </a>
              <a href="mailto:sales@burodsgn.ru" className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-center text-nowrap text-white whitespace-pre hover:opacity-70 transition-opacity" style={{ left: `${206.5 + offsetX}px`, bottom: '123px' }}>
                sales@burodsgn.ru
              </a>
            </motion.div>

            {/* Режим работы */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible2 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-center text-nowrap text-white -translate-x-1/2 whitespace-pre"
              style={{ left: `${720 + offsetX}px`, bottom: '159px' }}
            >
              <p className="mb-0">{`Режим работы: `}</p>
              <p>Пн-Пт с 9:00 до 18:00</p>
            </motion.div>

            {/* Адрес */}
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[0px] text-center text-nowrap text-white -translate-x-1/2 whitespace-pre" style={{ left: `${720 + offsetX}px`, bottom: '135px' }}>
              <span className="text-[14px]">К</span>
              <span className="text-[12px]">раснодар, Дальний проезд 11к1 2 этаж</span>
            </p>

            {/* Соц иконки */}
            <div>
              {/* Telegram */}
                <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${603 + offsetX}px`, bottom: '82px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_594_proj)">
                    <path clipRule="evenodd" d={svgPaths.p1a720400} fill="white" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_594_proj">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Instagram */}
                <a href="https://www.instagram.com/buro.house?igsh=MTVseTV1cW5neG14cQ==" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${653 + offsetX}px`, bottom: '82px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_586_proj)">
                    <path d={svgPaths.p2ceaaa00} fill="white" />
                    <path d={svgPaths.p36254ab0} fill="white" />
                    <path d={svgPaths.p13029f80} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_586_proj">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Pinterest */}
                <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${703 + offsetX}px`, bottom: '82px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_583_proj)">
                    <path d={svgPaths.p36467600} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_583_proj">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* WhatsApp */}
                <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${753 + offsetX}px`, bottom: '82px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <path d={svgPaths.pbb24c00} fill="white" />
                </svg>
              </a>

              {/* VK */}
                <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${803 + offsetX}px`, bottom: '82px' }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_591_proj)">
                    <path clipRule="evenodd" d={svgPaths.p976a400} fill="white" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_591_proj">
                      <rect fill="white" height="32.0708" width="31.7727" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            {/* BURO digital, dsgn, crm */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isVisible2 ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <a href="https://www.burodigital.ru" target="_blank" rel="noopener noreferrer" className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[16px] leading-none text-[0px] text-white w-[149px] hover:opacity-70 transition-opacity" style={{ left: `${1131 + offsetX}px`, bottom: '152px' }}>
                  <span className="text-[14px]">BURO</span>
                  <span className="text-[12px]"> digital</span>
                </a>
                <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[16px] leading-none text-[0px] text-white w-[135px]" style={{ left: `${1131 + offsetX}px`, bottom: '118px' }}>
                  <span className="text-[14px]">BURO </span>
                  <span className="text-[12px]">dsgn</span>
                </p>
                <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[17px] leading-none text-[0px] text-white w-[142px]" style={{ left: `${1131 + offsetX}px`, bottom: '86px' }}>
                <span className="text-[14px]">BURO</span>
                <span className="text-[12px]"> crm</span>
              </p>
            </motion.div>

            {/* Юр ссылки */}
            <div className="font-['Unbounded:Regular',sans-serif] font-normal leading-none text-[12px] text-[rgba(255,255,255,0.7)]">
                <button onClick={() => setLegalInfoOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105" style={{ left: `${200 + offsetX}px`, bottom: '41px' }}>
                  Юридическая информация
                </button>
                <button onClick={() => setUserAgreementOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105 -translate-x-1/2" style={{ left: `${720 + offsetX}px`, bottom: '41px' }}>
                  Пользовательское соглашение
                </button>
                <button onClick={() => setPrivacyOpen(true)} className="absolute h-[16px] text-nowrap transition-all duration-300 hover:text-white hover:scale-105" style={{ left: `${1040 + offsetX}px`, bottom: '41px' }}>
                  Политика конфиденциальности
                </button>
              </div>

              {/* Линия */}
              <div className="absolute h-0 w-[1190px] left-1/2 -translate-x-1/2" style={{ bottom: '34px' }}>
              <div className="absolute bottom-0 left-0 right-0 -top-px">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1220 1">
                  <line stroke="white" x2="1220" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>

              {/* Copyright */}
              <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] -translate-x-1/2 text-[8px] text-[rgba(255,255,255,0.7)] text-center text-nowrap whitespace-pre" style={{ left: `${720 + offsetX}px`, bottom: '15px' }}>
                @ Buro dsgn,  2025
              </p>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden flex flex-col items-center text-white space-y-8">

            {/* Кнопка "Оставьте заявку" */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible2 ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
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

            {/* Контакты */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible2 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-['Unbounded:Regular',sans-serif] text-center space-y-3"
            >
              <a href="tel:+79898055659" className="block text-[16px] hover:opacity-70 transition-opacity">
                +7 (989) 805 56-59
              </a>
              <a href="mailto:sales@burodsgn.ru" className="block text-[16px] hover:opacity-70 transition-opacity">
                sales@burodsgn.ru
              </a>
            </motion.div>

            {/* Соц иконки */}
            <div className="flex justify-center gap-4 py-4">
              <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_594_mobile_proj)">
                    <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p1a720400} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_594_mobile_proj">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/buro.house?igsh=MTVseTV1cW5neG14cQ==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_586_mobile_proj)">
                    <path d={svgPaths.p2ceaaa00} fill="white" />
                    <path d={svgPaths.p36254ab0} fill="white" />
                    <path d={svgPaths.p13029f80} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_586_mobile_proj">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg width="32" height="33" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_90_583_mobile_proj)">
                    <path d={svgPaths.p36467600} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_583_mobile_proj">
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
                  <g clipPath="url(#clip0_90_591_mobile_proj)">
                    <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p976a400} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_591_mobile_proj">
                      <rect width="31.7727" height="32.0708" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            {/* BURO digital, dsgn, crm */}
            <div className="font-['Unbounded:Regular',sans-serif] text-center space-y-3">
              <a href="https://www.burodigital.ru" target="_blank" rel="noopener noreferrer" className="block text-[14px] hover:opacity-70 transition-opacity">
                BURO<span className="text-[12px]"> digital</span>
              </a>
              <p className="text-[14px]">
                BURO <span className="text-[12px]">dsgn</span>
              </p>
              <p className="text-[14px]">
                BURO<span className="text-[12px]"> crm</span>
              </p>
            </div>

            {/* Юр ссылки */}
            <div className="font-['Unbounded:Regular',sans-serif] text-center text-[10px] text-[rgba(255,255,255,0.7)] flex flex-col gap-3 pb-4">
              <button onClick={() => setLegalInfoOpen(true)} className="hover:text-white transition-colors">
                Юридическая информация
              </button>
              <button onClick={() => setUserAgreementOpen(true)} className="hover:text-white transition-colors">
                Пользовательское соглашение
              </button>
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
            </div>

            {/* Линия */}
            <div className="w-full h-px bg-white mb-4"></div>

            {/* Copyright */}
            <p className="font-['Unbounded:Regular',sans-serif] text-[8px] text-[rgba(255,255,255,0.7)] text-center pb-8">
              @ Buro dsgn,  2025
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal для увеличения фото */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={() => setLightboxOpen(false)}
            >
              {/* Back button - стрелка назад слева вверху */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
                className="absolute left-4 top-4 z-[102] w-[50px] h-[50px] flex items-center justify-center bg-black/90 hover:bg-black rounded-full transition-all hover:scale-110 cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Image Container - увеличенный размер с полноэкранным режимом */}
              <div 
                className="relative flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  width: isFullscreen ? '100vw' : '1400px', 
                  maxWidth: isFullscreen ? '100vw' : '95vw',
                  height: isFullscreen ? '100vh' : 'auto'
                }}
              >
                {/* Image */}
                <div 
                  className="relative flex items-center justify-center mb-6 cursor-pointer" 
                  style={{ width: '100%', position: 'relative', height: isFullscreen ? '100vh' : 'auto' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullscreen(!isFullscreen);
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={lightboxIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      alt={`${projectName} ${lightboxIndex + 1}`} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: isFullscreen ? '100vh' : '85vh', 
                        height: 'auto', 
                        width: 'auto', 
                        objectFit: 'contain' 
                      }}
                      src={projectImgs[lightboxIndex]} 
                    />
                  </AnimatePresence>
                  
                  {/* Navigation arrows - стрелки влево/вправо */}
                  {projectImgs.length > 1 && !isFullscreen && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) => (prev - 1 + projectImgs.length) % projectImgs.length);
                        }}
                        className="absolute left-0 -translate-x-full -translate-y-1/2 top-1/2 z-[103] w-[70px] h-[70px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110 ml-4"
                        style={{ pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.5)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) => (prev + 1) % projectImgs.length);
                        }}
                        className="absolute right-0 translate-x-full -translate-y-1/2 top-1/2 z-[103] w-[70px] h-[70px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110 mr-4"
                        style={{ pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.5)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Fullscreen arrows - стрелки в полноэкранном режиме */}
                  {projectImgs.length > 1 && isFullscreen && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) => (prev - 1 + projectImgs.length) % projectImgs.length);
                        }}
                        className="absolute left-8 top-1/2 -translate-y-1/2 z-[103] w-[70px] h-[70px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110"
                        style={{ pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.5)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) => (prev + 1) % projectImgs.length);
                        }}
                        className="absolute right-8 top-1/2 -translate-y-1/2 z-[103] w-[70px] h-[70px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110"
                        style={{ pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.5)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image counter - по центру снизу изображения */}
                {!isFullscreen && (
                  <motion.div 
                    key={lightboxIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-black/90 px-6 py-2.5 rounded-full text-white text-base font-medium pointer-events-none"
                  >
                    {lightboxIndex + 1} / {projectImgs.length}
                  </motion.div>
                )}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
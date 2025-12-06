import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-oe02cphzzc";
import { LegalInfo, PrivacyPolicy, UserAgreement } from './LegalModals';
import { ContactModal } from './ContactModal';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [userAgreementOpen, setUserAgreementOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Offset для центрирования контента
  const offsetX = 50;

  return (
    <div className="bg-[#141414] relative w-full flex items-center justify-center overflow-hidden" id="contacts">
      <div ref={sectionRef} className="relative w-full max-w-[1440px] min-h-[900px] py-12 lg:py-0 px-4 lg:px-0 mx-auto">
        
        {/* Desktop version */}
        <div className="hidden lg:block">
          {/* Логотип БЮРО */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute h-[466.023px] w-[844px]" 
            style={{ left: `${290 + offsetX + 5}px`, top: '152px' }}
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
          <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-white text-[16px] sm:text-[18px] lg:text-[20px] text-center text-nowrap whitespace-pre" style={{ left: `${1120 + offsetX}px`, bottom: '280px' }}>
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
            style={{ left: `${537 + offsetX}px`, bottom: '200px' }}
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
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
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
            <span className="text-[12px]">раснодар, ул. Примерная, д. 10, офис 5</span>
          </p>

          {/* Соц иконки */}
          <div>
            {/* Telegram */}
            <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${603 + offsetX}px`, bottom: '82px' }}>
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
            <a href="https://www.instagram.com/buro.house?igsh=MTVseTV1cW5neG14cQ==" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${653 + offsetX}px`, bottom: '82px' }}>
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
            <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${703 + offsetX}px`, bottom: '82px' }}>
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
            <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] hover:opacity-70 transition-opacity" style={{ left: `${753 + offsetX}px`, bottom: '82px' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
                <path d={svgPaths.pbb24c00} fill="white" />
              </svg>
            </a>

            {/* VK */}
            <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[32.071px] w-[31.773px] transition-all duration-300 hover:scale-110 hover:opacity-80" style={{ left: `${803 + offsetX}px`, bottom: '82px' }}>
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
          {/* Логотип БЮРО */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[280px] mt-8"
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

          {/* dsgn подпись */}
          <p className="font-['Unbounded:Regular',sans-serif] text-[18px] -mt-4">dsgn</p>

          {/* Кнопка "Оставьте заявку" */}
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

          {/* Контакты */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
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

          {/* Copyright */}
          <p className="font-['Unbounded:Regular',sans-serif] text-[8px] text-[rgba(255,255,255,0.7)] text-center pb-8">
            @ Buro dsgn,  2025
          </p>
        </div>
      </div>
      
      {/* Modals */}
      <LegalInfo isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
      <UserAgreement isOpen={userAgreementOpen} onClose={() => setUserAgreementOpen(false)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
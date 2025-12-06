import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const imgImage1 = "/figma/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";
const imgImage2 = "/figma/ced97181c62287b9cda1eac6b72da3abdbb81d20.png";
const imgImage3 = "/figma/6c07455199f40a32c8557523758434ec91b483cc.png";
const imgImage4 = "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png";

export function HomeOffice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);

  // Настройки модалки - меняй здесь ширину и высоту
  const modalWidth = '400px'; // Ширина модалки
  const modalPadding = '45px'; // Отступы внутри (p-8 = 32px)
  
  // Позиция модалки - меняй здесь для движения вверх/вниз
  const modalTop = '40%'; // Позиция сверху (меньше = выше, больше = ниже)
  
  // Позиция крестика - меняй здесь для движения влево/вправо/вверх/вниз
  const closeButtonRight = '16px'; // Движение влево/вправо (больше = левее, меньше = правее)
  const closeButtonTop = '16px'; // Движение вверх/вниз (больше = ниже, меньше = выше)

  // 4 проекта дом и офис
  const projects = [
    { id: 1, img: imgImage1, title: "Проект 1" },
    { id: 2, img: imgImage2, title: "Проект 2" },
    { id: 3, img: imgImage3, title: "Проект 3" },
    { id: 4, img: imgImage4, title: "Проект 4" },
  ];

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isModalOpen) {
      // Сохраняем текущую позицию скролла
      scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop;
      // Блокируем скролл только через overflow - без position: fixed
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Просто убираем overflow - позиция скролла сохранится автоматически
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="relative w-full max-w-[1440px] py-12 lg:py-0 lg:h-[1024px]" data-name="Desktop - 4">
        
        {/* Title and decorative line */}
        <div className="mb-8 lg:mb-12">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-['Unbounded:Regular',sans-serif] text-2xl sm:text-3xl lg:text-[40px] text-black mb-6"
          >
            {`Проекты дом и офис`}
          </motion.h2>
          
          <div className="h-px w-full lg:w-[597px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 597 1">
              <motion.line 
                id="Line 3" 
                stroke="var(--stroke-0, black)" 
                x2="597" 
                y1="0.5" 
                y2="0.5"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>
          
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block font-['Unbounded:Regular',sans-serif] text-[25px] text-black mt-6"
          >
            Проектирование и изготовление мебели для HoReCa, офиса и дома
          </motion.p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scrollable Projects */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="flex-none w-[300px] sm:w-[350px] lg:w-[413px] aspect-[11/13] rounded-[10px] cursor-pointer hover:scale-105 transition-transform overflow-hidden group shadow-lg hover:shadow-2xl"
                onClick={handleProjectClick}
              >
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all" 
                  src={project.img} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Modal "В разработке" */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 -translate-x-1/2 bg-white rounded-[20px] z-[101] shadow-2xl border border-black/10 relative"
              style={{ 
                width: modalWidth,
                maxWidth: '90%',
                padding: modalPadding,
                top: modalTop,
                position: 'fixed'
              } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                style={{
                  position: 'absolute',
                  right: closeButtonRight,
                  top: closeButtonTop
                }}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors z-10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="space-y-5">
                <h2 className="font-['Unbounded:Regular',sans-serif] text-xl text-black">
                  В разработке
                </h2>
                <div className="h-px w-full bg-black" />
                <p className="font-['Unbounded:Regular',sans-serif] text-sm text-black/70 leading-relaxed">
                  Этот блок пока еще в разработке. Скоро вы сможете увидеть детали проекта.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="w-full px-5 py-2.5 bg-black text-white font-['Unbounded:Regular',sans-serif] text-sm rounded-[15px] hover:bg-black/90 transition-colors"
                >
                  Понятно
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
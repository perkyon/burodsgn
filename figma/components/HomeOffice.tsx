import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const imgImage1 = "/figma/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";
const imgImage2 = "/figma/ced97181c62287b9cda1eac6b72da3abdbb81d20.png";
const imgImage3 = "/figma/6c07455199f40a32c8557523758434ec91b483cc.png";

export function HomeOffice() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Дублируем изображения для создания полноценной карусели
  const projects = [
    { id: 1, img: imgImage1, title: "Офис Modern" },
    { id: 2, img: imgImage2, title: "Домашний интерьер" },
    { id: 3, img: imgImage3, title: "Рабочее пространство" },
    { id: 4, img: imgImage1, title: "Офис Modern 2" },
    { id: 5, img: imgImage2, title: "Домашний интерьер 2" },
    { id: 6, img: imgImage3, title: "Рабочее пространство 2" },
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

  return (
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
  );
}
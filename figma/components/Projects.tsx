import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const img1 = "/figma/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
const imgImage4 = "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png";
const imgImage5 = "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import { ProjectDetail } from './ProjectDetail';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Настройки позиции заголовка - меняй здесь
  const titleLeft = '0px'; // Движение заголовка влево/вправо (больше = правее, меньше = левее, можно отрицательные значения)
  const titleTop = '0px'; // Движение заголовка вверх/вниз (больше = ниже, меньше = выше, можно отрицательные значения)
  
  // Настройки линии - меняй здесь
  const lineLeft = '-150px'; // Движение линии влево/вправо (больше = правее, меньше = левее, можно отрицательные значения)
  const lineTop = '50px'; // Движение линии вверх/вниз (больше = ниже, меньше = выше, можно отрицательные значения)
  const lineWidth = '600px'; // Длина линии (больше = длиннее)
  
  // Настройки подзаголовка - меняй здесь
  const subtitleLeft = '0px'; // Движение подзаголовка влево/вправо (больше = правее, меньше = левее, можно отрицательные значения)
  const subtitleTop = '10px'; // Движение подзаголовка вверх/вниз (больше = ниже, меньше = выше, можно отрицательные значения)

  // 4 кофейни: 1-Союзники, 2-Том Сойер, 3-Серф кофе, 4-Лейбл
  const projects = [
    { id: 1, img: img1, title: "Союзники" },
    { id: 2, img: "/figma/том7.jpg", title: "Том Сойер" },
    { id: 3, img: "/figma/из16.webp", title: "Серф кофе" },
    { id: 4, img: img1, title: "Лейбл" },
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

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 10);
        // Скрываем правую стрелку, когда виден проект "Союзники" (в начале) или в конце
        const isAtStart = scrollLeft < 10;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        setShowRightArrow(!isAtStart && !isAtEnd);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Проверяем сразу и после небольшой задержки для корректного расчета размеров
      setTimeout(() => handleScroll(), 100);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isVisible]);

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

  if (isProjectOpen && selectedProjectId) {
    return <ProjectDetail projectId={selectedProjectId} onClose={() => { setIsProjectOpen(false); setSelectedProjectId(null); }} />;
  }

  return (
    <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="relative w-full max-w-[1440px] py-12 lg:py-0 lg:h-[1024px]" data-name="Desktop - 3">
        
        <div className="mb-8 lg:mb-12 relative">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-['Unbounded:Regular',sans-serif] text-2xl sm:text-3xl lg:text-[40px] text-black mb-6"
            style={{ 
              marginLeft: titleLeft,
              marginTop: titleTop
            }}
          >
            {`Проекты HoReCa`}
          </motion.div>
          
          <div 
            className="h-px w-full lg:absolute"
            style={{
              left: lineLeft,
              top: lineTop,
              width: lineWidth
            }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${parseFloat(lineWidth) || 453} 1`}>
              <motion.line 
                id="Line 4" 
                stroke="var(--stroke-0, black)" 
                x2={parseFloat(lineWidth) || 453}
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
            style={{
              marginLeft: subtitleLeft,
              marginTop: subtitleTop
            }}
          >
            Проектирование и изготовление мебели для HoReCa
          </motion.p>
        </div>
        
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
                onClick={() => { setSelectedProjectId(project.id); setIsProjectOpen(true); }}
              >
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all" 
                  src={project.img} 
                />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110 opacity-80 hover:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] flex items-center justify-center bg-black rounded-full transition-all hover:scale-110 opacity-80 hover:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

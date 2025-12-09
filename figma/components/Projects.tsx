import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ProjectDetail } from './ProjectDetail';
import { PROJECT_PREVIEWS } from '../constants/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useScrollArrows } from '../hooks/useScrollArrows';
import { fadeInLeft, fadeInUp } from '../config/animations';

export function Projects() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3, triggerOnce: true });
  const { showRight } = useScrollArrows(scrollContainerRef);

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

  const projects = PROJECT_PREVIEWS;

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
            {...fadeInLeft}
            animate={isVisible ? fadeInLeft.animate : fadeInLeft.initial}
            transition={{ ...fadeInLeft.transition, delay: 0.2 }}
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
            {...fadeInLeft}
            animate={isVisible ? fadeInLeft.animate : fadeInLeft.initial}
            transition={{ ...fadeInLeft.transition, delay: 0.5 }}
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
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="flex-none w-[300px] sm:w-[350px] lg:w-[413px] aspect-11/13 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden group relative border border-black/5 bg-white"
                style={{
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                }}
                onClick={() => { setSelectedProjectId(project.id); setIsProjectOpen(true); }}
              >
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out" 
                  style={{ transform: 'scale(1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  src={project.img}
                  loading="lazy"
                  decoding="async"
                />
                {/* Тонкая рамка при наведении */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          {showRight && (
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

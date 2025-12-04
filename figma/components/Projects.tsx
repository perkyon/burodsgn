import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const img1 = "/figma/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
const imgImage4 = "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png";
const imgImage5 = "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import { ProjectDetail } from './ProjectDetail';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Дублируем изображения для создания полноценной карусели
  const projects = [
    { id: 1, img: img1, title: "Surf Coffee X Fest" },
    { id: 2, img: imgImage4, title: "Ресторан Modern" },
    { id: 3, img: imgImage5, title: "Кафе Loft" },
    { id: 4, img: img1, title: "Surf Coffee X Fest 2" },
    { id: 5, img: imgImage4, title: "Ресторан Modern 2" },
    { id: 6, img: imgImage5, title: "Кафе Loft 2" },
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
      const scrollAmount = 450; // ширина карточки + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  if (isProjectOpen) {
    return <ProjectDetail onClose={() => setIsProjectOpen(false)} />;
  }

  return (
    <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="relative w-full max-w-[1440px] py-12 lg:py-0 lg:h-[1024px]" data-name="Desktop - 3">
        
        {/* Title and decorative line */}
        <div className="mb-8 lg:mb-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-['Unbounded:Regular',sans-serif] text-2xl sm:text-3xl lg:text-[40px] text-black mb-6"
          >
            {`Проекты HoReCa`}
          </motion.div>
          
          <div className="h-px w-full lg:w-[453px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453 1">
              <motion.line 
                id="Line 4" 
                stroke="var(--stroke-0, black)" 
                x2="453.001" 
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
                onClick={() => setIsProjectOpen(true)}
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
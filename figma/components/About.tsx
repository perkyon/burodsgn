import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const img202511240825011 = "/figma/3320c2117426094d90a792c9011c4751d88c257b.png";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="relative w-full max-w-[1440px] h-auto lg:h-[1024px] py-12 lg:py-0" data-name="Desktop - 2">
        {/* Title - responsive */}
        <div className="lg:absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none lg:left-[228px] text-[28px] lg:text-[40px] text-black lg:text-nowrap lg:top-[25px] mb-6 lg:mb-0">
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-0"
          >
            Мебельная мастерская где
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {`можно воплотить нестандартные решения`}
          </motion.p>
        </div>
        
        {/* Decorative line under title - responsive */}
        <div className="mb-8 lg:mb-0 h-px w-full lg:w-[1172px] lg:absolute lg:left-[112px] lg:top-[134px]">
          <div className="h-full w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1172 1">
              <motion.path 
                d="M0 0.5H1171.5" 
                id="Line 2" 
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>
        
        {/* Text content - responsive */}
        <div className="lg:absolute font-['Unbounded:Regular',sans-serif] font-normal lg:h-[546px] leading-[0] lg:left-[60px] text-[0px] text-black lg:top-[206px] w-full lg:w-[488px] mb-8 lg:mb-0">
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="leading-none mb-0"
          >
            <span className="text-[24px] lg:text-[35px]">М</span>
            <span className="text-[20px] lg:text-[30px]">ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный</span>
          </motion.p>
          <p className="leading-none mb-0 text-[20px] lg:text-[30px]">&nbsp;</p>
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="leading-none"
          >
            <span className="text-[24px] lg:text-[35px]">Н</span>
            <span className="text-[20px] lg:text-[30px]">{`ам важно помочь вам реализовать любые идеи которые вы себе только можете предстваить `}</span>
            <span className="text-[20px] lg:text-[30px]">идеи и реализовывать их, для нас каждый проект особенный</span>
            <span className="text-[20px] lg:text-[30px]">
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="text-[24px] lg:text-[35px]">К</span>
            <span className="text-[20px] lg:text-[30px]">{`оторые вы себе только можете предстваить `}</span>
            <span className="text-[20px] lg:text-[30px]">идеи и реализовывать их, для нас каждый проект особенный</span>
          </motion.p>
        </div>
        
        {/* Image - responsive */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative lg:absolute h-[300px] lg:h-[670px] lg:left-[685px] rounded-[10px] lg:top-[175px] w-full lg:w-[645px]" 
          data-name="Снимок экрана 2025-11-24 в 08.25.01 1"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img202511240825011} />
        </motion.div>
      </div>
    </div>
  );
}
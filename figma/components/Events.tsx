import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { motion } from 'motion/react';
const imgEvent1 = "/figma/8aa084b825b8cad5f81b02dabe80ba0e50769c75.png";
const imgEvent2 = "/figma/d2ee5035d9c68be8b818bdc5d742c74bf3c0ffe2.png";
const imgLogoRusskiyDom = "/figma/4231f1be4c8bd3ef16a0c5e31819d87e5fcaeab9.png";
import svgPaths from "../imports/svg-syrqu6uigp";
import inHomeSvgPaths from "../imports/svg-inhome";

export function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLogosVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white relative w-full">
      <div ref={sectionRef} className="relative w-full" data-name="Desktop - 5">
        {/* Title and line section with max-width container */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 lg:h-[199px]">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-['Unbounded:Regular',sans-serif] font-normal leading-tight lg:leading-none text-2xl sm:text-3xl lg:text-[40px] text-black mb-8 lg:absolute lg:left-[60px] lg:top-[45px]"
          >
            <p className="mb-0">{`Нас можно встретить`}</p>
            <p className="ml-0 lg:ml-[100px]">{`на мероприятиях и выставках`}</p>
          </motion.div>
          
          <div className="h-px w-full lg:w-[1001px] mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-[143px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1001 1">
              <motion.line 
                id="Line 7" 
                stroke="var(--stroke-0, black)" 
                x2="1001" 
                y1="0.5" 
                y2="0.5"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>
        
        {/* Full-width images section */}
        <div className="w-full lg:h-[650px] lg:mt-0 mt-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[117px] justify-center items-center px-4 lg:px-0">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="w-full max-w-[550px] aspect-[11/13] lg:h-[650px] lg:w-[550px] rounded-[10px] overflow-hidden bg-gray-200"
            >
              <img alt="Выставка-продажа ХАОС" className="w-full h-full object-cover" src={imgEvent1} />
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="w-full max-w-[550px] aspect-[11/13] lg:h-[650px] lg:w-[550px] rounded-[10px] overflow-hidden bg-gray-200"
            >
              <img alt="Выставка-продажа ХАОС" className="w-full h-full object-cover" src={imgEvent2} />
            </motion.div>
          </div>
        </div>
        
        {/* Infinite scrolling logos section - full width */}
        <div ref={logosRef} className="mt-12 lg:mt-[46px] w-full overflow-hidden">
          <motion.div
            animate={isLogosVisible ? { x: [0, -2000] } : { x: 0 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 lg:gap-12 whitespace-nowrap"
          >
            {[...Array(12)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="h-[40px] w-[160px] lg:h-[50px] lg:w-[204px] shrink-0 flex items-center justify-center">
                  <img src={imgLogoRusskiyDom} alt="РУССКИЙ ДОМ" className="h-full w-auto object-contain" />
                </div>
                <div className="h-[40px] w-[160px] lg:h-[50px] lg:w-[234px] shrink-0 flex items-center justify-center">
                  <svg className="h-[29px] w-[234px]" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 234 29">
                    <path d={inHomeSvgPaths.p1d871e32} fill="#010101" />
                  </svg>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
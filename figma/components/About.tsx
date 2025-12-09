import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const img202511240825011 = "/figma/3320c2117426094d90a792c9011c4751d88c257b.png";

export function About() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Настройки линии - меняй здесь для движения влево/вправо/вверх/вниз
  const lineLeft = '-120px'; // Движение влево/вправо (больше = правее, меньше = левее)
  const lineTop = '120px'; // Движение вверх/вниз (больше = ниже, меньше = выше)
  const lineWidth = '1200px'; // Длина линии (больше = длиннее)
  
  // Пробелы в заголовке - меняй здесь
  const titleSpaces = '     '; // Пробелы между словами в заголовке
  const secondLineIndent = '                      '; // Пробелы перед второй строкой (перед "можно")
  
  // Позиция второй строки - меняй здесь для движения влево/вправо
  const secondLineLeft = '100px'; // Движение влево/вправо (больше = правее, меньше = левее, можно отрицательные значения)
  
  // Размеры шрифта - меняй здесь
  const fontSizeLarge = '18px'; // Размер больших первых букв (мобильный)
  const fontSizeLargeDesktop = '34px'; // Размер больших первых букв (десктоп)
  const fontSizeText = '16px'; // Размер основного текста (мобильный)
  const fontSizeTextDesktop = '22px'; // Размер основного текста (десктоп)
  
  // Отступы между параграфами - меняй здесь
  const paragraphSpacing = '1em'; // Отступ между параграфами (можно изменить на '0.5em', '2em' и т.д.)
  
  // Текст с переносами - меняй здесь (используй <br /> для переноса строки, убери <br /> чтобы убрать перенос)
  const text1 = 'ы не боимся брать сложные идеи<br />и превращать их в реальные предметы,<br />которые будут жить в вашем доме, в кофейне,в рабочем пространстве или <br /> в любом другом месте, где вам <br /> важен уют, стиль и надёжность.';
  const text2 = 'аша мастерская работает так, чтобы каждый проект был особенным. Мы внимательно слушаем ваши пожелания, разбираемся в деталях и создаём мебель, которая подходит вашему пространству.';
  const text3 = 'ля нас важна не скорость,<br />а понимание того, что именно вы хотите получить. Мы ценим нестандартные замыслы<br />и ищем для них лучшие решения.';
  const text4 = 'аждый проект — это сотрудничество,<br />где вы делитесь желаниями,<br />а мы — опытом и мастерством.<br />В итоге рождается мебель, которая выглядит красиво и делает пространство удобным.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Останавливаем наблюдение после первого появления
          observer.unobserve(entry.target);
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
        <div className="lg:absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none lg:left-[228px] text-[22px] lg:text-[40px] text-black lg:text-nowrap lg:top-[25px] mb-6 lg:mb-0">
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-0"
          >
            {`Мебельная${titleSpaces}мастерская${titleSpaces}где`}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{ marginLeft: secondLineLeft }}
          >
            {`${secondLineIndent}можно${titleSpaces}воплотить${titleSpaces}нестандартные${titleSpaces}решения`}
          </motion.p>
        </div>
        
        {/* Decorative line under title - responsive */}
        <div 
          className="mb-8 lg:mb-0 h-px lg:absolute"
          style={{
            left: lineLeft,
            top: lineTop,
            width: lineWidth
          }}
        >
          <div className="h-full w-full">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2000 1">
              <motion.path 
                d="M0 0.5H2000"
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
        <div className="lg:absolute font-['Unbounded:Regular',sans-serif] font-normal lg:left-[60px] text-black lg:top-[206px] w-full lg:w-[488px] mb-8 lg:mb-0 z-20" style={{ overflow: 'visible', display: 'block', visibility: 'visible' }}>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-0" 
            style={{ lineHeight: '1.2', color: 'black', marginBottom: paragraphSpacing }}
          >
            <span style={{ fontSize: fontSizeLargeDesktop }}>М</span>
            <span style={{ fontSize: fontSizeTextDesktop }} dangerouslySetInnerHTML={{ __html: text1 }} />
          </motion.p>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mb-0" 
            style={{ lineHeight: '1.2', color: 'black', marginBottom: paragraphSpacing }}
          >
            <span style={{ fontSize: fontSizeLargeDesktop }}>Н</span>
            <span style={{ fontSize: fontSizeTextDesktop }} dangerouslySetInnerHTML={{ __html: text2 }} />
          </motion.p>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mb-0" 
            style={{ lineHeight: '1.2', color: 'black', marginBottom: paragraphSpacing }}
          >
            <span style={{ fontSize: fontSizeLargeDesktop }}>Д</span>
            <span style={{ fontSize: fontSizeTextDesktop }} dangerouslySetInnerHTML={{ __html: text3 }} />
          </motion.p>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            style={{ lineHeight: '1.2', color: 'black' }}
          >
            <span style={{ fontSize: fontSizeLargeDesktop }}>К</span>
            <span style={{ fontSize: fontSizeTextDesktop }} dangerouslySetInnerHTML={{ __html: text4 }} />
          </motion.p>
        </div>
        
        {/* Image - responsive */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative lg:absolute h-[300px] lg:h-[670px] lg:left-[685px] rounded-[10px] lg:top-[175px] w-full lg:w-[645px] z-0" 
          data-name="Снимок экрана 2025-11-24 в 08.25.01 1"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img202511240825011} />
        </motion.div>
      </div>
    </div>
  );
}
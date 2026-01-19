"use client";

import Image from "next/image";
import { svgPaths } from "@/utils/svgPaths";
import { motion } from "framer-motion";

// РУЧНОЕ УПРАВЛЕНИЕ ЛИНИЯМИ (меняй эти значения, чтобы двигать вектор)
const LINES_CONFIG = {
  left: -40,  // Смещение влево/вправо
  top: 0,     // Смещение вверх/вниз
  width: 1531 // Ширина вектора
};

export const About = () => {
  return (
    <section id="about" className="relative w-full h-[1091.82px] bg-white overflow-hidden">
      <div className="relative w-[1440px] h-full mx-auto overflow-hidden rounded-[40px]" data-name="About us">
        {/* Вектор задний фон */}
        <div 
          className="absolute pointer-events-none transition-all duration-300"
          style={{ 
            left: `${LINES_CONFIG.left}px`, 
            top: `${LINES_CONFIG.top}px`, 
            width: `${LINES_CONFIG.width}px`,
            height: '1091px'
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1533.13 1093.8">
            <g id="Вектор задний фон">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                d={svgPaths.p729a6c0}
                stroke="#141414"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.6, ease: "easeInOut", delay: 0.2 }}
                d={svgPaths.p36568570}
                stroke="#141414"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
                d={svgPaths.p1e2b7b00}
                stroke="#141414"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        <h2 className="absolute font-unbounded font-medium leading-[normal] left-[100px] t-h1 text-black text-nowrap top-[59px]">
          О нас
        </h2>

        <div className="absolute h-[687px] left-[100px] rounded-[40px] top-[202px] w-[608px] z-10 shadow-2xl">
          <Image
            src="/assets/about_img.png"
            alt="About Buro DSGN"
            fill
            className="object-cover rounded-[40px] pointer-events-none"
          />
        </div>

        <div className="absolute font-unbounded font-bold h-[687px] leading-[normal] left-[calc(50%+12px)] text-[0px] text-black top-[201px] w-[608px] z-10">
          <p className="mb-0">
            <span className="font-medium t-h3">Buro dsgn</span>
            <span className="t-h3"> </span>
            <span className="font-normal t-h3">
              началось с задачи, а не с бизнеса.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </p>
          <p className="font-normal mb-0 t-h3">
            Для собственной кофейни был изготовлен бар, который не подошёл
            <br aria-hidden="true" />
            ни по размерам, ни по логике работы, ни по ощущению пространства.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <p className="font-normal mb-0 t-h3">
            До открытия оставалась неделя.
            <br aria-hidden="true" />
            Работать с готовым решением было невозможно.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <p className="font-normal mb-0 t-h3">
            Бар пришлось срочно разбирать и переделывать самостоятельно —<br aria-hidden="true" />
            так, чтобы он действительно работал и позволил открыться вовремя.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <p className="font-normal mb-0 t-h3">
            Этот опыт показал главное:
            <br aria-hidden="true" />
            готовые решения часто не работают,
            <br aria-hidden="true" />а настоящая ценность — в умении разобраться в задаче и собрать решение под реальную ситуацию.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
};

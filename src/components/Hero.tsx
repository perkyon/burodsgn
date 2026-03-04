"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RequestModal } from "@/components/RequestModal";

export const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <section id="hero" className="relative w-full min-h-[720px] md:h-[1024px] overflow-hidden bg-white">
      <h1 className="sr-only">
        Monoburo — дизайн и производство мебели для бизнеса, дома и офисов
      </h1>
      <div className="relative w-full h-[720px] md:h-full overflow-hidden rounded-[24px] md:rounded-none" data-name="Hero">
        {/* Background with parallax */}
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: bgY }}>
          <Image
            src="/assets/monoburo-hero-bg-34a702.png"
            alt="Monoburo Hero"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center pointer-events-none scale-110"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 top-0 z-0" />

        {/* Logo */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ y: contentY }}>
          <img src="/assets/monoburo-logo.svg" alt="Монобюро" className="w-[1240px] h-[109px] max-md:w-[90%] max-md:h-auto" />
        </motion.div>

        <div className="absolute left-1/2 top-[630px] md:top-[730px] max-md:top-auto max-md:bottom-[28px] -translate-x-1/2 z-10 flex flex-col items-center gap-4 md:gap-5 pointer-events-none max-md:px-6">
          <p className="font-unbounded t-body-sm text-white/90 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-[600px]">
            Дизайн и производство мебели для бизнеса, дома, офисов и HoReCa.
          </p>
          <button
            type="button"
            onClick={() => setIsRequestOpen(true)}
            className="h-[50px] md:h-[57px] px-8 md:px-10 rounded-[20px] bg-black/40 backdrop-blur-xl border border-white/10 font-unbounded t-body text-white whitespace-nowrap transition-all duration-200 hover:bg-white/20 hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(255,255,255,0.1)] pointer-events-auto"
          >
            Оставить заявку
          </button>
        </div>

        {/* INTERACTIVE NAV */}
        <div className="fixed z-50 left-1/2 -translate-x-1/2 top-[16px] md:top-[24px] group hero-nav">
          <nav className="relative h-[50px] md:h-[57px] w-[65px] group-hover:w-[439px] max-md:w-[92vw] max-md:group-hover:w-[92vw] transition-all duration-500 ease-in-out rounded-[20px] max-md:rounded-[16px] bg-transparent overflow-hidden">
            {/* Glassy background - strictly visible only on hover */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-end pr-[30px] pl-[75px] gap-[45px] opacity-0 group-hover:opacity-100 max-md:opacity-100 max-md:justify-center max-md:pr-3 max-md:pl-[56px] max-md:gap-4 transition-opacity duration-300 delay-150 pointer-events-none group-hover:pointer-events-auto max-md:pointer-events-auto">
              <a href="#about" className="font-unbounded font-normal t-nav max-md:text-[13px] text-white/80 hover:text-white transition-colors whitespace-nowrap">О нас</a>
              <a href="#projects" className="font-unbounded font-normal t-nav max-md:text-[13px] text-white/80 hover:text-white transition-colors whitespace-nowrap">Проекты</a>
              <a href="#contacts" className="font-unbounded font-normal t-nav max-md:text-[13px] text-white/80 hover:text-white transition-colors whitespace-nowrap">Контакты</a>
            </div>

            {/* Logo icon */}
            <div className="absolute left-[10px] size-[28px] md:size-[43px] top-[11px] md:top-[7px] z-10">
              <img src="/assets/monoburo-mark.svg" alt="Monoburo" className="block size-full" />
            </div>
          </nav>
        </div>
      </div>
      {isRequestOpen && <RequestModal onClose={() => setIsRequestOpen(false)} />}
    </section>
  );
};

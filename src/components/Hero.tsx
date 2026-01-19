"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { svgPaths } from "@/utils/svgPaths";
import { RequestModal } from "@/components/RequestModal";

export const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <section id="hero" className="relative w-full h-[1024px] overflow-hidden bg-white">
      <h1 className="sr-only">
        Buro DSGN — дизайн и производство мебели для бизнеса, дома и офисов
      </h1>
      <div className="relative w-[1440px] h-full mx-auto overflow-hidden rounded-[40px]" data-name="Hero">
        {/* Background with parallax */}
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: bgY }}>
          <Image src="/assets/hero_bg.jpg" alt="Buro DSGN Hero" fill className="object-cover object-center pointer-events-none scale-110" priority quality={100} />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 top-0 z-0" />

        {/* Letters */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ y: contentY }}>
          <div className="relative w-[591px] h-[302px]">
            <p className="absolute font-unbounded font-normal leading-[normal] left-[545px] t-nav text-[#FFEEE2] opacity-95 text-center text-nowrap top-[283px]">dsgn</p>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute h-[290.187px] left-[151.86px] top-0 w-[176.001px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.001 290.187"><path clipRule="evenodd" d={svgPaths.p2bc8000} fill="#FFEEE2" fillOpacity="0.95" fillRule="evenodd" /></svg>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute h-[288.163px] left-[327.16px] top-[4.51px] w-[112.306px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.306 288.163"><path clipRule="evenodd" d={svgPaths.p3c782a00} fill="#FFEEE2" fillOpacity="0.95" fillRule="evenodd" /></svg>
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute h-[286.09px] left-[416.74px] top-[9.67px] w-[155.257px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.257 286.09"><path clipRule="evenodd" d={svgPaths.p3aa0b700} fill="#FFEEE2" fillOpacity="0.95" fillRule="evenodd" /></svg>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute h-[290.013px] left-0 top-0 w-[152.096px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.096 290.013"><path clipRule="evenodd" d={svgPaths.p11da2e00} fill="#FFEEE2" fillOpacity="0.95" fillRule="evenodd" /></svg>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-[730px] -translate-x-1/2 z-10 flex flex-col items-center gap-5 pointer-events-none">
          <p className="font-unbounded t-body-sm text-white/90 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-[600px]">
            Дизайн и производство мебели для бизнеса, дома, офисов и HoReCa.
          </p>
          <button
            type="button"
            onClick={() => setIsRequestOpen(true)}
            className="h-[57px] px-10 rounded-[20px] bg-black/40 backdrop-blur-xl border border-white/10 font-unbounded t-body text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(255,255,255,0.1)] pointer-events-auto"
          >
            Оставить заявку
          </button>
        </div>

        {/* INTERACTIVE NAV - NO GREY SQUARE, SMOOTH GLOW */}
        <div className="fixed z-50 left-1/2 -translate-x-1/2 top-[24px] group">
          {/* Soft glow behind the nav, outside overflow-hidden */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[120px] bg-[#d37133] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
          
          <nav className="relative h-[57px] w-[65px] group-hover:w-[439px] transition-all duration-500 ease-in-out rounded-[20px] bg-transparent">
            {/* Glassy background - strictly visible only on hover */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-end pr-[30px] pl-[75px] gap-[45px] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 pointer-events-none group-hover:pointer-events-auto">
              <a href="#about" className="font-unbounded font-normal t-nav text-[#FFEEE2]/80 hover:text-white transition-colors whitespace-nowrap">О нас</a>
              <a href="#projects" className="font-unbounded font-normal t-nav text-[#FFEEE2]/80 hover:text-white transition-colors whitespace-nowrap">Проекты</a>
              <a href="#contacts" className="font-unbounded font-normal t-nav text-[#FFEEE2]/80 hover:text-white transition-colors whitespace-nowrap">Контакты</a>
            </div>

            {/* Logo icon (B) */}
            <div className="absolute left-[11px] size-[43px] top-[7px] z-10">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
                <path d={svgPaths.pcfe680} fill="#141414" />
                <path clipRule="evenodd" d={svgPaths.p29f11080} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </nav>
        </div>
      </div>
      {isRequestOpen && <RequestModal onClose={() => setIsRequestOpen(false)} />}
    </section>
  );
};

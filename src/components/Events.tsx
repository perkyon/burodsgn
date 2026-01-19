"use client";

import Image from "next/image";
import { svgPaths } from "@/utils/svgPaths";
import { motion } from "framer-motion";

export const Events = () => {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="events" className="relative w-full h-[952px] bg-white overflow-hidden">
      <div className="relative w-[1440px] h-full mx-auto overflow-hidden rounded-[40px]" data-name="Мероприятия">
        {/* Header */}
        <h2 className="absolute font-unbounded font-medium leading-[normal] left-[97px] t-h1 text-black text-nowrap top-[50px] z-10">
          Мероприятия
        </h2>
        <p className="absolute font-unbounded font-normal leading-none left-[203px] t-h3 text-black text-nowrap top-[100px] z-10">
          На которых вы можете нас найти
        </p>

        {/* Мероприятия Gallery */}
        <div className="absolute h-[600px] left-[100px] rounded-[40px] top-[180px] w-[607px] z-10 overflow-hidden shadow-2xl">
          <Image
            src="/assets/event1.png"
            alt="Event 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute h-[600px] left-[calc(50%+13px)] rounded-[40px] top-[180px] w-[606px] z-10 overflow-hidden shadow-2xl">
          <Image
            src="/assets/event2.png"
            alt="Event 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Бегущая строка логотипов - УБРАНО НАВЕДЕНИЕ */}
        <div className="absolute bottom-[40px] left-0 w-full overflow-hidden h-[60px]">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {logos.concat(logos).map((_, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                {/* IN HOME Logo */}
                <div className="w-[234px] h-[28px] mx-10">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 233.999 28.6417">
                    <path d={svgPaths.p1d871e32} fill="#010101" />
                  </svg>
                </div>
                {/* РУССКИЙ ДОМ Logo */}
                <div className="relative w-[204px] h-[50px] mx-10">
                  <Image 
                    src="/assets/russian_house.png" 
                    alt="Русский дом" 
                    fill 
                    className="object-contain pointer-events-none" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import Image from "next/image";
import { svgPaths } from "@/utils/svgPaths";

export const Events = () => {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="events" className="relative w-full bg-white stacked-card max-md:mt-10">
      <div className="relative w-full max-w-[1440px] h-auto md:h-[952px] mx-auto overflow-hidden rounded-[24px] md:rounded-[40px] px-4 md:px-0" data-name="Мероприятия">
        <div className="relative md:absolute left-0 md:left-[100px] top-0 w-full md:w-[1234px] h-[48px] md:h-[58px] rounded-full bg-black z-20 flex items-center px-[20px] md:px-[24px]">
          <h2 className="text-white font-bold text-[30px]">Мероприятия</h2>
        </div>

        {/* Мероприятия Gallery */}
        <div className="relative w-full h-[320px] md:absolute md:h-[600px] md:left-[100px] md:top-[120px] md:w-[607px] z-10 overflow-hidden shadow-2xl rounded-[24px] md:rounded-[40px] mt-[80px] md:mt-0">
          <Image
            src="/assets/event1.png"
            alt="Event 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[320px] md:absolute md:h-[600px] md:left-[calc(50%+13px)] md:top-[120px] md:w-[606px] z-10 overflow-hidden shadow-2xl rounded-[24px] md:rounded-[40px] mt-4 md:mt-0">
          <Image
            src="/assets/event2.png"
            alt="Event 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Бегущая строка логотипов - УБРАНО НАВЕДЕНИЕ */}
        <div className="relative md:absolute md:bottom-[40px] left-0 w-full overflow-hidden h-[60px] mt-6 md:mt-0">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {logos.concat(logos).map((_, index) => (
              <div key={index} className="flex items-center shrink-0">
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

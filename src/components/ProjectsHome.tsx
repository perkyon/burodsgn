import React from "react";
import img1 from "figma:asset/image2.png";
import img2 from "figma:asset/image3.png";
import img3 from "figma:asset/image4.png";

export function ProjectsHome() {
  return (
    <section id="home" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-[40px] md:text-[60px] lg:text-[70px] text-[#141414] text-center mb-6 md:mb-8">
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">П</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">роекты </span>
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">д</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">ом и </span>
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">о</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">фис</span>
        </h2>
        
        <div className="font-['Unbounded'] text-[35px] md:text-[40px] lg:text-[45px] text-black text-center mb-12 md:mb-16">
          <p className="mb-2">Проектирование и изготовление</p>
          <p>мебели для HoReCa, офиса и дома</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
            <img alt="Проект для дома 1" className="w-full h-full object-cover" src={img1} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
            <img alt="Проект для дома 2" className="w-full h-full object-cover" src={img2} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
            <img alt="Проект для дома 3" className="w-full h-full object-cover" src={img3} />
          </div>
        </div>
      </div>
    </section>
  );
}
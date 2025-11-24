import React from "react";
import img202511240825011 from "figma:asset/3320c2117426094d90a792c9011c4751d88c257b.png";

export function About() {
  return (
    <section id="about" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="font-['Unbounded'] text-[60px] md:text-[85px] lg:text-[105px] xl:text-[120px] mb-8 md:mb-12 relative" style={{ color: '#0a0a0a' }}>
          <p className="mb-2">Мебельная мастерская где</p>
          <p>можно воплотить нестандартные решения</p>
        </div>
        
        <div className="w-full h-px bg-black mb-8 md:mb-12" />
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="font-['Unbounded'] text-[38px] md:text-[52px] lg:text-[58px] xl:text-[65px] flex-1 max-w-full lg:max-w-[800px] xl:max-w-[900px] relative" style={{ color: '#0a0a0a' }}>
            <p className="mb-6">
              <span className="text-[50px] md:text-[70px] lg:text-[85px] xl:text-[100px]">М</span>
              <span>ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный</span>
            </p>
            
            <p className="mb-0">
              <span className="text-[50px] md:text-[70px] lg:text-[85px] xl:text-[100px]">Н</span>
              <span>ам важно помочь вам реализовать любые идеи которые вы себе только можете представить</span>
            </p>
          </div>
          
          <div className="w-full lg:w-[700px] xl:w-[900px] 2xl:w-[1000px] h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img alt="Интерьер мастерской" className="w-full h-full object-cover" src={img202511240825011} />
          </div>
        </div>
      </div>
    </section>
  );
}
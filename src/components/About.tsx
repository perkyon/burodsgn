import React from "react";
import img202511240825011 from "figma:asset/3320c2117426094d90a792c9011c4751d88c257b.png";

export function About() {
  return (
    <section id="about" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="font-['Unbounded'] text-[#000000] text-[48px] md:text-[60px] lg:text-[70px] leading-[1.05] mb-10 md:mb-12">
          <p className="mb-3">Мебельная мастерская где</p>
          <p>можно воплотить нестандартные решения</p>
        </div>
        
        <div className="w-full h-px bg-black mb-8 md:mb-12" />
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="font-['Unbounded'] text-[#000000] text-[32px] md:text-[40px] leading-[1] flex-1 max-w-full lg:max-w-[720px] space-y-8">
            <p>
              <span className="block">Мы не боимся брать сложные идеи</span>
              <span className="block pl-8">и реализовывать их, для нас каждый</span>
              <span className="block pl-8">проект особенный</span>
            </p>
            
            <p>
              <span className="block">Нам важно помочь вам реализовать любые идеи</span>
              <span className="block pl-8">которые вы себе только можете представить</span>
              <span className="block pl-8">и реализовывать их, для нас каждый проект особенный</span>
            </p>
          </div>
          
          <div className="w-full lg:w-[520px] xl:w-[580px] 2xl:w-[640px] h-[420px] md:h-[520px] lg:h-[560px] xl:h-[620px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img alt="Интерьер мастерской" className="w-full h-full object-cover" src={img202511240825011} />
          </div>
        </div>
      </div>
    </section>
  );
}
import img202511240825011 from "figma:asset/3320c2117426094d90a792c9011c4751d88c257b.png";

export function About() {
  return (
    <section id="about" className="bg-white w-full py-12 md:py-20">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="font-['Unbounded'] text-[27px] md:text-[45px] text-black mb-8 md:mb-12">
          <p className="mb-2">Мебельная мастерская где</p>
          <p>можно воплотить нестандартные решения</p>
        </div>
        
        <div className="w-full h-px bg-black mb-8 md:mb-12" />
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="font-['Unbounded'] text-[23px] md:text-[35px] text-black flex-1">
            <p className="mb-6">
              <span className="text-[27px] md:text-[45px]">М</span>
              <span>ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный</span>
            </p>
            
            <p className="mb-0">
              <span className="text-[27px] md:text-[45px]">Н</span>
              <span>ам важно помочь вам реализовать любые идеи которые вы себе только можете представить</span>
            </p>
          </div>
          
          <div className="w-full lg:w-[562px] h-[400px] md:h-[614px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img alt="Интерьер мастерской" className="w-full h-full object-cover" src={img202511240825011} />
          </div>
        </div>
      </div>
    </section>
  );
}
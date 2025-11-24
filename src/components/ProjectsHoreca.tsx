import React from "react";
import img1 from "figma:asset/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
import imgImage5 from "figma:asset/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import img3 from "figma:asset/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";

export function ProjectsHoreca() {
  const images = [img1, imgImage5, img3];

  const handleImageClick = (index: number) => {
    // В будущем здесь будет переход на страницу проекта
    console.log(`Clicked on project ${index + 1}`);
  };

  return (
    <section id="horeca" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-[#141414] text-center mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center items-baseline gap-1 md:gap-2">
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">П</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">роекты </span>
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">H</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">o</span>
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">R</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">e</span>
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">C</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">a</span>
          </div>
        </h2>
        
        <div className="font-['Unbounded'] text-[35px] md:text-[40px] lg:text-[45px] text-black text-center mb-12 md:mb-16">
          <p className="mb-2">Проектирование и изготовление</p>
          <p>мебели для HoReCa, офиса и дома</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="rounded-[10px] w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(index)}
            >
              <img alt={`Проект HoReCa ${index + 1}`} className="w-full h-full object-cover" src={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
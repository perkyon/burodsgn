import React from "react";
import img1 from "figma:asset/image2.png";
import img2 from "figma:asset/image3.png";
import img3 from "figma:asset/image4.png";

export function ProjectsHome() {
  const images = [img1, img2, img3];

  const handleImageClick = (index: number) => {
    // В будущем здесь будет переход на страницу проекта
    console.log(`Clicked on project ${index + 1}`);
  };

  return (
    <section id="home" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-[#141414] text-center mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center items-baseline gap-1 md:gap-2">
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">П</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">роекты </span>
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">д</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">ом и </span>
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]">о</span>
            <span className="text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px]">фис</span>
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
              <img alt={`Проект для дома ${index + 1}`} className="w-full h-full object-cover" src={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
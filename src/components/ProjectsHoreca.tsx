import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import img1 from "figma:asset/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
import imgImage5 from "figma:asset/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import img3 from "figma:asset/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";

export function ProjectsHoreca() {
  const images = [img1, imgImage5, img3];

  return (
    <section id="horeca" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-[40px] md:text-[60px] lg:text-[70px] text-[#141414] text-center mb-6 md:mb-8">
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">П</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">роекты </span>
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">H</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">o</span>
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">R</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">e</span>
          <span className="text-[50px] md:text-[60px] lg:text-[70px]">C</span>
          <span className="text-[40px] md:text-[55px] lg:text-[65px]">a</span>
        </h2>
        
        <div className="font-['Unbounded'] text-[35px] md:text-[40px] lg:text-[45px] text-black text-center mb-12 md:mb-16">
          <p className="mb-2">Проектирование и изготовление</p>
          <p>мебели для HoReCa, офиса и дома</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <div className="rounded-[10px] w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
                  <img alt={`Проект HoReCa ${index + 1}`} className="w-full h-full object-cover" src={img} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
        </Carousel>
      </div>
    </section>
  );
}
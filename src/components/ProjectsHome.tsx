import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import img1 from "figma:asset/image2.png";
import img2 from "figma:asset/image3.png";
import img3 from "figma:asset/image4.png";

export function ProjectsHome() {
  const images = [img1, img2, img3];

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
                  <img alt={`Проект для дома ${index + 1}`} className="w-full h-full object-cover" src={img} />
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
import img1 from "figma:asset/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
import imgImage5 from "figma:asset/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import img3 from "figma:asset/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";

export function ProjectsHoreca() {
  return (
    <section id="horeca" className="bg-white w-full py-12 md:py-20">
      <div className="w-full px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-2xl md:text-4xl text-[#141414] text-center mb-6 md:mb-8">
          <span className="text-3xl md:text-[40px]">П</span>
          <span className="text-2xl md:text-[35px]">роекты </span>
          <span className="text-3xl md:text-[40px]">H</span>
          <span className="text-2xl md:text-[35px]">o</span>
          <span className="text-3xl md:text-[40px]">R</span>
          <span className="text-2xl md:text-[35px]">e</span>
          <span className="text-3xl md:text-[40px]">C</span>
          <span className="text-2xl md:text-[35px]">a</span>
        </h2>
        
        <div className="font-['Unbounded'] text-xl md:text-2xl text-black text-center mb-12 md:mb-16">
          <p className="mb-2">Проектирование и изготовление</p>
          <p>мебели для HoReCa, офиса и дома</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект HoReCa 1" className="w-full h-full object-cover" src={img1} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект HoReCa 2" className="w-full h-full object-cover" src={imgImage5} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект HoReCa 3" className="w-full h-full object-cover" src={img3} />
          </div>
        </div>
      </div>
    </section>
  );
}
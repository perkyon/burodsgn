import img1 from "figma:asset/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
import img2 from "figma:asset/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
import img3 from "figma:asset/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";

export function ProjectsHome() {
  return (
    <section id="home" className="bg-white w-full py-12 md:py-20">
      <div className="w-full px-4 md:px-8">
        <h2 className="font-['Unbounded'] text-[27px] md:text-[45px] text-[#141414] text-center mb-6 md:mb-8">
          <span className="text-[35px] md:text-[45px]">П</span>
          <span className="text-[27px] md:text-[40px]">роекты </span>
          <span className="text-[35px] md:text-[45px]">д</span>
          <span className="text-[27px] md:text-[40px]">ом и </span>
          <span className="text-[35px] md:text-[45px]">о</span>
          <span className="text-[27px] md:text-[40px]">фис</span>
        </h2>
        
        <div className="font-['Unbounded'] text-[25px] md:text-[27px] text-black text-center mb-12 md:mb-16">
          <p className="mb-2">Проектирование и изготовление</p>
          <p>мебели для HoReCa, офиса и дома</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект для дома 1" className="w-full h-full object-cover" src={img1} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект для дома 2" className="w-full h-full object-cover" src={img2} />
          </div>
          <div className="rounded-[10px] w-full h-[400px] md:h-[550px] overflow-hidden">
            <img alt="Проект для дома 3" className="w-full h-full object-cover" src={img3} />
          </div>
        </div>
      </div>
    </section>
  );
}
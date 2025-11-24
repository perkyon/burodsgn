import img1 from "figma:asset/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
import imgImage5 from "figma:asset/77e65ee8bee14c18399a8e359e571f19624b33cc.png";

export function MacBookAir3() {
  return (
    <div className="bg-white absolute inset-0" data-name="MacBook Air - 3">
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[227px] text-[#141414] text-[0px] text-center text-nowrap top-[54px] translate-x-[-50%] whitespace-pre">
        <span className="text-[40px]">П</span>
        <span className="text-[35px]">роекты</span>
        <span className="text-[40px]">{` H`}</span>
        <span className="text-[35px]">o</span>
        <span className="text-[40px]">R</span>
        <span className="text-[35px]">e</span>
        <span className="text-[40px]">C</span>
        <span className="text-[35px]">a</span>
      </p>
      <div className="absolute h-[550px] left-[33px] rounded-[10px] top-[183px] w-[413px]" data-name="джпег 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img1} />
      </div>
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[568px] text-[25px] text-black text-nowrap top-[88px] whitespace-pre">
        <p className="mb-0">{`Проектирование и изготовление `}</p>
        <p>{`         мебели для HoReCa, офиса и дома`}</p>
      </div>
      <div className="absolute h-[550px] left-[966px] rounded-[10px] top-[183px] w-[413px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage5} />
      </div>
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[650px] text-[25px] text-black text-nowrap top-[805px] whitespace-pre">{`Проектирование и изготовление `}</p>
    </div>
  );
}
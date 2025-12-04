const imgImage1 = "/figma/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";
const imgImage2 = "/figma/ced97181c62287b9cda1eac6b72da3abdbb81d20.png";
const imgImage3 = "/figma/6c07455199f40a32c8557523758434ec91b483cc.png";

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 4">
      <div className="absolute h-[550px] left-[60px] rounded-[10px] top-[237px] w-[413px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[320px] text-[#141414] text-[40px] text-center text-nowrap top-[45px] translate-x-[-50%] whitespace-pre">Проекты дом и офис</p>
      <div className="absolute h-0 left-0 top-[130px] w-[597px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 597 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" x2="597" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[550px] left-[537px] rounded-[10px] top-[237px] w-[413px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[550px] left-[1014px] rounded-[10px] top-[237px] w-[412.64px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage3} />
      </div>
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[799px] text-[25px] text-black text-nowrap top-[140px] whitespace-pre">
        <p className="mb-0">&nbsp;</p>
        <p>{`         мебели для HoReCa, офиса и дома`}</p>
      </div>
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[760px] text-[25px] text-black text-nowrap top-[130px] whitespace-pre">{`Проектирование и изготовление `}</p>
    </div>
  );
}
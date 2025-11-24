import imgImage1 from "figma:asset/c16e70d99e5d6998d8af8c71cbaf5a1f8b5f445c.png";

export function MacBookAir9() {
  return (
    <div className="bg-white absolute inset-0" data-name="MacBook Air - 9">
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[293px] text-[#141414] text-[40px] text-center text-nowrap top-[23px] translate-x-[-50%] whitespace-pre">Проекты дом и офис</p>
      <div className="absolute h-0 left-[-18px] top-[102px] w-[597px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 597 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" x2="597" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[660px] text-[25px] text-black text-nowrap top-[-28px] whitespace-pre">
        <p className="mb-0">&nbsp;</p>
        <p>{`         мебели для HoReCa, офиса и дома`}</p>
      </div>
      <div className="absolute h-[550px] left-[33px] rounded-[10px] top-[141px] w-[413px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[42px] text-[40px] text-black text-nowrap top-[790px] whitespace-pre">{`Нас можно встретить `}</p>
    </div>
  );
}
import svgPaths from "./svg-j7yfccz6jr";
const img202511240725411 = "/figma/8aa084b825b8cad5f81b02dabe80ba0e50769c75.png";
const img202511240730461 = "/figma/d2ee5035d9c68be8b818bdc5d742c74bf3c0ffe2.png";
const imgImage8 = "/figma/4231f1be4c8bd3ef16a0c5e31819d87e5fcaeab9.png";

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 5">
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[60px] text-[40px] text-black text-nowrap top-[45px] whitespace-pre">
        <p className="mb-0">{`Нас можно встретить `}</p>
        <p>{`             на мероприятиях и выставках`}</p>
      </div>
      <div className="absolute h-0 left-0 top-[143px] w-[1001px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1001 1">
            <line id="Line 7" stroke="var(--stroke-0, black)" x2="1001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[650px] left-[112px] rounded-[10px] top-[199px] w-[550px]" data-name="Снимок экрана 2025-11-24 в 07.25.41 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img202511240725411} />
      </div>
      <div className="absolute h-[650px] left-[779px] rounded-[10px] top-[199px] w-[550px]" data-name="Снимок экрана 2025-11-24 в 07.30.46 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img202511240730461} />
      </div>
      <div className="absolute inset-[90.04%_53.96%_7.16%_29.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 29">
          <path d={svgPaths.p1d871e32} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.04%_90.62%_7.16%_-6.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 29">
          <path d={svgPaths.p1d871e32} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.04%_17.29%_7.16%_66.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 29">
          <path d={svgPaths.p1d871e32} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[50px] left-[180px] top-[911px] w-[204px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[50px] left-[1236px] top-[911px] w-[204px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[50px] left-[708px] top-[911px] w-[204px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}
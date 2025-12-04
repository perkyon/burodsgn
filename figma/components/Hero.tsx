import svgPaths from "../imports/svg-syrqu6uigp";

interface HeroProps {
  onMenuClick: () => void;
}

function BuroLogo() {
  return (
    <div className="absolute h-[200px] sm:h-[300px] md:h-[400px] lg:h-[469.64px] left-1/2 -translate-x-1/2 lg:left-[283px] lg:translate-x-0 top-[150px] sm:top-[200px] lg:top-[277px] w-[300px] sm:w-[500px] md:w-[700px] lg:w-[873.546px]" data-name="Букавки">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 874 470">
        <g id="ÐÑÐºÐ°Ð²ÐºÐ¸">
          <g id="ÐÑÐºÐ²Ð° Ð">
            <path clipRule="evenodd" d={svgPaths.p2943e980} fill="var(--fill-0, #141414)" fillRule="evenodd" />
            <path d={svgPaths.p119880} stroke="var(--stroke-0, #141414)" strokeOpacity="0.9" strokeWidth="6" />
          </g>
          <g id="ÐÑÐºÐ²Ð° Ð® Ð¿Ð¾ÑÑÑ">
            <path clipRule="evenodd" d={svgPaths.p22670400} fill="var(--fill-0, #141414)" fillRule="evenodd" />
            <path d={svgPaths.p3c619a80} stroke="var(--stroke-0, #141414)" strokeOpacity="0.9" strokeWidth="6" />
          </g>
          <g id="ÐÑÐºÐ²Ð° Ð ">
            <path clipRule="evenodd" d={svgPaths.p35d9ba80} fill="var(--fill-0, #141414)" fillRule="evenodd" />
            <path d={svgPaths.p1d921400} stroke="var(--stroke-0, #141414)" strokeOpacity="0.9" strokeWidth="6" />
          </g>
          <g id="ÐÑÐºÐ²Ð° Ð">
            <path clipRule="evenodd" d={svgPaths.p1a900900} fill="var(--fill-0, #141414)" fillRule="evenodd" />
            <path d={svgPaths.p37f1c400} stroke="var(--stroke-0, #141414)" strokeOpacity="0.9" strokeWidth="6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="fixed left-[20px] sm:left-[37px] top-[21px] w-[27px] h-[20px] cursor-pointer transition-opacity hover:opacity-70 z-40"
      data-name="Кнопка меню"
    >
      <div className="bg-[#141414] h-[2px] w-full rounded-[10px] mb-2" />
      <div className="bg-[#141414] h-[2px] w-full rounded-[10px] mb-2" />
      <div className="bg-[#141414] h-[2px] w-full rounded-[10px]" />
    </button>
  );
}

export function Hero({ onMenuClick }: HeroProps) {
  return (
    <div className="bg-white relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
      <div className="relative w-full max-w-[1440px] h-screen lg:h-[1024px]" data-name="Desktop - 1">
        <BuroLogo />
        <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 lg:left-[1157.5px] lg:translate-x-[-50%] text-[#141414] text-[16px] sm:text-[18px] lg:text-[20px] text-center text-nowrap top-[380px] sm:top-[520px] lg:top-[734px] whitespace-pre">dsgn</p>
        <MenuButton onClick={onMenuClick} />
      </div>
    </div>
  );
}
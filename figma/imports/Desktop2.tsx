const img202511240825011 = "/figma/3320c2117426094d90a792c9011c4751d88c257b.png";

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[228px] text-[40px] text-black text-nowrap top-[25px] whitespace-pre">
        <p className="mb-0">Мебельная мастерская где</p>
        <p>{`         можно воплотить нестандартные решения`}</p>
      </div>
      <div className="absolute h-0 left-[269px] top-[135px] w-[1171.5px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1172 1">
            <path d="M0 0.5H1171.5" id="Line 2" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[546px] leading-[0] left-[60px] text-[0px] text-black top-[206px] w-[488px]">
        <p className="leading-none mb-0">
          <span className="text-[35px]">М</span>
          <span className="text-[30px]">ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный</span>
        </p>
        <p className="leading-none mb-0 text-[30px]">&nbsp;</p>
        <p className="leading-none">
          <span className="text-[35px]">Н</span>
          <span className="text-[30px]">{`ам важно помочь вам реализовать любые идеи которые вы себе только можете предстваить `}</span>
          <span className="text-[30px]">идеи и реализовывать их, для нас каждый проект особенный</span>
          <span className="text-[30px]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="text-[35px]">К</span>
          <span className="text-[30px]">{`оторые вы себе только можете предстваить `}</span>
          <span className="text-[30px]">идеи и реализовывать их, для нас каждый проект особенный</span>
        </p>
      </div>
      <div className="absolute h-[670px] left-[685px] rounded-[10px] top-[175px] w-[645px]" data-name="Снимок экрана 2025-11-24 в 08.25.01 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img202511240825011} />
      </div>
    </div>
  );
}
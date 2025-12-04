const img1 = "/figma/9d277a0c76e94e6c0d1c36b260e7d33fa0e08d05.png";
const imgImage4 = "/figma/c816ec898d4af1b629a41b94b567b03f5616c148.png";
const imgImage5 = "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png";

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 3">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.002207500161603093)+(var(--transform-inner-height)*0.9999975562095642)))] items-center justify-center left-0 top-[130px] w-[calc(1px*((var(--transform-inner-height)*0.002207500161603093)+(var(--transform-inner-width)*0.9999975562095642)))]" style={{ "--transform-inner-width": "453", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.126deg]">
          <div className="h-0 relative w-[453.001px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453 1">
                <line id="Line 4" stroke="var(--stroke-0, black)" x2="453.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[254px] text-[#141414] text-[0px] text-center text-nowrap top-[45px] translate-x-[-50%] whitespace-pre">
        <span className="text-[40px]">П</span>
        <span className="text-[35px]">роекты</span>
        <span className="text-[40px]">{` H`}</span>
        <span className="text-[35px]">o</span>
        <span className="text-[40px]">R</span>
        <span className="text-[35px]">e</span>
        <span className="text-[40px]">C</span>
        <span className="text-[35px]">a</span>
      </p>
      <div className="absolute h-[550px] left-[60px] rounded-[10px] top-[269px] w-[412.5px]" data-name="джпег 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={img1} />
      </div>
      <div className="absolute h-[550px] left-[537px] rounded-[10px] top-[269px] w-[413px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[550px] left-[1014px] rounded-[10px] top-[269px] w-[413px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage5} />
      </div>
      <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-[648px] text-[25px] text-black text-nowrap top-[130px] whitespace-pre">
        <p className="mb-0">{`Проектирование и изготовление `}</p>
        <p>{`         мебели для HoReCa, офиса и дома`}</p>
      </div>
    </div>
  );
}
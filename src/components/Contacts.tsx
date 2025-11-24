import svgPaths from "../imports/svg-0tbve8iu82";

function SocialIcon({ pathData, clipPathId }: { pathData: string; clipPathId?: string }) {
  return (
    <div className="w-8 h-8">
      <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
        {clipPathId ? (
          <g clipPath={`url(#${clipPathId})`}>
            <path clipRule="evenodd" d={pathData} fill="white" fillRule="evenodd" />
          </g>
        ) : (
          <path d={pathData} fill="white" />
        )}
        {clipPathId && (
          <defs>
            <clipPath id={clipPathId}>
              <rect fill="white" height="32.0708" width="31.7727" />
            </clipPath>
          </defs>
        )}
      </svg>
    </div>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className="bg-white w-full py-12 md:py-20">
      <div className="w-full px-4 md:px-8">
        <div className="font-['Unbounded'] text-2xl md:text-4xl text-black mb-6 md:mb-8">
          <p className="mb-2">Напишите</p>
          <p className="md:pl-20">если есть вопрос</p>
        </div>
        
        <div className="w-full max-w-xl h-px bg-black mb-12 md:mb-16" />
        
        <div className="flex justify-center mb-12 md:mb-20">
          <button className="bg-[#141414] px-12 md:px-16 py-3 md:py-4 rounded-md hover:bg-[#2a2a2a] transition-colors">
            <span className="font-['Unbounded'] text-base md:text-xl text-[rgba(255,255,255,0.8)]">
              Оставьте заявку
            </span>
          </button>
        </div>

        <div className="bg-[#141414] py-8 md:py-12 px-6 md:px-16 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div className="text-center md:text-left">
              <p className="font-['Unbounded'] text-lg md:text-xl text-white mb-2">+7 (918) 123-45-67</p>
              <p className="font-['Unbounded'] text-lg md:text-xl text-white">sales@burodsgn.ru</p>
            </div>
            
            <div className="text-center">
              <p className="font-['Unbounded'] text-sm md:text-base text-white mb-2">
                <span className="text-base md:text-lg">К</span>
                <span>раснодар, ул. Примерная, д. 10, офис 5</span>
              </p>
              <p className="font-['Unbounded'] text-xs md:text-sm text-white">
                Режим работы:<br />
                Пн-Пт с 9:00 до 18:00
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-['Unbounded'] text-white mb-1">
                <span className="text-base md:text-lg">BURO</span>
                <span className="text-sm"> digital</span>
              </p>
              <p className="font-['Unbounded'] text-white mb-1">
                <span className="text-base md:text-lg">BURO </span>
                <span className="text-sm">dsgn</span>
              </p>
              <p className="font-['Unbounded'] text-white">
                <span className="text-base md:text-lg">BURO</span>
                <span className="text-sm"> crm</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-6 md:mb-8">
            <SocialIcon pathData={svgPaths.p1a720400} clipPathId="clip0_social_1" />
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
                <g clipPath="url(#clip0_social_2)">
                  <path d={svgPaths.p2ceaaa00} fill="white" />
                  <path d={svgPaths.p36254ab0} fill="white" />
                  <path d={svgPaths.p13029f80} fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_social_2">
                    <rect fill="white" height="32.0708" width="31.7727" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <SocialIcon pathData={svgPaths.p1a720400} clipPathId="clip0_social_3" />
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
                <path d={svgPaths.pbb24c00} fill="white" />
              </svg>
            </div>
            <SocialIcon pathData={svgPaths.p1a720400} clipPathId="clip0_social_5" />
          </div>

          <div className="text-center mb-4 md:mb-6">
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">2025</p>
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">ООО "БЮРО 23"</p>
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">Все права защищены</p>
          </div>

          <div className="w-full h-px bg-white mb-4" />

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-center">
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
            <p className="font-['Unbounded'] text-xs text-[rgba(255,255,255,0.7)]">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </section>
  );
}
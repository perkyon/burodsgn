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

            <div className="text-center md:text-right md:flex md:flex-col md:items-end">
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
            {/* Telegram */}
            <SocialIcon pathData={svgPaths.p1a720400} clipPathId="clip0_social_1" />
            {/* Instagram */}
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
            {/* Pinterest */}
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 6.777 4.163 12.565 10.035 15.135-.139-1.262-.263-3.2.055-4.576.287-1.22 1.85-8.127 1.85-8.127s-.472-.944-.472-2.338c0-2.19 1.27-3.825 2.85-3.825 1.344 0 1.993 1.009 1.993 2.218 0 1.35-.859 3.37-1.302 5.24-.37 1.567.788 2.847 2.336 2.847 2.802 0 4.956-2.955 4.956-7.22 0-2.976-2.14-5.06-5.197-5.06-3.538 0-5.74 2.653-5.74 5.398 0 1.044.402 2.165.904 2.777.1.121.115.226.085.349-.09.38-.29 1.198-.33 1.365-.052.2-.17.243-.392.147-1.47-.684-2.388-2.83-2.388-4.556 0-3.728 2.71-7.15 7.82-7.15 4.107 0 7.303 2.993 7.303 6.99 0 4.08-2.57 7.36-6.137 7.36-1.198 0-2.326-.623-2.712-1.453l-.737 2.81c-.267 1.04-1.002 2.345-1.493 3.14 1.127.348 2.32.536 3.55.536 8.836 0 16-7.164 16-16S24.836 0 16 0z" fill="white" />
              </svg>
            </div>
            {/* WhatsApp */}
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
                <path d={svgPaths.pbb24c00} fill="white" />
              </svg>
            </div>
            {/* VK */}
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 33">
                <path d="M16.455 11.838c-1.545.649-4.633 1.991-9.264 4.028-.761.301-1.155.597-1.191.886-.039.488.605.68 1.43.942.111.036.227.073.346.112.812.266 1.903.577 2.47.59.515.01 1.089-.204 1.723-.643 4.327-2.948 6.561-4.438 6.701-4.47.099-.022.236-.051.329.032.093.083.083.241.073.284-.04.258-2.417 2.488-3.647 3.642-.328.36-.598.615-.654.674-.055.058-.182.185-.306.31-.626.683-1.192 1.233.158.888.676.43 1.195.787 1.713 1.143.566.389 1.13.777 1.86 1.26.183.122.361.25.534.374.658.474 1.25.899 1.98.967.356.04.795-.357 1.018-1.559.526-2.838 1.561-9.011 1.8-11.546.01-.222-.016-.506-.037-.631-.02-.125-.064-.303-.225-.435-.16-.156-.454-.188-.586-.19-.603-.01-1.52.322-5.932 2.175z" fill="white" />
                <path d="M0 16.035C0 7.179 7.113 0 15.886 0c8.774 0 15.887 7.179 15.887 16.035 0 8.856-7.113 16.035-15.887 16.035C7.113 32.07 0 24.891 0 16.035zm17.847 11.949c.788 0 1.43-.64 1.43-1.43 0-.789-.642-1.43-1.43-1.43-.789 0-1.43.641-1.43 1.43 0 .79.641 1.43 1.43 1.43zm3.85-6.05c-.5.495-1.18.77-2.04.77h-1.62v3.28c0 .79-.64 1.43-1.43 1.43-.79 0-1.43-.64-1.43-1.43V12.704c0-.79.64-1.43 1.43-1.43h3.05c1.5 0 2.72 1.22 2.72 2.72 0 1.04-.58 1.95-1.44 2.42.86.47 1.44 1.38 1.44 2.42 0 1.5-1.22 2.72-2.72 2.72z" fill="white" />
              </svg>
            </div>
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
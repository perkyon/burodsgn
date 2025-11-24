import React from "react";
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
        <div className="font-['Unbounded'] text-[27px] md:text-[45px] text-black mb-6 md:mb-8">
          <p className="mb-2">Напишите</p>
          <p className="md:pl-20">если есть вопрос</p>
        </div>
        
        <div className="w-full max-w-xl h-px bg-black mb-12 md:mb-16" />
        
        <div className="flex justify-center mb-12 md:mb-20">
          <button className="bg-[#141414] px-12 md:px-16 py-3 md:py-4 rounded-md hover:bg-[#2a2a2a] transition-colors">
            <span className="font-['Unbounded'] text-[21px] md:text-[25px] text-[rgba(255,255,255,0.8)]">
              Оставьте заявку
            </span>
          </button>
        </div>

        <div className="bg-[#141414] py-8 md:py-12 px-6 md:px-16 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div className="text-center md:text-left">
              <p className="font-['Unbounded'] text-[23px] md:text-[25px] text-white mb-2">+7 (918) 123-45-67</p>
              <p className="font-['Unbounded'] text-[23px] md:text-[25px] text-white">sales@burodsgn.ru</p>
            </div>
            
            <div className="text-center">
              <p className="font-['Unbounded'] text-[18px] md:text-[21px] text-white mb-2">
                <span className="text-[21px] md:text-[23px]">К</span>
                <span>раснодар, ул. Примерная, д. 10, офис 5</span>
              </p>
              <p className="font-['Unbounded'] text-[16px] md:text-[18px] text-white">
                Режим работы:<br />
                Пн-Пт с 9:00 до 18:00
              </p>
            </div>

            <div className="text-center md:text-right md:flex md:flex-col md:items-end">
              <p className="font-['Unbounded'] text-white mb-1">
                <span className="text-[21px] md:text-[23px]">BURO</span>
                <span className="text-[18px]"> digital</span>
              </p>
              <p className="font-['Unbounded'] text-white mb-1">
                <span className="text-[21px] md:text-[23px]">BURO </span>
                <span className="text-[18px]">dsgn</span>
              </p>
              <p className="font-['Unbounded'] text-white">
                <span className="text-[21px] md:text-[23px]">BURO</span>
                <span className="text-[18px]"> crm</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-6 md:mb-8">
            {/* Telegram */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.803c-.14.625-.5.778-.9.485l-2.48-1.83-1.198.754c-.13.13-.24.24-.493.24l.177-2.51 4.59-4.15c.2-.18.035-.28-.31-.1l-5.68 3.58-2.45-.765c-.53-.165-.54-.53.11-.8l9.55-3.68c.44-.16.83-.08.5.3z" fill="#141414"/>
              </svg>
            </div>
            {/* Instagram */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#141414" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="#141414" strokeWidth="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#141414"/>
              </svg>
            </div>
            {/* Pinterest */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="#141414" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </div>
            {/* WhatsApp */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="#141414" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            {/* VK */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="#141414" viewBox="0 0 24 24">
                <path d="M12.785 16.241s.287-.033.435-.2c.135-.15.131-.433.131-.433s-.02-1.288.58-1.478c.594-.188 1.354.95 2.16 1.37.595.31 1.045.241 1.045.241l2.15-.031s1.123-.07.59-.95c-.044-.07-.31-.653-1.61-1.85-1.36-1.25-1.18-.525.453-1.61.98-.65 1.37-1.046 1.25-1.21-.12-.165-.86-.121-.86-.121l-2.22.014s-.165-.03-.285.09c-.12.12-.39.39-.39.39s-.7.93-1.52 1.72c-.29.29-.41.38-.55.38-.15 0-.12-.11-.12-.42V9.42c0-.35-.1-.42-.3-.45-.08-.01-.18-.02-.37-.02-.29 0-.75.02-1.24.02-.2 0-.33.02-.43.06-.12.05-.21.16-.01.33.2.2.87.85.87.85s.32.38.38.57c.06.19.01.5-.01.66-.03.32-.07.81-.07 1.38 0 .38.05.45.18.6.13.15.58.58 1.3 1.12.91.67 1.59 1.37 1.78 1.6.19.23.32.52.24.8-.08.28-.6.18-.6.18l-2.18-.12s-.32-.02-.55-.23c-.24-.22-.47-.66-.47-.66z"/>
              </svg>
            </div>
          </div>

          <div className="text-center mb-4 md:mb-6">
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">2025</p>
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">ООО "БЮРО 23"</p>
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">Все права защищены</p>
          </div>

          <div className="w-full h-px bg-white mb-4" />

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-center">
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
            <p className="font-['Unbounded'] text-[16px] text-[rgba(255,255,255,0.7)]">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </section>
  );
}
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
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="font-['Unbounded'] text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] text-black mb-6 md:mb-8">
          <p className="mb-2">Напишите</p>
          <p className="md:pl-20">если есть вопрос</p>
        </div>
        
        <div className="w-full max-w-xl h-px bg-black mb-12 md:mb-16" />
        
        <div className="flex justify-center mb-12 md:mb-20">
          <button className="bg-[#141414] px-12 md:px-16 py-3 md:py-4 rounded-md hover:bg-[#2a2a2a] transition-colors">
            <span className="font-['Unbounded'] text-[32px] md:text-[36px] xl:text-[40px] text-[rgba(255,255,255,0.8)]">
              Оставьте заявку
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#141414] w-full py-8 md:py-12 px-6 md:px-16">
          <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
              <div className="text-center md:text-left">
                <p className="font-['Unbounded'] text-[28px] md:text-[35px] text-white mb-2">+7 (928) 241-27-20</p>
                <p className="font-['Unbounded'] text-[28px] md:text-[35px] text-white">sales@burodsgn.ru</p>
              </div>
              
              <div className="text-center">
                <p className="font-['Unbounded'] text-[24px] md:text-[30px] text-white mb-2">
                  <span className="text-[30px] md:text-[36px]">К</span>
                  <span>раснодар, ул. Дальний пр., 11, корп. 1, этаж 2</span>
                </p>
                <p className="font-['Unbounded'] text-[20px] md:text-[26px] text-white">
                  Режим работы:<br />
                  Пн-Вс с 10:00 до 18:00
                </p>
              </div>

              <div className="text-center md:text-right md:flex md:flex-col md:items-end md:justify-end">
                <p className="font-['Unbounded'] text-white mb-1 text-[24px] md:text-[28px]">
                  BURO digital
                </p>
                <p className="font-['Unbounded'] text-white mb-1 text-[24px] md:text-[28px]">
                  BURO dsgn
                </p>
                <p className="font-['Unbounded'] text-white text-[24px] md:text-[28px]">
                  BURO crm
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-6 md:mb-8">
              {/* Telegram */}
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.803c-.14.625-.5.778-.9.485l-2.48-1.83-1.198.754c-.13.13-.24.24-.493.24l.177-2.51 4.59-4.15c.2-.18.035-.28-.31-.1l-5.68 3.58-2.45-.765c-.53-.165-.54-.53.11-.8l9.55-3.68c.44-.16.83-.08.5.3z"/>
                </svg>
              </div>
              {/* Instagram */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </div>
              {/* Pinterest */}
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </div>
              {/* WhatsApp */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              {/* VK */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg className="w-8 h-[33px]" fill="none" viewBox="0 0 32 33">
                  <g clipPath="url(#clip0_18_184)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.23344 2.25439C0 4.50879 0 8.13715 0 15.394V16.6768C0 23.9336 0 27.5619 2.23344 29.8164C4.46688 32.0708 8.06152 32.0708 15.2509 32.0708H16.5218C23.7112 32.0708 27.3058 32.0708 29.5393 29.8164C31.7727 27.5619 31.7727 23.9336 31.7727 16.6768V15.394C31.7727 8.13715 31.7727 4.50879 29.5393 2.25439C27.3058 0 23.7112 0 16.5218 0H15.2509C8.06152 0 4.46688 0 2.23344 2.25439ZM5.36172 9.75492C5.53382 18.0933 9.66426 23.1044 16.9058 23.1044H17.3162V18.3338C19.9772 18.6011 21.9893 20.5654 22.7969 23.1044H26.5567C25.5241 19.3093 22.8101 17.2114 21.1155 16.4096C22.8101 15.4208 25.193 13.0154 25.7623 9.75492H22.3466C21.6053 12.4008 19.4079 14.8061 17.3162 15.0332V9.75492H13.9005V19.002C11.7824 18.4675 9.10823 15.8751 8.98909 9.75492H5.36172Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_18_184">
                      <rect width="31.7727" height="32.0708" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="text-center mb-4 md:mb-6">
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">2028</p>
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">ООО "БЮРО 23"</p>
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">Все права защищены</p>
            </div>

            <div className="w-full h-px bg-white mb-4" />

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-center">
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">Юридическая информация</p>
              <p className="font-['Unbounded'] text-[22px] md:text-[26px] text-[rgba(255,255,255,0.7)]">Политика конфиденциальности</p>
            </div>
          </div>
      </div>
    </section>
  );
}
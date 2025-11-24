import React from "react";
import img202511240725411 from "figma:asset/8aa084b825b8cad5f81b02dabe80ba0e50769c75.png";
import img202511240730461 from "figma:asset/d2ee5035d9c68be8b818bdc5d742c74bf3c0ffe2.png";

export function Events() {
  return (
    <section id="events" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="font-['Unbounded'] text-[32px] md:text-[50px] lg:text-[60px] text-black mb-12 md:mb-16">
          <p>Нас можно встретить на мероприятиях и выставках</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Карточка 1 */}
          <div className="rounded-[10px] w-full h-[500px] md:h-[620px] relative overflow-hidden">
            <img alt="Выставка 1" className="w-full h-full object-cover absolute inset-0 z-0" src={img202511240725411} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#8B1A1A]/80 to-[#D97706]/80 z-10" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-20">
              <div className="font-['Unbounded'] text-white text-[25px] md:text-[27px]">XAOC</div>
              <div className="flex flex-col items-center">
                <div className="font-['Unbounded'] text-white text-[80px] md:text-[120px] font-bold mb-4" style={{ 
                  mixBlendMode: 'screen',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}>
                  50
                </div>
                <div className="font-['Unbounded'] text-white text-[27px] md:text-[35px] font-bold mb-6">ВЫСТАВКА-ПРОДАЖА</div>
                <div className="font-['Unbounded'] text-white text-[18px] md:text-[21px] space-y-2 text-center">
                  <p>50 художников • 50 работ</p>
                  <p>50 манифестов • 50 идей</p>
                  <p className="mt-4">15 НОЯБРЯ. ОТКРЫТИЕ. ВХОД БЕСПЛАТНЫЙ.</p>
                  <p>17-28 НОЯБРЯ. РАБОТА ПО БУДНЯМ С 10.00 ДО 17.00. ВХОД 350 РУБ.</p>
                  <p>25 НОЯБРЯ. ТЕХ. ПЕРЕРЫВ.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Карточка 2 */}
          <div className="rounded-[10px] w-full h-[500px] md:h-[620px] relative overflow-hidden">
            <img alt="Выставка 2" className="w-full h-full object-cover absolute inset-0 z-0" src={img202511240730461} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 to-[#0F4C0F]/80 z-10" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-20">
              <div className="font-['Unbounded'] text-white text-[25px] md:text-[27px]">XAOC</div>
              <div className="flex flex-col items-center">
                <div className="font-['Unbounded'] text-white text-[80px] md:text-[120px] font-bold mb-4" style={{ 
                  mixBlendMode: 'screen',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}>
                  50
                </div>
                <div className="font-['Unbounded'] text-white text-[27px] md:text-[35px] font-bold mb-6">ВЫСТАВКА-ПРОДАЖА</div>
                <div className="font-['Unbounded'] text-white text-[18px] md:text-[21px] space-y-2 text-center">
                  <p>50 художников • 50 работ</p>
                  <p>50 манифестов • 50 идей</p>
                  <p className="mt-4">15 НОЯБРЯ. ОТКРЫТИЕ. ВХОД БЕСПЛАТНЫЙ.</p>
                  <p>17-28 НОЯБРЯ. РАБОТА ПО БУДНЯМ С 10.00 ДО 17.00. ВХОД 350 РУБ.</p>
                  <p>25 НОЯБРЯ. ТЕХ. ПЕРЕРЫВ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import eventCard1 from "figma:asset/event-card-1.png";
import eventCard2 from "figma:asset/event-card-2.png";

export function Events() {
  return (
    <section id="events" className="bg-white w-full py-12 md:py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="font-['Unbounded'] text-[32px] md:text-[50px] lg:text-[60px] text-black mb-12 md:mb-16">
          <p>Нас можно встретить на мероприятиях и выставках</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Карточка 1 */}
          <div className="rounded-[10px] w-full overflow-hidden">
            <img alt="Выставка XAOC 1" className="w-full h-auto object-contain" src={eventCard1} />
          </div>
          
          {/* Карточка 2 */}
          <div className="rounded-[10px] w-full overflow-hidden">
            <img alt="Выставка XAOC 2" className="w-full h-auto object-contain" src={eventCard2} />
          </div>
        </div>
      </div>
    </section>
  );
}
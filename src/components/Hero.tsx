import svgPaths from "../imports/svg-c1loxia4yv";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Фиксированная кнопка меню */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 left-8 p-2 hover:bg-gray-100 rounded-md transition-colors z-50 bg-white"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-[#141414]" />
        ) : (
          <Menu className="w-6 h-6 text-[#141414]" />
        )}
      </button>

      {/* Навигационное меню */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex items-center justify-center">
          <nav className="flex flex-col gap-6 text-center">
            <a href="#hero" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Главная</a>
            <a href="#about" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>О мастерской</a>
            <a href="#horeca" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>HoReCa</a>
            <a href="#home" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Дом и офис</a>
            <a href="#events" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Мероприятия</a>
            <a href="#video" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Видео</a>
            <a href="#contacts" className="font-['Unbounded'] text-[27px] text-[#141414] hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Контакты</a>
          </nav>
        </div>
      )}

      <section id="hero" className="bg-white w-full min-h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Контейнер с логотипом */}
          <div className="w-full max-w-[874px] px-4 md:px-0 relative">
            <svg className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 874 470">
              <g id="Букавки">
                <g id="Буква Б">
                  <path clipRule="evenodd" d={svgPaths.p2943e980} fill="#141414" fillRule="evenodd" />
                  <path d={svgPaths.p119880} stroke="#141414" strokeOpacity="0.9" strokeWidth="6" />
                </g>
                <g id="Буква Ю порус">
                  <path clipRule="evenodd" d={svgPaths.p22670400} fill="#141414" fillRule="evenodd" />
                  <path d={svgPaths.p3c619a80} stroke="#141414" strokeOpacity="0.9" strokeWidth="6" />
                </g>
                <g id="Буква Р">
                  <path clipRule="evenodd" d={svgPaths.p35d9ba80} fill="#141414" fillRule="evenodd" />
                  <path d={svgPaths.p1d921400} stroke="#141414" strokeOpacity="0.9" strokeWidth="6" />
                </g>
                <g id="Буква О">
                  <path clipRule="evenodd" d={svgPaths.p1a900900} fill="#141414" fillRule="evenodd" />
                  <path d={svgPaths.p37f1c400} stroke="#141414" strokeOpacity="0.9" strokeWidth="6" />
                </g>
              </g>
            </svg>
            
            {/* dsgn позиционирован справа от буквы О, на уровне её нижней части */}
            <p className="font-['Unbounded'] text-[#141414] text-sm md:text-base absolute bottom-[10%] right-0 md:right-[-20px]">
              dsgn
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
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
        <div 
          className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center backdrop-blur-sm relative"
          onClick={() => setIsMenuOpen(false)}
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,1) 0%, transparent 55%),
              radial-gradient(circle at 80% 70%, rgba(240,240,255,0.98) 0%, transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(255,225,245,0.95) 0%, transparent 55%),
              radial-gradient(circle at 10% 80%, rgba(255,255,225,0.97) 0%, transparent 55%),
              radial-gradient(circle at 90% 20%, rgba(230,245,255,0.95) 0%, transparent 55%),
              linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,240,255,0.95) 50%, rgba(255,225,240,0.98) 100%)
            `,
            backgroundSize: '400% 400%, 300% 300%, 350% 350%, 250% 250%, 320% 320%, 200% 200%',
            animation: 'cloudGradient 15s ease-in-out infinite'
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
          <style>{`
            @keyframes cloudGradient {
              0% { 
                background-position: 0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%, 0% 50%;
              }
              25% { 
                background-position: 100% 30%, 0% 70%, 80% 20%, 50% 0%, 20% 80%, 50% 100%;
              }
              50% { 
                background-position: 50% 100%, 30% 0%, 100% 80%, 100% 50%, 0% 30%, 100% 0%;
              }
              75% { 
                background-position: 80% 50%, 60% 40%, 20% 100%, 30% 80%, 70% 20%, 0% 70%;
              }
              100% { 
                background-position: 0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%, 0% 50%;
              }
            }
          `}</style>
          <nav className="flex flex-col gap-8 text-center relative z-10" onClick={(e) => e.stopPropagation()}>
            <a href="#hero" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>Главная</a>
            <a href="#about" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>О нас</a>
            <a href="#horeca" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>HoReCa</a>
            <a href="#home" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>Дом и офис</a>
            <a href="#events" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>Мероприятия</a>
            <a href="#contacts" className="font-['Unbounded'] text-[70px] md:text-[85px] text-[#050505] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>Контакты</a>
          </nav>
        </div>
      )}

      <section id="hero" className="bg-white w-full min-h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Контейнер с логотипом */}
          <div className="w-full max-w-[874px] lg:max-w-[1200px] xl:max-w-[1400px] px-4 md:px-0 relative">
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
            
            {/* dsgn позиционирован справа от буквы О, на уровне её нижней части, но не внутри неё */}
            <p className="font-['Unbounded'] text-[#141414] text-[45px] md:text-[49px] absolute" style={{ bottom: '2%', right: '0%', transform: 'translateX(100%)', marginLeft: '10px' }}>
              dsgn
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
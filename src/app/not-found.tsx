import Link from "next/link";
import { svgPaths } from "@/utils/svgPaths";

export default function NotFound() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      <div className="relative w-[1440px] h-[1024px] mx-auto">
        <Link href="/" className="absolute left-[99px] top-[49px] size-[40px] bg-black rounded-[10px] flex items-center justify-center">
          <svg className="block size-full" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p24fc470} fill="white" />
          </svg>
        </Link>

        <nav className="absolute left-[374px] top-[32px] w-[692px] h-[57px] rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_6px_16px_rgba(0,0,0,0.12)] flex items-center justify-center gap-[48px] transition-transform duration-200 hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
          <Link href="/" className="font-unbounded t-h3 text-black">
            Главная
          </Link>
          <Link href="/#about" className="font-unbounded t-h3 text-black">
            О нас
          </Link>
          <Link href="/#projects" className="font-unbounded t-h3 text-black">
            Проекты
          </Link>
          <Link href="/#contacts" className="font-unbounded t-h3 text-black">
            Контакты
          </Link>
        </nav>

        <div className="absolute left-[33px] top-[156px] w-[1374px] h-[618px] flex items-center justify-center">
          <span className="font-unbounded text-[550px] leading-none text-black/90 tracking-tight select-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
            404
          </span>
        </div>

        <h1 className="absolute left-[256px] top-[743px] w-[928px] font-unbounded t-display leading-[1.24] text-black text-balance">
          Ой, кажется, мы заблудились.
        </h1>

        <p className="absolute left-[330px] top-[825px] w-[779px] font-unbounded t-h3 leading-[1.24] text-black/80 text-balance text-center">
          Давайте вернемся куда-нибудь в знакомое место.
        </p>

        <Link
          href="/"
          className="absolute left-[566px] top-[897px] w-[307px] h-[57px] rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_6px_16px_rgba(0,0,0,0.12)] flex items-center justify-center font-unbounded t-subtitle text-black transition-transform duration-200 hover:-translate-y-px hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
        >
          Обратно на главную
        </Link>
      </div>
    </main>
  );
}

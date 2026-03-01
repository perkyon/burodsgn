import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative w-full h-[1024px] overflow-hidden bg-white">
      <div className="relative w-[1440px] h-[1024px] mx-auto">
        <div className="absolute left-[402px] top-[153px] w-[637px] h-[637px] rounded-[40px] overflow-hidden">
          <Image src="/figma/notfound-bg.png" alt="404" fill className="object-cover" />
        </div>

        <nav className="absolute left-[501px] top-[49px] w-[439px] h-[57px] rounded-[20px] bg-white/70 backdrop-blur-xl border border-black/5 shadow-[0_4px_4px_rgba(0,0,0,0.6)] flex items-center gap-[45px] pl-[75px]">
          <img src="/figma/notfound-brandmark.svg" alt="" className="absolute left-[11px] top-[7px] size-[43px]" />
          <Link href="/#about" className="font-unbounded font-bold text-[20px] text-black/90">
            О нас
          </Link>
          <Link href="/#projects" className="font-unbounded font-bold text-[20px] text-black/90">
            Проекты
          </Link>
          <Link href="/#contacts" className="font-unbounded font-bold text-[20px] text-black/90">
            Контакты
          </Link>
        </nav>

        <div className="absolute left-[508px] top-[153px] w-[425px] h-[211px] flex items-center justify-center">
          <span className="font-unbounded text-[170px] leading-[1.24] text-black">
            404
          </span>
        </div>

        <p className="absolute left-[468px] top-[764px] w-[570px] font-unbounded text-[50px] leading-[1.21] text-black">
          Тут надо подумать......
        </p>
        <p className="absolute left-[403px] top-[837px] w-[634px] font-unbounded text-[25px] leading-[1.21] text-black">
          Давайте вернемся куда-нибудь в знакомое место
        </p>

        <Link
          href="/"
          className="absolute left-[554px] top-[906px] w-[332px] h-[57px] rounded-[20px] bg-white/70 backdrop-blur-xl border border-black/5 shadow-[0_4px_4px_rgba(0,0,0,0.6)] flex items-center justify-center font-unbounded font-bold text-[20px] text-black"
        >
          Обратно на главную
        </Link>
      </div>
    </main>
  );
}

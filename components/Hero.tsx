import BuroLogo from './BuroLogo';

export default function Hero() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1440px] flex-col items-center justify-center px-6 py-16 lg:min-h-[1024px]">
        <button
          className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/60 transition hover:border-black/50"
          aria-label="Меню"
        >
          <span className="sr-only">Открыть меню</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
            <rect width="27" height="2" rx="1" fill="#141414" />
            <rect y="6" width="27" height="2" rx="1" fill="#141414" />
            <rect y="12" width="27" height="2" rx="1" fill="#141414" />
          </svg>
        </button>

        <BuroLogo />

        <span className="absolute bottom-8 right-10 font-['Unbounded'] text-xs uppercase tracking-[0.5em] text-black">
          dsgn
        </span>
      </div>
    </section>
  );
}


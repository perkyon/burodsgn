import BuroLogo from './BuroLogo';

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-4 py-16">
        <button
          className="absolute left-8 top-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white/70 transition hover:border-black/50"
          aria-label="Меню"
        >
          <span className="sr-only">Открыть меню</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 27 14" fill="none">
            <rect width="27" height="2" rx="1" fill="#141414" />
            <rect y="6" width="27" height="2" rx="1" fill="#141414" />
            <rect y="12" width="27" height="2" rx="1" fill="#141414" />
          </svg>
        </button>

        <BuroLogo />

        <span className="absolute bottom-12 right-12 font-['Unbounded'] text-sm uppercase tracking-[0.6em] text-black">
          dsgn
        </span>
      </div>
    </section>
  );
}


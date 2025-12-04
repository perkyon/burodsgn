import BuroLogo from './BuroLogo';

export default function Hero() {
  return (
    <section className="bg-[#f2f2f2]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1340px] flex-col items-center justify-center px-6 py-16 lg:min-h-[1024px]">
        <button
          className="absolute left-10 top-12 flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white/70 backdrop-blur-sm transition hover:border-black/40"
          aria-label="Меню"
        >
          <span className="sr-only">Открыть меню</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 27 14" fill="none">
            <rect width="27" height="2" rx="1" fill="#141414" />
            <rect y="6" width="27" height="2" rx="1" fill="#141414" />
            <rect y="12" width="27" height="2" rx="1" fill="#141414" />
          </svg>
        </button>

        <div className="flex w-full flex-col items-center gap-10">
          <BuroLogo className="max-w-full" />
          <span className="font-['Unbounded'] text-[18px] uppercase tracking-[1.1em] text-black">
            dsgn
          </span>
        </div>
      </div>
    </section>
  );
}


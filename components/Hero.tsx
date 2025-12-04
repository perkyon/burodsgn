import BuroLogo from './BuroLogo';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 pb-20 pt-24">
      <button
        className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-black/40"
        aria-label="Меню"
      >
        <span className="sr-only">Открыть меню</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 27 14" fill="none">
          <rect width="27" height="2" rx="1" fill="#141414" />
          <rect y="6" width="27" height="2" rx="1" fill="#141414" />
          <rect y="12" width="27" height="2" rx="1" fill="#141414" />
        </svg>
      </button>

      <div className="flex w-full max-w-6xl flex-col items-center gap-8">
        <BuroLogo />
        <p className="text-center font-['Unbounded'] text-sm uppercase tracking-[0.4em] text-neutral-500">
          IN HOME · STUDIO · WORKSHOP
        </p>
      </div>
    </section>
  );
}


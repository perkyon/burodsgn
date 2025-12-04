const footerLinks = ['Юридическая информация', 'Пользовательское соглашение', 'Политика конфиденциальности'];

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-8 text-white sm:px-8">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-4 text-center font-['Unbounded'] text-[11px] uppercase tracking-[0.35em] text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          {footerLinks.map((item) => (
            <button key={item} className="transition hover:text-white">
              {item}
            </button>
          ))}
        </div>
        <p className="text-white/40">@ BURO DSGN · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}


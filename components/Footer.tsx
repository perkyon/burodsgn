export default function Footer() {
  return (
    <footer className="bg-black px-6 py-6 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 text-center text-xs font-['Unbounded'] uppercase tracking-[0.35em] text-white/60 md:flex-row md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="hover:text-white">Юридическая информация</button>
          <button className="hover:text-white">Пользовательское соглашение</button>
          <button className="hover:text-white">Политика конфиденциальности</button>
        </div>
        <div className="text-white/50">© {new Date().getFullYear()} Buro dsgn</div>
      </div>
    </footer>
  );
}


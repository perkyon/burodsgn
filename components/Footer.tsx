export default function Footer() {
  return (
    <footer className="bg-black px-6 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm font-['Unbounded'] text-white/60 md:flex-row md:text-left">
        <div>© {new Date().getFullYear()} BURO dsgn · ООО «БЮРО 23»</div>
        <div className="flex flex-wrap items-center justify-center gap-6 uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white">Пользовательское соглашение</a>
          <a href="#" className="hover:text-white">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}


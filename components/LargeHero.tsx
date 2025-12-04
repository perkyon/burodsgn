const tickerItems = ['IN HOME', 'РУКОЙ ДОМ', 'atelier', 'BURO dsgn'];

export default function LargeHero() {
  return (
    <section className="bg-neutral-900 py-8 text-white">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex min-w-full gap-10 whitespace-nowrap font-['Unbounded'] text-2xl">
          {tickerItems.map((item) => (
            <span key={item} className="uppercase tracking-[0.4em]">
              {item}
            </span>
          ))}
          {tickerItems.map((item) => (
            <span key={`${item}-duplicate`} className="uppercase tracking-[0.4em]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


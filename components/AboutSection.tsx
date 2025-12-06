const textBlocks = [
  {
    initial: 'М',
    body: 'ы не боимся брать сложные идеи. Каждому проекту уделяем одинаково много внимания — от концепции до последнего шва.',
  },
  {
    initial: 'Н',
    body: 'ам важно, чтобы вы получили именно то пространство, которое рисовали у себя в голове. Поэтому мы вовлекаем в процесс и показываем каждый шаг.',
  },
  {
    initial: 'К',
    body: 'аждое решение проверяем на практичность. Мы за честные материалы, аккуратный монтаж и мебель, которая служит долго.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-16">
        <div className="text-center">
          <p className="font-['Unbounded'] text-[clamp(32px,3.5vw,60px)] leading-[1.15] text-black">
            Мебельная мастерская где можно воплотить нестандартные решения
          </p>
          <div className="mx-auto mt-8 h-px w-full max-w-[1170px] bg-black" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-10">
            {textBlocks.map(({ initial, body }) => (
              <p
                key={initial}
                className="flex gap-4 font-['Unbounded'] text-[clamp(20px,2vw,28px)] leading-[1.25] text-black"
              >
                <span className="min-w-[70px] text-[clamp(40px,5vw,72px)] leading-none">{initial}</span>
                <span className="flex-1">{body}</span>
              </p>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-[32px] border border-black/50 bg-white shadow-[0px_40px_120px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                alt="Команда в мастерской"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-8 py-6 text-right">
                <p className="font-['Unbounded'] text-sm uppercase tracking-[0.45em] text-white/90">atelier buro</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
}


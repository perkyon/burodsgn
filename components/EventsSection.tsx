const eventCards = [
  {
    title: '50 × 50',
    meta: 'выставка-продажа',
    detail: '50 художников · 50 работ · 50 идей · 50 манифестов',
    schedule: '14–23 сентября · Краснодар · вход свободный',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'In Home pop-up',
    meta: 'инсталляция мебели',
    detail: 'Живые материалы и ручные техники отделки от команды BURO',
    schedule: '5–8 октября · Москва · пространство “Двор”',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-14">
        <div className="space-y-4 text-left">
          <p className="font-['Unbounded'] text-[clamp(30px,3vw,48px)] leading-[1.1] text-black">
            Нас можно встретить на мероприятиях и выставках
          </p>
          <div className="h-px w-[180px] bg-black" />
          <p className="font-['Unbounded'] text-sm uppercase tracking-[0.35em] text-neutral-500">
            мы показываем мебель и рассказываем про процессы
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {eventCards.map((event) => (
            <article
              key={event.title}
              className="flex flex-col gap-6 rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.1)]"
            >
              <div className="overflow-hidden rounded-[26px] border border-black/5">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-[380px] w-full object-cover transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <p className="font-['Unbounded'] text-[clamp(32px,3vw,56px)] uppercase tracking-[0.05em] text-black">
                  {event.title}
                </p>
                <p className="font-['Unbounded'] text-lg text-neutral-600">{event.meta}</p>
                <p className="font-['Unbounded'] text-base text-black/80">{event.detail}</p>
                <p className="font-['Unbounded'] text-xs uppercase tracking-[0.4em] text-neutral-500">
                  {event.schedule}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


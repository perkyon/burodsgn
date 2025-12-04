const eventCards = [
  {
    title: '50',
    subtitle: 'Выставка-продажа',
    description: '50 художников · 50 работ · 50 манифестов · 50 идей',
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: '50',
    subtitle: 'Выставка-продажа',
    description: '15 ноября открытие. Вход бесплатный. 17-26 ноября работа по будням с 10:00 до 17:00',
    image: 'https://images.unsplash.com/photo-1432836431433-925d3cc0a5cd?auto=format&fit=crop&w=700&q=80',
  },
];

export default function EventsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div>
          <p className="font-['Unbounded'] text-[34px] font-normal text-black">Нас можно встретить</p>
          <p className="font-['Unbounded'] text-[34px] font-normal text-black">на мероприятиях и выставках</p>
          <div className="mt-4 h-px w-32 bg-black" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {eventCards.map((event) => (
            <article
              key={event.title + event.description}
              className="flex flex-col gap-4 rounded-[28px] border border-black/10 bg-white p-8 shadow-[0px_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="overflow-hidden rounded-[22px] border border-black/5">
                <img src={event.image} alt={event.subtitle} className="h-[360px] w-full object-cover" />
              </div>
              <div className="space-y-2">
                <p className="font-['Unbounded'] text-6xl font-semibold text-black">{event.title}</p>
                <p className="font-['Unbounded'] text-lg text-black">{event.subtitle}</p>
                <p className="font-['Unbounded'] text-sm uppercase tracking-[0.25em] text-neutral-600">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


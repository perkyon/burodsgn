const eventCards = [
  {
    title: '50 × 50',
    subtitle: 'Выставка-продажа',
    description: '50 художников · 50 работ · 50 идей',
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'In Home Pop-up',
    subtitle: 'Инсталляция мебели',
    description: 'Живые материалы и ручные техники отделки',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=900&q=80',
  },
];

export default function EventsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div>
          <p className="font-['Unbounded'] text-3xl font-medium text-neutral-900">Нас можно встретить</p>
          <p className="font-['Unbounded'] text-3xl font-medium text-neutral-900">на мероприятиях и выставках</p>
          <div className="mt-4 h-px w-32 bg-neutral-900" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {eventCards.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5"
            >
              <img src={event.image} alt={event.title} className="h-96 w-full object-cover" />
              <div className="space-y-3 p-8">
                <p className="font-['Unbounded'] text-4xl font-semibold text-neutral-900">{event.title}</p>
                <p className="font-['Unbounded'] text-lg text-neutral-600">{event.subtitle}</p>
                <p className="font-['Unbounded'] text-sm uppercase tracking-[0.3em] text-neutral-500">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


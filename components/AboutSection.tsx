const paragraphs = [
  'Мы не боимся сложных задач и любим идеи, которые требуют индивидуального подхода. Каждая мебельная система проектируется командой инженеров и ремесленников внутри студии.',
  'Нам важно вовлекать клиента: мы показываем материалы, тестируем эргономику и не боимся пересобирать проект, пока он не станет идеальным.',
  'Работаем с массивом, металлом, бетоном и композитами, совмещая промышленное производство и ручные техники отделки.',
];

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div>
            <p className="font-['Unbounded'] text-3xl font-medium leading-snug text-neutral-900 md:text-4xl">
              Мебельная мастерская где можно воплотить нестандартные решения
            </p>
            <div className="mt-6 h-px w-32 bg-neutral-900" />
          </div>

          <div className="space-y-6 font-['Unbounded'] text-base leading-relaxed text-neutral-700">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-2xl shadow-neutral-900/5">
            <img
              src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80"
              alt="Команда в мастерской"
              className="h-full w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


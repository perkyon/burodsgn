const aboutParagraphs = [
  'Мы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный',
  'Нам важно помочь вам реализовать любые идеи которые вы себе только можете представить и реализовывать их, для нас каждый проект особенный',
  'Которые вы себе только можете представить идеи и реализовывать их, для нас каждый проект особенный',
];

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="text-center">
          <p className="font-['Unbounded'] text-[42px] font-normal leading-[1.1] text-black">
            Мебельная мастерская где можно воплотить нестандартные решения
          </p>
          <div className="mt-6 flex w-full justify-center">
            <span className="h-px w-full max-w-[1170px] bg-black" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            {aboutParagraphs.map((text, index) => (
              <p key={text} className="font-['Unbounded'] text-[28px] leading-[1.2] text-black">
                <span className="text-[36px]">{['М', 'Н', 'К'][index]}</span>
                <span className="pl-1 text-[26px]">{text.replace(/^[МНК]/, '')}</span>
              </p>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[18px] border border-black/60 shadow-[0px_25px_60px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
                alt="Команда в мастерской"
                className="h-full w-full max-w-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


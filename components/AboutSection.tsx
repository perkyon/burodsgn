export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Заголовок по центру */}
        <div className="mb-12 text-center">
          <p className="font-['Unbounded'] text-[40px] font-normal leading-[100%] text-black">
            Мебельная мастерская где можно воплотить нестандартные решения
          </p>
          {/* Линия под заголовком */}
          <div className="mt-6 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1171" height="1" viewBox="0 0 1171 1" fill="none" className="w-full max-w-[1171px]">
              <path d="M0 0.5H1171.5" stroke="black" />
            </svg>
          </div>
        </div>

        {/* Двухколоночный layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Левая колонка - текст */}
          <div className="flex-1 space-y-6">
            <p className="font-['Unbounded'] text-[35px] font-normal leading-[100%] text-black">
              <span className="text-[35px]">М</span>
              <span className="text-[30px]">ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный</span>
            </p>
            <p className="font-['Unbounded'] text-[35px] font-normal leading-[100%] text-black">
              <span className="text-[35px]">Н</span>
              <span className="text-[30px]">ам важно помочь вам реализовать любые идеи которые вы себе только можете предстваить идеи и реализовывать их, для нас каждый проект особенный</span>
            </p>
            <p className="font-['Unbounded'] text-[35px] font-normal leading-[100%] text-black">
              <span className="text-[35px]">К</span>
              <span className="text-[30px]">оторые вы себе только можете предстваить идеи и реализовывать их, для нас каждый проект особенный</span>
            </p>
          </div>

          {/* Правая колонка - изображение */}
          <div className="flex flex-1 items-center justify-center">
            <div className="overflow-hidden rounded-[10px] border border-black">
              <img
                src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80"
                alt="Команда в мастерской"
                className="h-full w-full max-w-[562px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


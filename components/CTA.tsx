import BuroLogo from './BuroLogo';

const socials = ['Telegram', 'Instagram', 'Pinterest', 'WhatsApp', 'VK'];

export default function CTA() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <BuroLogo theme="light" className="items-start" />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="font-['Unbounded'] text-3xl leading-tight">Напишите если есть вопрос</p>
            <p className="font-['Unbounded'] text-base text-white/70">
              Обсудим идею, подберём материалы и предложим рабочий сценарий производства, чтобы ваш проект быстро стал
              реальностью.
            </p>
            <button className="w-max rounded-full border border-white px-12 py-3 font-['Unbounded'] text-sm uppercase tracking-[0.4em] transition hover:bg-white hover:text-black">
              Оставьте заявку
            </button>
          </div>
        </div>

        <div className="grid gap-6 text-sm font-['Unbounded'] text-white/80 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-white/50">Телефон</p>
            <a href="tel:+79181234567" className="text-white hover:opacity-70">
              +7 (918) 123-45-67
            </a>
          </div>
          <div>
            <p className="text-white/50">Почта</p>
            <a href="mailto:sales@burodsgn.ru" className="text-white hover:opacity-70">
              sales@burodsgn.ru
            </a>
          </div>
          <div>
            <p className="text-white/50">Адрес</p>
            <p>Краснодар, ул. Примерная, д. 10, офис 5</p>
          </div>
          <div>
            <p className="text-white/50">График</p>
            <p>Пн-Пт c 9:00 до 18:00</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((name) => (
            <button
              key={name}
              className="rounded-full border border-white/40 px-4 py-2 font-['Unbounded'] text-xs uppercase tracking-[0.4em] text-white/80 transition hover:border-white hover:text-white"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


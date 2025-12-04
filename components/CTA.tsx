import BuroLogo from './BuroLogo';

export default function CTA() {
  return (
    <section className="bg-neutral-900 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1">
          <BuroLogo theme="light" className="items-start lg:items-center" />
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div>
            <p className="font-['Unbounded'] text-3xl font-medium leading-tight">Напишите, если есть вопрос</p>
            <p className="mt-4 font-['Unbounded'] text-base text-white/70">
              Обсудим идею, подберём материалы и предложим рабочий сценарий производства.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 font-['Unbounded'] text-lg">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Телефон</p>
              <a href="tel:+79181234567" className="text-white hover:opacity-70">
                +7 (918) 123-45-67
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Почта</p>
              <a href="mailto:sales@burodsgn.ru" className="text-white hover:opacity-70">
                sales@burodsgn.ru
              </a>
            </div>
          </div>

          <div>
            <button className="rounded-full border border-white px-10 py-3 font-['Unbounded'] text-base uppercase tracking-[0.4em] transition hover:bg-white hover:text-neutral-900">
              Оставьте заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


import BuroLogo from './BuroLogo';

const socials = [
  { label: 'Telegram', href: 'https://t.me/burodsgn' },
  { label: 'WhatsApp', href: 'https://wa.me/79282412720' },
  { label: 'Pinterest', href: 'https://pinterest.com/burodsgn' },
  { label: 'VK', href: 'https://vk.com/burodsgn' },
  { label: 'Instagram', href: 'https://www.instagram.com/buro.house' },
];

export default function CTA() {
  return (
    <section id="contacts" className="bg-black px-4 py-28 text-white sm:px-8">
      <div className="mx-auto w-full max-w-[1340px] space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <BuroLogo theme="light" className="items-start" />
            <p className="font-['Unbounded'] text-[clamp(30px,3vw,42px)] leading-[1.15] text-white">
              Напишите, если есть вопрос
            </p>
            <p className="max-w-xl font-['Unbounded'] text-base text-white/75">
              Обсудим идею, предложим материалы и спланируем производство, чтобы ваш проект выглядел так же аккуратно,
              как на чертежах.
            </p>
            <button className="rounded-full border border-white px-12 py-3 font-['Unbounded'] text-xs uppercase tracking-[0.5em] transition hover:bg-white hover:text-black">
              оставить заявку
            </button>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-6 font-['Unbounded'] text-sm uppercase tracking-[0.35em] text-white/60">
              <div>
                <p>телефон</p>
                <a href="tel:+79181234567" className="text-white/90 hover:text-white">
                  +7 (918) 123-45-67
                </a>
              </div>
              <div>
                <p>почта</p>
                <a href="mailto:sales@burodsgn.ru" className="text-white/90 hover:text-white">
                  sales@burodsgn.ru
                </a>
              </div>
              <div>
                <p>адрес</p>
                <span className="normal-case tracking-normal text-white">
                  Краснодар, Дальний проезд 11к1 2 этаж
                </span>
              </div>
              <div>
                <p>график</p>
                <span className="normal-case tracking-normal text-white">Пн—Пт · 09:00 — 18:00</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-4 py-2 font-['Unbounded'] text-[11px] uppercase tracking-[0.45em] text-white/80 transition hover:border-white hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


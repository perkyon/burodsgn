"use client";

import { type ReactNode, useState } from "react";
import { svgPaths } from "@/utils/svgPaths";
import { RequestModal } from "@/components/RequestModal";

type FooterProps = {
  ctaContent?: ReactNode;
};

const columns = [
  { title: "О компании", items: ["О нас", "Проекты", "Мероприятия", "История бренда"] },
  {
    title: "Юридически",
    items: [
      { label: "Пользовательское соглашение", href: "/user-agreement" },
      { label: "Политика конфиденциальности", href: "/privacy-policy" },
    ],
  },
  { title: "Партнерам", items: ["Дизайнерам", "Производителям"] },
  { title: "Продукты", items: ["Buro | Digital", "Buro | DSGN", "Buro | CRM"] },
];

const socialLinks = {
  telegram: "https://t.me/+ms6fdSYzjhxkYTky",
  instagram: "https://www.instagram.com/buro.house?igsh=MXNudnNnamlob2c1NQ==",
  pinterest: "https://pinterest.com",
  whatsapp: "https://wa.me/79181234567",
  vk: "https://vk.com"
} as const;

const SOCIAL_SCALE = 0.7;
const SOCIAL_SIZE = 40 * SOCIAL_SCALE;
const SOCIAL_WIDTH = 291 * SOCIAL_SCALE;
const SOCIAL_HEIGHT = 41 * SOCIAL_SCALE;

const socialHitAreas = [
  { label: "Telegram", href: socialLinks.telegram, left: 0 },
  { label: "Instagram", href: socialLinks.instagram, left: 62.8293 },
  { label: "Pinterest", href: socialLinks.pinterest, left: 125.659 },
  { label: "WhatsApp", href: socialLinks.whatsapp, left: 188.489 },
  { label: "VK", href: socialLinks.vk, left: 251.318 }
] as const;

export const Footer = ({ ctaContent }: FooterProps) => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <footer id="contacts" className="relative w-full h-[1100px] bg-white overflow-hidden">
      <div className="relative w-[1440px] h-full mx-auto overflow-hidden rounded-t-[40px]" data-name="Контакты">
        <div className="absolute inset-0 bg-[#141414] rounded-[40px]" />
        <div className="relative z-10 h-full px-[100px] pt-[70px] pb-[40px] flex flex-col">
          <div className="w-[1360px] h-[820px] self-center rounded-[40px] bg-white flex flex-col items-center justify-center text-center px-[120px]">
            <div className="w-full max-w-[900px]">
              {ctaContent ?? (
                <>
                  <h2 className="font-unbounded font-medium t-h2 text-black mb-2">
                    Мебель можно делать по-другому.
                  </h2>
                  <p className="font-unbounded font-normal t-h3 text-black/80">
                    С учётом пространства, задачи и использования.
                  </p>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsRequestOpen(true)}
              className="mt-[50px] px-8 py-3 rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] font-unbounded t-body text-black"
            >
              Оставить заявку
            </button>
          </div>

          <div className="mt-[36px] h-px w-full bg-white/20" />

          <div className="mt-[28px] grid grid-cols-[360px_repeat(4,1fr)] items-start gap-x-[60px]">
            <div className="w-[360px] text-left">
              <h3 className="font-unbounded font-medium t-subtitle text-white mb-6 text-left">Свяжитесь с нами</h3>
              <div className="flex flex-col gap-4 text-white">
                <a href="tel:+79181234567" className="flex items-center gap-3 hover:text-[#FFEEE2] transition-colors">
                  <span className="flex size-[28px] items-center justify-center rounded-[8px] bg-white text-[#141414]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1l-2.2 2.22Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="font-unbounded font-normal t-body-sm">+7 (918) 123-45-67</span>
                </a>
                <a href="mailto:sales@burodsgn.ru" className="flex items-center gap-3 hover:text-white/80 transition-colors">
                  <span className="flex size-[28px] items-center justify-center rounded-[8px] bg-white text-[#141414]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-unbounded font-normal t-body-sm text-white/70">sales@burodsgn.ru</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex size-[28px] items-center justify-center rounded-[8px] bg-white text-[#141414]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-7.33 7-12a7 7 0 1 0-14 0c0 4.67 7 12 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="font-unbounded font-normal t-body-sm text-white/70">г. Краснодар ул. Дальняя 8к1</span>
                </div>
          </div>
        </div>

            {columns.map((column) => (
              <div key={column.title} className="min-w-[150px] text-left">
                <p className="font-unbounded font-medium t-subtitle-sm text-white mb-4 text-left">{column.title}</p>
                  <div className="flex flex-col gap-3">
                    {column.items.map((item) => {
                      if (typeof item === "string") {
                        return (
                          <a
                            key={item}
                            href="#"
                            className="font-unbounded font-normal t-body-sm text-white/70 hover:text-white transition-colors"
                          >
                            {item}
                          </a>
                        );
                      }

                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="font-unbounded font-normal t-body-sm text-white/70 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
        </div>
            ))}
        </div>

          <div className="mt-auto flex items-center justify-between pt-[12px]">
            <div className="flex items-center gap-4">
              <div className="size-[28px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <rect fill="white" height="40" rx="10" width="40" />
            <path clipRule="evenodd" d={svgPaths.p24fc470} fill="#141414" fillRule="evenodd" />
          </svg>
        </div>
              <p className="font-unbounded font-normal t-micro text-white/40 mb-0 mt-[12px]">© 2025 Buro dsgn. Все права защищены.</p>
            </div>

            <div
              className="relative"
              style={{ width: `${SOCIAL_WIDTH}px`, height: `${SOCIAL_HEIGHT}px` }}
            >
              <img src="/assets/socials.svg" alt="Socials" className="block size-full" />
              {socialHitAreas.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="absolute top-0"
                  style={{
                    left: `${item.left * SOCIAL_SCALE}px`,
                    width: `${SOCIAL_SIZE}px`,
                    height: `${SOCIAL_SIZE}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isRequestOpen && <RequestModal onClose={() => setIsRequestOpen(false)} />}
    </footer>
  );
};

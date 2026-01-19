"use client";

import { useEffect } from "react";

type RequestModalProps = {
  onClose: () => void;
};

export const RequestModal = ({ onClose }: RequestModalProps) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="relative w-[520px] rounded-[24px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-5 top-4 text-[28px] text-black/50 hover:text-black transition-colors"
        >
          ×
        </button>

        <h3 className="font-unbounded font-medium t-h3 text-black mb-2">Оставьте заявку</h3>
        <p className="font-unbounded t-body-sm text-black/60 mb-6">Выберите удобный способ связи</p>

        <div className="flex flex-col gap-4">
          <a
            href="https://t.me/+ms6fdSYzjhxkYTky"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-[14px] bg-[#0A84C6] p-4 text-white shadow-[0_10px_20px_rgba(10,132,198,0.25)] transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(10,132,198,0.35)]"
          >
            <span className="flex size-[44px] items-center justify-center rounded-full bg-white/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="m10 13 11-10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="font-unbounded font-medium t-body">Telegram</p>
              <p className="font-unbounded t-caption text-white/80">Быстрый ответ в мессенджере</p>
            </div>
          </a>

          <a
            href="https://wa.me/79181234567"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-[14px] bg-[#22C55E] p-4 text-white shadow-[0_10px_20px_rgba(34,197,94,0.25)] transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(34,197,94,0.35)]"
          >
            <span className="flex size-[44px] items-center justify-center rounded-full bg-white/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M20 12a8 8 0 1 0-14.6 4.5L4 20l3.7-1.3A8 8 0 0 0 20 12Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9.8 9.4c.2-.5.5-.6 1-.2l1.1 1c.4.3.4.6.2 1l-.5.8c.7 1 1.5 1.8 2.5 2.4l.8-.5c.4-.2.7-.2 1 .2l1 1.1c.4.5.3.8-.2 1-1.2.6-2.8.3-4.6-.9-1.8-1.2-3.2-2.8-3.8-4.2-.5-1.2-.6-2.2-.1-2.9Z" fill="white"/>
              </svg>
            </span>
            <div>
              <p className="font-unbounded font-medium t-body">WhatsApp</p>
              <p className="font-unbounded t-caption text-white/90">+7 (918) 123-45-67</p>
            </div>
          </a>

          <a
            href="mailto:sales@burodsgn.ru"
            className="flex items-center gap-4 rounded-[14px] bg-[#141414] p-4 text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.4)]"
          >
            <span className="flex size-[44px] items-center justify-center rounded-full bg-white/15">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="font-unbounded font-medium t-body">Email</p>
              <p className="font-unbounded t-caption text-white/80">sales@burodsgn.ru</p>
            </div>
          </a>
        </div>

        <div className="mt-6 border-t border-black/10 pt-4">
          <p className="font-unbounded t-caption text-black/60 mb-2">Страницы сайта</p>
          <div className="flex flex-col gap-2">
            <a
              href="/user-agreement"
              className="font-unbounded t-caption text-black/70 hover:text-black transition-colors"
            >
              Пользовательское соглашение
            </a>
            <a
              href="/privacy-policy"
              className="font-unbounded t-caption text-black/70 hover:text-black transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

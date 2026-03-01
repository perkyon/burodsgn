"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const About = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "end 0.75"]
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const paragraphs = useMemo(
    () => [
      "Мы не делаем мебель ради мебели.",
      "Мы решаем задачи так, чтобы этим было удобно пользоваться каждый день.",
      "Мы работаем с корпусной и отдельно стоящей мебелью, а также делаем решения для бизнеса — офисов, кофеен, и HoReCa.",
      "Опыт для нас — не количество лет. Это умение брать ответственность и доводить решение до результата.",
      "Мы сталкивались с нестандартными планировками, ограниченными бюджетами, ошибками ремонта и жёсткими дедлайнами — и умеем собирать решения так, чтобы они работали, а не просто выглядели красиво."
    ],
    []
  );

  const wordMatrix = useMemo(() => paragraphs.map((text) => text.split(" ")), [paragraphs]);
  const totalWords = useMemo(
    () => wordMatrix.reduce((sum, words) => sum + words.length, 0),
    [wordMatrix]
  );
  let wordIndex = 0;

  return (
    <section id="about" className="relative w-full bg-white stacked-card mt-[80px]">
      <div className="relative w-full max-w-[1440px] h-auto md:h-[940px] mx-auto overflow-hidden rounded-[24px] md:rounded-[40px] px-4 md:px-0" data-name="About us">
        <div className="relative md:absolute left-0 md:left-[100px] top-0 w-full md:w-[1234px] h-[48px] md:h-[58px] rounded-full bg-black z-20 flex items-center px-[20px] md:px-[24px]">
          <h2 className="text-white font-bold text-[30px]">О нас</h2>
        </div>

        <div className="relative w-full h-[360px] md:absolute md:h-[687px] md:left-[100px] md:top-[120px] md:w-[608px] z-10 shadow-2xl rounded-[24px] md:rounded-[40px] mt-[80px] md:mt-0 overflow-hidden">
          <Image
            src="/assets/about_img.png"
            alt="About Buro DSGN"
            fill
            className="object-cover pointer-events-none"
          />
        </div>

        <div
          ref={textRef}
          className="relative font-unbounded text-black w-full md:absolute md:h-[687px] md:left-[calc(50%+12px)] md:top-[120px] md:w-[608px] z-10 flex flex-col gap-4 mt-6 md:mt-0"
        >
          {wordMatrix.map((words, paragraphIndex) => (
            <p key={paragraphIndex} className="font-normal t-h3-lg">
              {words.map((word, idx) => {
                const currentIndex = wordIndex;
                wordIndex += 1;
                const reveal = Math.min(
                  Math.max(progress * totalWords - currentIndex, 0),
                  1
                );
                return (
                  <span
                    key={`${paragraphIndex}-${idx}`}
                    className="inline-block will-change-transform mr-[6px]"
                    style={{
                      opacity: reveal,
                      transform: `translateY(${(1 - reveal) * 8}px)`
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

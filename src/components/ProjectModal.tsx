"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export type Project = {
  id: number;
  name: string;
  image: string;
  location?: string;
  gallery?: string[];
  details?: {
    lead: string;
    story: string;
    highlights: string[];
    materials: string;
    duration: string;
    budget: string;
    challenges: string;
    result: string;
  };
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % gallery.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length));
      }
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, gallery.length]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-[1440px] max-h-[96vh] overflow-y-auto scrollbar-hide rounded-[40px] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-[24px] top-[24px] z-10 flex size-[40px] items-center justify-center rounded-full bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
        >
          ×
        </button>

        <div className="px-[100px] pt-[60px] pb-[40px] text-center">
          <h3 className="font-unbounded font-medium t-h3 text-black">{project.name}</h3>
          {project.location && (
            <p className="font-unbounded font-normal t-subtitle-sm text-black/70">{project.location}</p>
          )}
        </div>

        <div className="px-[100px] pb-[80px]">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {gallery.map((src, index) => (
              <div key={`${project.id}-${index}`} className="shrink-0 snap-start">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative h-[550px] w-[397px] overflow-hidden rounded-[40px]"
                  aria-label="Открыть фото"
                >
                  <Image src={src} alt={project.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
                <p className="mt-4 text-center font-unbounded font-normal t-subtitle text-black">
                  {project.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Footer
          ctaContent={
            <div className="text-left">
              <p className="font-unbounded font-medium t-h3-lg text-black mb-2">
                {project.name}
              </p>
              <p className="font-unbounded t-body text-black/60 mb-6">
                {project.details?.lead ?? "Короткое описание проекта по запросу."}
              </p>

              <div className="grid grid-cols-[1.4fr_0.9fr] gap-8">
                <div className="space-y-4">
                  <p className="font-unbounded t-body-sm leading-relaxed text-black/75">
                    {project.details?.story ?? "Подробности и контекст — по запросу."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.details?.highlights ?? []).map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-black/5 text-black/70 t-caption uppercase tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="font-unbounded t-body-sm leading-relaxed text-black/70">
                    {project.details?.result ?? "Результат и эффект — по запросу."}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-[18px] border border-black/10 bg-white px-4 py-3">
                    <p className="font-unbounded t-caption text-black/50 uppercase tracking-wide">Срок</p>
                    <p className="font-unbounded t-body text-black">{project.details?.duration ?? "по запросу"}</p>
                  </div>
                  <div className="rounded-[18px] border border-black/10 bg-white px-4 py-3">
                    <p className="font-unbounded t-caption text-black/50 uppercase tracking-wide">Бюджет</p>
                    <p className="font-unbounded t-body text-black">{project.details?.budget ?? "по запросу"}</p>
                  </div>
                  <div className="rounded-[18px] border border-black/10 bg-white px-4 py-3">
                    <p className="font-unbounded t-caption text-black/50 uppercase tracking-wide">Материалы</p>
                    <p className="font-unbounded t-body-sm text-black">{project.details?.materials ?? "по запросу"}</p>
                  </div>
                  <div className="rounded-[18px] border border-black/10 bg-white px-4 py-3">
                    <p className="font-unbounded t-caption text-black/50 uppercase tracking-wide">Сложности</p>
                    <p className="font-unbounded t-body-sm text-black">{project.details?.challenges ?? "по запросу"}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-110 flex items-center justify-center bg-black/70 backdrop-blur-[2px]"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded-[24px] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Закрыть фото"
              onClick={() => setActiveIndex(null)}
              className="absolute -right-3 -top-3 z-10 flex size-[36px] items-center justify-center rounded-full bg-white text-black shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
            >
              ×
            </button>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length))}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex size-[44px] items-center justify-center rounded-full bg-white/90 text-black shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % gallery.length))}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex size-[44px] items-center justify-center rounded-full bg-white/90 text-black shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
            >
              ›
            </button>
            <div className="relative h-[80vh] w-[80vw] max-h-[80vh] max-w-[80vw] overflow-hidden rounded-[20px]">
              <Image
                src={gallery[activeIndex]}
                alt={project.name}
                fill
                className="object-contain transition-transform duration-300 ease-out"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

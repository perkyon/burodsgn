'use client';

interface ProjectCard {
  src: string;
  alt: string;
}

interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  projects: ProjectCard[];
}

export default function ProjectsSection({ title, subtitle, description, projects }: ProjectsSectionProps) {
  return (
    <section className="bg-white px-4 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-[1340px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-['Unbounded'] text-[clamp(34px,3vw,48px)] leading-tight text-black">{title}</p>
            <div className="mt-4 h-px w-[180px] bg-black" />
          </div>
          <div className="max-w-xl space-y-2 text-black">
            <p className="font-['Unbounded'] text-[15px] leading-relaxed">{subtitle}</p>
            {description ? (
              <p className="font-['Unbounded'] text-xs uppercase tracking-[0.35em] text-neutral-600">{description}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-black" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={`${project.alt}-${index}`}
              className="group relative overflow-hidden rounded-[30px] border border-black/15 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="flex items-center justify-between border-t border-black/10 px-6 py-5">
                <p className="font-['Unbounded'] text-xs uppercase tracking-[0.35em] text-neutral-600">{project.alt}</p>
                <span className="text-sm text-neutral-400">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
          </div>
    </section>
  );
}


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
    <section className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-['Unbounded'] text-[36px] font-normal leading-tight text-black">{title}</p>
            <div className="mt-3 h-px w-36 bg-black" />
          </div>
          <div className="max-w-xl space-y-1 text-right md:text-left">
            <p className="font-['Unbounded'] text-base text-black">{subtitle}</p>
            {description ? <p className="font-['Unbounded'] text-sm text-neutral-600">{description}</p> : null}
          </div>
        </div>

        <div className="h-px w-full bg-black" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.alt}
              className="overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0px_25px_70px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              <img src={project.src} alt={project.alt} className="h-80 w-full object-cover" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


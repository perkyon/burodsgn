'use client';

interface ProjectCard {
  src: string;
  alt: string;
}

interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  projects: ProjectCard[];
}

export default function ProjectsSection({ title, subtitle, projects }: ProjectsSectionProps) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-['Unbounded'] text-[32px] font-normal leading-tight text-black">{title}</p>
            <div className="mt-3 h-px w-[180px] bg-black" />
          </div>
          <p className="max-w-xl font-['Unbounded'] text-base text-black">{subtitle}</p>
        </div>
        <div className="h-px w-full bg-black" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.alt}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              <img src={project.src} alt={project.alt} className="h-80 w-full object-cover" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


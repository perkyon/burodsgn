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
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div>
          <p className="font-['Unbounded'] text-3xl font-medium text-neutral-900">{title}</p>
          <div className="mt-2 h-px w-24 bg-neutral-900" />
          <p className="mt-4 font-['Unbounded'] text-lg text-neutral-600">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.alt}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg shadow-neutral-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={project.src} alt={project.alt} className="h-80 w-full object-cover" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


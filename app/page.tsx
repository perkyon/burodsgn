import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventsSection from '@/components/EventsSection';
import LargeHero from '@/components/LargeHero';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const horecaProjects = [
  {
    src: 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?auto=format&fit=crop&w=700&q=80',
    alt: 'Лаунж-зона ресторана',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    alt: 'Барная зона',
  },
  {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80',
    alt: 'Зал кафе',
  },
  {
    src: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=700&q=80',
    alt: 'Теплая зона ожидания',
  },
];

const homeOfficeProjects = [
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=700&q=80',
    alt: 'Кухня-столовая',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80',
    alt: 'Спальная комната',
  },
  {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80',
    alt: 'Домашний офис',
  },
  {
    src: 'https://images.unsplash.com/photo-1616594039964-2757eb469f15?auto=format&fit=crop&w=700&q=80',
    alt: 'Минималистичная кухня',
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutSection />
      <ProjectsSection
        title="Проекты HoReCa"
        subtitle="Проектирование и изготовление мебели для HoReCa, офиса и дома"
        projects={horecaProjects}
      />
      <ProjectsSection
        title="Проекты дом и офис"
        subtitle="Проектирование и изготовление мебели для HoReCa, офиса и дома"
        projects={homeOfficeProjects}
      />
      <EventsSection />
      <LargeHero />
      <CTA />
      <Footer />
    </main>
  );
}

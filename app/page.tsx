import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventsSection from '@/components/EventsSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const horecaProjects = [
  {
    src: 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?auto=format&fit=crop&w=700&q=80',
    alt: 'Лаунж-зона ресторана',
  },
  {
    src: 'https://images.unsplash.com/photo-1481883814866-f6e972dd8916?auto=format&fit=crop&w=700&q=80',
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

const surfProjects = [
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    alt: 'Зона посадки Surf Coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1452960962994-acf9430b3bf9?auto=format&fit=crop&w=700&q=80',
    alt: 'Барная стойка кофейни',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=700&q=80',
    alt: 'Декор пространства',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
    alt: 'Интерьер с зеркалами',
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
        title="Surf Coffee X Fest"
        subtitle="Проектирование и изготовление мебели для HoReCa, офиса и дома"
        description="Создаем пространства, которые работают на атмосферу бренда и сервис"
        projects={surfProjects}
      />
      <EventsSection />
      <CTA />
      <Footer />
    </main>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventsSection from '@/components/EventsSection';
import LargeHero from '@/components/LargeHero';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const horecaImages = Array(7).fill(''); // 7 изображений для HoReCa
  const homeOfficeImages = Array(7).fill(''); // 7 изображений для дом и офис

  return (
    <main className="bg-white">
      <Hero />
      <AboutSection />
      <ProjectsSection
        title="Проекты HoReCa"
        subtitle="Проектирование и изготовление мебели для HoReCa, офиса и дома"
        images={horecaImages}
        projectType="horeca"
      />
      <ProjectsSection
        title="Проекты дом и офис"
        subtitle="Проектирование и изготовление мебели для HoReCa, офиса и дома"
        images={homeOfficeImages}
        projectType="home-office"
      />
      <EventsSection />
      <LargeHero />
      <CTA />
      <Footer />
    </main>
  );
}

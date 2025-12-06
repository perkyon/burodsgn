'use client';

import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { HomeOffice } from './components/HomeOffice';
import { Events } from './components/Events';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { smoothScrollToElement, SCROLL_DURATION } from './utils/smoothScroll';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Переопределяем стандартную прокрутку на плавную с контролем скорости
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          smoothScrollToElement(href, SCROLL_DURATION);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <ScrollToTop />
      
      <main className="overflow-x-hidden">
        <section id="home">
          <Hero onMenuClick={() => setIsMenuOpen(true)} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="homeoffice">
          <HomeOffice />
        </section>
        
        <section id="events">
          <Events />
        </section>
        
        <section id="video">
          <VideoSection />
        </section>
        
        <section id="contacts">
          <Footer />
        </section>
      </main>
    </div>
  );
}
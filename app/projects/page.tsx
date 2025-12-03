'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Временные данные - будут заменены на реальные изображения
  const projectImages = Array(7).fill('');

  useEffect(() => {
    const imageParam = searchParams.get('image');
    if (imageParam) {
      const index = parseInt(imageParam, 10);
      if (!isNaN(index) && index >= 0 && index < projectImages.length) {
        setCurrentImageIndex(index);
      }
    }
  }, [searchParams, projectImages.length]);

  const nextImage = () => {
    const next = (currentImageIndex + 1) % projectImages.length;
    setCurrentImageIndex(next);
    router.push(`/projects?image=${next}`);
  };

  const prevImage = () => {
    const prev = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    setCurrentImageIndex(prev);
    router.push(`/projects?image=${prev}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header с меню и кнопкой назад */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-black hover:opacity-70 transition-opacity">
            ← Назад
          </Link>
          <button className="w-[27px] h-[14px] flex flex-col justify-between" aria-label="Меню">
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* Галерея изображений - полноэкранная */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {projectImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full bg-gray-200">
                {/* Изображение будет здесь */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Навигация внизу */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          <button
            onClick={prevImage}
            className="text-black hover:opacity-70 transition-opacity text-xl font-medium"
            aria-label="Предыдущее изображение"
          >
            &lt;
          </button>
          <span className="text-black font-medium min-w-[60px] text-center">
            {currentImageIndex + 1} / {projectImages.length}
          </span>
          <button
            onClick={nextImage}
            className="text-black hover:opacity-70 transition-opacity text-xl font-medium"
            aria-label="Следующее изображение"
          >
            &gt;
          </button>
        </div>

        {/* Стрелки навигации по бокам */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-black text-xl transition-all"
          aria-label="Предыдущее изображение"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-black text-xl transition-all"
          aria-label="Следующее изображение"
        >
          &gt;
        </button>
      </section>
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black">Загрузка...</div>
      </main>
    }>
      <ProjectsContent />
    </Suspense>
  );
}


'use client';

import { useEffect, useRef } from 'react';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.log('Video autoplay failed:', err);
      });

      // Гарантируем циклическое воспроизведение
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch((err) => {
          console.log('Video replay failed:', err);
        });
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="relative w-full bg-white flex items-center justify-center overflow-hidden h-screen" data-name="Desktop - 6">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'translateY(40px)' }}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
        src="/figma/prod-buro.mp4"
        onError={(e) => {
          console.error('Video error:', e);
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully');
        }}
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}

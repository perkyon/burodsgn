'use client';

import { useEffect, useRef } from 'react';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className="relative w-full bg-[#282828] flex items-center justify-center overflow-hidden py-12 lg:py-20 min-h-[600px]" data-name="Desktop - 6">
      <div className="w-full max-w-[1340px] px-4 lg:px-8">
        <div className="relative w-full aspect-square max-w-[800px] mx-auto rounded-[30px] overflow-hidden bg-[#282828] shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
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
      </div>
    </div>
  );
}

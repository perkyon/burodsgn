export function VideoSection() {
  return (
    <div className="relative w-full bg-[#282828] flex items-center justify-center overflow-hidden py-12 lg:py-20" data-name="Desktop - 6">
      <div className="w-full max-w-[1340px] px-4 lg:px-8">
        <div className="relative w-full aspect-square max-w-[800px] mx-auto rounded-[30px] overflow-hidden bg-[#282828] shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
          >
            <source src="/figma/prod-buro.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </div>
  );
}

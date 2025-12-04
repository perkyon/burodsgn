export function VideoSection() {
  return (
    <div className="relative w-full bg-[#282828] flex items-center justify-center overflow-hidden py-12 lg:py-20" data-name="Desktop - 6">
      <div className="w-full max-w-[1340px] px-4 lg:px-8">
        <div className="relative w-full aspect-square max-w-[800px] mx-auto rounded-[30px] overflow-hidden bg-[#282828] shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect width='800' height='800' fill='%23282828'/%3E%3C/svg%3E"
          >
            <source src="/figma/prod-buro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export function VideoSection() {
  return (
    <div className="relative min-h-screen w-full bg-[#282828] flex items-center justify-center overflow-hidden" data-name="Desktop - 6">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23282828'/%3E%3C/svg%3E"
      >
        <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
        {/* Replace YOUR_VIDEO_URL_HERE.mp4 with your actual video URL */}
      </video>
      
      {/* Overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

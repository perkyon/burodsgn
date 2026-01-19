import Image from "next/image";

const images = [
  "/assets/gallery1.png",
  "/assets/gallery2.png",
  "/assets/gallery3.png",
  "/assets/gallery4.png",
  "/assets/gallery5.png",
  "/assets/gallery6.png",
  "/assets/gallery7.png",
  "/assets/gallery8.png",
  "/assets/gallery9.png",
  "/assets/gallery10.png",
  "/assets/gallery11.png",
  "/assets/gallery12.png",
];

export const Gallery = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-40 flex flex-col items-center">
      <div className="text-center mb-40">
        <h2 className="t-h1 font-normal text-[#141414] mb-4">
          Мебель можно делать по-другому.
        </h2>
        <p className="t-h3-lg font-normal text-[#141414] opacity-80">
          С учётом пространства, задачи и использования.
        </p>
        
        <button className="mt-12 px-10 py-4 bg-[#141414] text-white rounded-[20px] t-subtitle font-normal hover:scale-105 transition-transform">
          Оставить заявку
        </button>
      </div>
    </section>
  );
};


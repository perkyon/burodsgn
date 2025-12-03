export default function AboutSection() {
  return (
    <section className="w-[1280px] h-[832px] relative bg-white overflow-hidden mx-auto">
      <div className="w-[612px] h-[528px] left-[640px] top-[152px] absolute rounded-[10px] border border-black" />
      <div className="left-[68px] top-[97px] absolute text-black text-4xl font-normal font-['Unbounded'] leading-10">
        Мебельная мастерская где<br/>         можно воплотить нестандартные решения
      </div>
      <div className="w-[488px] h-[546px] left-[68px] top-[270px] absolute">
        <span className="text-black text-4xl font-normal font-['Unbounded'] leading-9">М</span>
        <span className="text-black text-3xl font-normal font-['Unbounded'] leading-8">ы не боимся брать сложные идеи и реализовывать их, для нас каждый проект особенный<br/><br/></span>
        <span className="text-black text-4xl font-normal font-['Unbounded'] leading-9">Н</span>
        <span className="text-black text-3xl font-normal font-['Unbounded'] leading-8">ам важно помочь вам реализовать любые идеи которые вы себе только можете предстваить идеи и реализовывать их, для нас каждый проект особенный</span>
      </div>
      <div className="w-[1171.50px] h-0 left-[128px] top-[204px] absolute outline outline-1 outline-offset-[-0.50px] outline-black" />
      <img className="w-[562px] h-[614px] left-[640px] top-[218px] absolute rounded-[10px]" src="https://placehold.co/562x614" alt="Мебельная мастерская" />
    </section>
  );
}


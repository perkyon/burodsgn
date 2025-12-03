export default function EventsSection() {
  return (
    <section className="w-[1280px] h-[832px] relative bg-white overflow-hidden mx-auto">
      <div className="w-[1001px] h-0 left-0 top-[61px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
      <div className="left-[37px] top-[-40px] absolute text-black text-4xl font-normal font-['Unbounded'] leading-10"><br/>             на мероприятиях и выставках</div>
      <img className="w-[517px] h-[620px] left-[102px] top-[106px] absolute rounded-[10px]" src="https://placehold.co/517x620" alt="Выставка 1" />
      <img className="w-[517px] h-[620px] left-[660px] top-[106px] absolute rounded-[10px]" src="https://placehold.co/517x620" alt="Выставка 2" />
      <div className="w-60 h-7 left-[523px] top-[781px] absolute bg-black" />
      <div className="w-60 h-7 left-[244px] top-[781px] absolute bg-black" />
      <div className="w-60 h-7 left-[802px] top-[781px] absolute bg-black" />
      <div className="w-60 h-7 left-[1081px] top-[781px] absolute bg-black" />
      <div className="w-60 h-7 left-[-35px] top-[781px] absolute bg-black" />
    </section>
  );
}


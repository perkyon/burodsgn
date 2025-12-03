import BuroLogo from './BuroLogo';

export default function Hero() {
  return (
    <section className="w-[1280px] h-[832px] relative bg-white overflow-hidden mx-auto">
      <button className="left-[37px] top-[31px] absolute" style={{ width: '27px', height: '14px', flexShrink: 0 }} aria-label="Меню">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
          <rect width="27" height="2" rx="1" fill="#141414"/>
          <rect y="6" width="27" height="2" rx="1" fill="#141414"/>
          <rect y="12" width="27" height="2" rx="1" fill="#141414"/>
        </svg>
      </button>
      <BuroLogo />
    </section>
  );
}


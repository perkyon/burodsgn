'use client';

import Link from 'next/link';

interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  images: string[];
  projectType?: string;
}

export default function ProjectsSection({ title, subtitle, images, projectType = 'horeca' }: ProjectsSectionProps) {

  return (
    <section className="w-[1280px] h-[832px] relative bg-white overflow-hidden mx-auto">
      {title === "Проекты HoReCa" ? (
        <>
          <div className="left-[33px] top-[54px] absolute text-center text-neutral-900 text-4xl font-normal font-['Unbounded']">
            П<span>роекты</span> H<span>o</span>R<span>e</span>C<span>a</span>
          </div>
          <Link href={`/projects?type=${projectType}&image=0`} className="w-96 h-[550px] left-[33px] top-[183px] absolute rounded-[10px] cursor-pointer">
            <img className="w-full h-full rounded-[10px]" src="https://placehold.co/413x550" alt="Проект 1" />
          </Link>
          <div className="left-[568px] top-[88px] absolute text-black text-2xl font-normal font-['Unbounded'] leading-6">
            Проектирование и изготовление <br/>         мебели для HoReCa, офиса и дома
          </div>
          <Link href={`/projects?type=${projectType}&image=1`} className="w-96 h-[550px] left-[966px] top-[183px] absolute rounded-[10px] cursor-pointer">
            <img className="w-full h-full rounded-[10px]" src="https://placehold.co/413x550" alt="Проект 2" />
          </Link>
          <div className="left-[650px] top-[805px] absolute text-black text-2xl font-normal font-['Unbounded'] leading-6">
            Проектирование и изготовление 
          </div>
        </>
      ) : (
        <>
          <div className="left-[33px] top-[23px] absolute text-center text-neutral-900 text-4xl font-normal font-['Unbounded']">Проекты дом и офис</div>
          <div className="w-[597px] h-0 left-[-18px] top-[102px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
          <div className="left-[660px] top-[-28px] absolute text-black text-2xl font-normal font-['Unbounded'] leading-6"><br/>         мебели для HoReCa, офиса и дома</div>
          <Link href={`/projects?type=${projectType}&image=0`} className="w-96 h-[550px] left-[33px] top-[141px] absolute rounded-[10px] cursor-pointer">
            <img className="w-full h-full rounded-[10px]" src="https://placehold.co/413x550" alt="Проект 1" />
          </Link>
          <div className="left-[42px] top-[790px] absolute text-black text-4xl font-normal font-['Unbounded'] leading-10">Нас можно встретить </div>
        </>
      )}
    </section>
  );
}


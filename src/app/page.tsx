import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HomeOffice } from "@/components/HomeOffice";
import { HoReCa } from "@/components/HoReCa";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";

import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><HoReCa /></Reveal>
      <Reveal><HomeOffice /></Reveal>
      <Reveal><Events /></Reveal>
      <Reveal><Footer /></Reveal>
    </main>
  );
}

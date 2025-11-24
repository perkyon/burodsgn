import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsHoreca } from './components/ProjectsHoreca';
import { ProjectsHome } from './components/ProjectsHome';
import { Events } from './components/Events';
import { Video } from './components/Video';
import { Contacts } from './components/Contacts';
import { ScrollLogo } from './components/ScrollLogo';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <ProjectsHoreca />
      <ProjectsHome />
      <Events />
      <Video />
      <Contacts />
      <ScrollLogo />
    </div>
  );
}

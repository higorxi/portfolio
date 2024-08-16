import { AboutMe } from '@/components/component/about-me';
import { Career } from '@/components/component/career';
import { Contact } from '@/components/component/contact';
import { Footer } from '@/components/component/footer';
import { Header } from '@/components/component/header';
import { Project } from '@/components/component/project';
import Marquee from 'react-fast-marquee';
import { MarqueeTextOne } from '@/components/component/MarqueeTextOne';
import { MarqueeTextTwo } from '@/components/component/MarqueeTextTwo';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <section id="inicio" className="gradient-background">
          <AboutMe />
        </section>
        <section id="sobre" className="gradient-background-reverse">
          <Career />
        </section>
        <Marquee className="marquee">
          <MarqueeTextOne />
          <br />
          <MarqueeTextTwo />
        </Marquee>
        <section id="projetos" className="gradient-background">
          <Project />
        </section>
        <section id="contato" className="gradient-background-reverse">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

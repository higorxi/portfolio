import { AboutMe } from "@/components/component/about-me";
import { Career } from "@/components/component/career";
import { Contact } from "@/components/component/contact";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { Project } from "@/components/component/project";
import { Skills } from "@/components/component/skills";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
   <>
    <Header/>
    <AboutMe/>   
    <Career/>
    <Marquee
      style={{
        background: "#f0f0f0", 
        color: "#333", 
        fontSize: "1.2em", 
        fontWeight: "bold", 
        padding: "10px 20px", 
        height: '3.1rem'
      }}
    >
      Capacitando a inovação por meio de código e criatividade.
    </Marquee>
    <Project/>
    <Contact/>
    <Footer/>
   </>
  );
}

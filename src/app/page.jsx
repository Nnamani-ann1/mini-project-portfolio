import Image from "next/image";
import Header from "./components/Header";
import AllProjects from "./components/AllProjects";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ProjectCard from "./components/ProjectCard";


export default function Home() {
  return (
   <div>
    <Header name="Nnamani Ann" />
    <Services />
    <Contact />
   
 
    <About />
   
   </div>
  );
}

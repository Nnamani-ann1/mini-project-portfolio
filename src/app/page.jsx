import Image from "next/image";
import Header from "./components/Header";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";
import Services from "./components/Services";



export default function Home() {
  return (
    <div>
      <Header name="Nnamani Ann" />
      <AllProjects />
      <Services />
      <Contact />
     

    </div>
  );
}

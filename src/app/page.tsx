import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Projects from "./_components/projects";



  
const About = () => {
  return (
    <div>About</div>
  );
}

const Footer = () => {
  return (
    <div>Footer</div>
  );
}

export default async function Home() {
  return (
    <main className="mx-60">
      <header>
        <Navbar />
        <Hero />
      </header> 
      <Projects />
      <About />
      <Footer />
      <div>work in progress...</div>
    </main>
  );
}




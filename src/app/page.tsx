import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import { api } from "~/trpc/server";
import ProjectCard from "./_components/project-card";
  
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
  const projects = await api.project.getAll.query();
  return (
    <main className="mx-60">
      <header>
        <Navbar />
        <Hero />
      </header> 
      <Projects projects={projects}/>
      <About />
      <Footer />
      <div>work in progress...</div>
    </main>
  );
}




import Header from "./_components/header";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import { api } from "~/trpc/server";

const About = () => {
  return <div>About</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

export default async function Home() {
  const projects = await api.project.getAll.query();
  return (
    <main>
      <Header />
      <Projects projects={projects} />
      <About />
      <Footer />
      <div>work in progress...</div>
    </main>
  );
}

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
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
      <section className="flex h-screen flex-col justify-center">
        <Header />
        <Hero />
      </section>
      <Projects projects={projects} />
      <About />
      <Footer />
      <div>work in progress...</div>
    </main>
  );
}

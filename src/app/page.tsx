import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import { api } from "~/trpc/server";
import Contact from "./_components/Contact";
import Container from "./_components/ui/container";

const About = () => {
  return (
    <section className="py-8">
      <Container>
        <h1 className="text-5xl text-orange-400">About</h1>
      </Container>
    </section>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

export default async function Home() {
  const projects = await api.project.getAll.query();
  return (
    <main>
      <section className="flex h-screen flex-col">
        <Header />
        <Hero />
      </section>
      <Projects projects={projects} />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

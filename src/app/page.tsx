import Header from "./_components/Header";
import Hero, { Stack } from "./_components/Hero";
import Projects from "./_components/Projects";
import { api } from "~/trpc/server";
import Contact from "./_components/Contact";
import Container from "./_components/ui/container";

const About = () => {
  const stacks = [
    { name: "Front-End" },
    { name: "UI/UX" },
    { name: "Back-End" },
  ];
  return (
    <section className="py-8">
      <Container>
        <h1 className="text-5xl text-orange-400">About</h1>
        <div>
          <h1 className="my-8 text-4xl">Technologies</h1>
          <p className="">
            Building beatiful things, A robust backend for a modern UI.
          </p>
          <div className="flex gap-6">
            {stacks.map((stack) => (
              <Stack key={stack.name} name={stack.name} />
            ))}
          </div>
          <div>
            <h1 className="my-8 text-4xl">My Journey</h1>
            <p>
              Passion for Building Tech, From coding robots to making beautiful
              and modern web apps, I have seen it all
            </p>
          </div>
        </div>
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

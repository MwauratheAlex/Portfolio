import Header from "./_components/Header";
import Hero, { Stack } from "./_components/Hero";
import Projects from "./_components/Projects";
import { api } from "~/trpc/server";
import Contact from "./_components/Contact";
import Container from "./_components/ui/container";
import SectionHeading from "./_components/ui/sectionHeading";

const About = () => {
  return (
    <section className="py-8" id="about">
      <Container>
        <SectionHeading title="About" />
        <div>
          <h1 className="my-8 text-4xl">My Journey</h1>
          <p>
            Passion for Building Tech. From writing software to run robots, to
            making beautiful and modern web apps, I have seen it all.
          </p>
        </div>
      </Container>
    </section>
  );
};

const Technologies = () => {
  const stacks = [
    { name: "Front-End" },
    { name: "UI/UX" },
    { name: "Back-End" },
  ];
  return (
    <section className="py-8" id="technologies">
      <Container>
        <div className="my-8 flex flex-col gap-6">
          <SectionHeading title="Technologies" />
          <p className="">
            Building beatiful things, A robust backend for a modern UI.
          </p>
        </div>

        <div className="flex gap-6">
          {stacks.map((stack) => (
            <Stack key={stack.name} name={stack.name} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="bg-black py-8">
      <Container>
        <div className="flex justify-between">
          <p>Made with love by: mwaura mbugua</p>
          <p>{2024}</p>
        </div>
      </Container>
    </section>
  );
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
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}

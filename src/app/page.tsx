import Header, { SocialMedia } from "./_components/Header";
import Hero, { Stack } from "./_components/Hero";
import Projects from "./_components/Projects";
import { api } from "~/trpc/server";
import Contact from "./_components/Contact";
import Container from "./_components/ui/container";
import SectionHeading from "./_components/ui/sectionHeading";
import { CarouselComponent } from "./_components/Carousel";

const About = () => {
  const about = [
    {
      heading: "2016",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2017",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2018",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2019",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2020",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2021",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2022",
      text: `Graduated from the Alliance High School, Kenya`,
    },
    {
      heading: "2023",
      text: `Graduated from the Alliance High School, Kenya`,
    },
  ];
  return (
    <section className="py-8" id="about">
      <Container>
        <SectionHeading title="About" />
        <div className="mt-4 rounded-lg border text-center">
          <h1 className="my-4 text-2xl font-semibold">My Journey</h1>
          <p>
            Passion for Building Tech. From writing software to run robots, to
            making beautiful and modern web apps, I have seen it all.
          </p>
          <div className="px-8 py-8">
            <CarouselComponent items={about} />
          </div>
        </div>
        <div className="mt-4 rounded-lg border text-center">
          <h1 className="my-8 text-2xl font-semibold">Accomplishments</h1>
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
    {
      name: "Front-End",
      description: `
        Buiding your imagination.
        Experience with React and NextJS.
      `,
    },
    {
      name: "UI/UX",
      description: `
        Bringing your ideas to life.
        Experience with Figma.
      `,
    },
    {
      name: "Back-End",
      description: `
        Robust bussiness logic driver for a modern UI.
        Experience with Node and SQL.
      `,
    },
  ];
  return (
    <section className="py-8" id="technologies">
      <Container>
        <div className="my-8 flex flex-col gap-6 text-center">
          <SectionHeading title="Technologies" />
          <p className="">
            Building beatiful things, A robust backend for a modern UI.
          </p>
        </div>

        <div className="flex justify-center gap-6 border">
          {stacks.map((stack) => (
            <div className="w-1/3 border" key={stack.name}>
              <Stack name={stack.name}>
                <p className="">{stack.description.split(".")[0]}</p>
                <p className="">{stack.description.split(".")[1]}</p>
              </Stack>
            </div>
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
        <div className="flex justify-between ">
          <p className="my-auto">Made with love by: mwaura mbugua</p>
          <p className="my-auto">&copy; {new Date().getFullYear()}</p>
          <SocialMedia className="flex gap-8" />
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

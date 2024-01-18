import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import { api } from "~/trpc/server";
import Container from "./_components/ui/container";

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
      <section className="flex h-screen flex-col">
        <Header />
        <Hero />
      </section>
      <Projects projects={projects} />
      <About />
      <Footer />
      <Container>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          delectus saepe alias excepturi quod itaque earum inventore ad est
          veritatis doloribus molestias, error adipisci dolorem quaerat, aut
          voluptates dolorum ex.
        </div>
      </Container>
    </main>
  );
}

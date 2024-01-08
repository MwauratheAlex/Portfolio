import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div>
        <ul className="flex gap-4">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li><a href="">Git</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">X</a></li>
        </ul>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1>Welcome to Mwaura's Porfolio</h1>
        <h2>Fullstack Developer</h2>
        <p>For all your developer and engineering needs.</p>
      </div>
      <div>
        Image
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div>About</div>
  );
}

const Projects = () => {
  return (
    <div>Projects</div>
  );
}

const Footer = () => {
  return (
    <div>Footer</div>
  );
}

export default async function Home() {
  return (
    <main className="mx-48">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <div>work in progress...</div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

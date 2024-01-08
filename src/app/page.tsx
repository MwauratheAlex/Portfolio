import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

const Navbar = () => {
  return (
    <div>Navbar</div>
  );
};

const Hero = () => {
  return (
    <div>Hero</div>
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
    <main className="">
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

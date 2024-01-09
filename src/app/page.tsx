import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";


const Projects = () => {
  return (
    <div>Projects</div>
    );
  }
  
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
  return (
    <main className="mx-60">
      <header>
        <Navbar />
        <Hero />
      </header> 
      <Projects />
      <About />
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

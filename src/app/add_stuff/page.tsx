import { api } from "~/trpc/server";
import { CreateTag } from "../_components/CreateTag";
import TagView from "../_components/TagView";
import ProjectView from "../_components/ProjectView";
import CreateProject from "../_components/CreateProject";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex w-96 flex-col items-center justify-center">
          <p className="mb-10 font-semibold">Please sign in to continue</p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <div className="w-[50%] bg-stone-900 px-20 shadow-xl shadow-slate-800">
        <div className="flex items-center justify-between">
          <h1 className="py-4 text-3xl font-medium">Manage your data</h1>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
        <div className="mb-8">
          <Crud />
        </div>
      </div>
    </section>
  );
}

async function Crud() {
  const tags = await api.tag.getAll.query();
  const projects = await api.project.getAll.query();
  return (
    <div className="w-full">
      <div className="">
        <h2 className="py-2 text-2xl font-medium">Manage Tags</h2>
        <h3 className="py-2 text-xl font-medium">All Tags</h3>
        {!tags || (tags.length === 0 && <p>No tags have been added yet.</p>)}
        {tags && tags.length !== 0 && (
          <ol>
            {tags.map((tag) => (
              <li key={tag.id}>
                <TagView tag={tag} />
              </li>
            ))}
          </ol>
        )}
        <h3 className="py-2 text-xl font-medium">Add Tags</h3>
        <CreateTag />
      </div>
      <div className="mt-8">
        <h2 className="py-2 text-2xl font-medium">Manage Projects</h2>
        <h3 className="py-2 text-xl font-medium">All Projects</h3>
        {projects && projects.length !== 0 && (
          <ol>
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectView project={project} tags={tags} />
              </li>
            ))}
          </ol>
        )}
        <CreateProject tags={tags} />
      </div>
    </div>
  );
}

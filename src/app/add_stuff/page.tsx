import { api } from "~/trpc/server";
import { CreateProject } from "../_components/create-project";
import { CreateTag } from "../_components/create-tag";
import TagView from "../_components/tagview";



export default async function Home() {
    return (
      <section className="flex flex-col items-center">
        <div className="w-[50%] px-20 bg-stone-900 shadow-xl shadow-slate-800">
          <h1 className="text-3xl font-medium py-4">Manage your data</h1>
          <div className="mb-8">
            <Crud />
          </div>
        </div>
      </section>
    );
  }

  async function Crud() {
    const tags = await api.tag.getAll.query();
    return (
      <div className="w-full" >
        <div className="">
          <h2 className="text-2xl font-medium py-2">Manage Tags</h2>
          <h3 className="text-xl font-medium py-2">All Tags</h3>
          {!tags || tags.length === 0 &&  <p>No tags have been added yet.</p>}
          {tags && tags.length !== 0 && (<ol>
            {tags.map((tag) =><TagView tag={tag} />)}
          </ol>)}
          <h3 className="text-xl font-medium py-2">Add Tags</h3>
          <CreateTag />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium py-2">Manage Projects</h2>
          <h3 className="text-xl font-medium py-2">All Projects</h3>
          <h3 className="text-xl font-medium py-2">Add Projects</h3>
          <CreateProject tags={tags} />
        </div>
      </div>
    );
  }



import { api } from "~/trpc/server";
import { CreateProject } from "../_components/create-project";
import { CreateTag } from "../_components/create-tag";

export default async function Home() {
    return (
      <section className="flex flex-col items-center">
        <div>
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
      <div>
        <div className="w-[800px]">
          <h2 className="text-2xl font-medium py-2">Manage Tags</h2>
          <h3 className="text-xl font-medium py-2">All Tags</h3>
          {!tags || tags.length === 0 &&  <p>No tags have been added yet.</p>}
          {tags && tags.length !== 0 && (<ol>
            {tags.map((tag) =><li key={tag.id}>{tag.name}</li>)}
          </ol>)}
          <h3 className="text-xl font-medium py-2">Add Tags</h3>
          <CreateTag />
        </div>
        <div className="w-[800px] mt-8">
          <h2 className="text-2xl font-medium py-2">Manage Projects</h2>
          <h3 className="text-xl font-medium py-2">All Projects</h3>
          <h3 className="text-xl font-medium py-2">Add Projects</h3>
          <CreateProject {...tags} />
        </div>
      </div>
    );
  }


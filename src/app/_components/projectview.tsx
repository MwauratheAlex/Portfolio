"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { CreateProject } from "./create-project";

   
type Project = {
    id: string;
    title: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    description: string | null;
    image_url: string | null;
    git_url: string | null;
    demo_url: string | null;
  };

const ProjectView = (props: {project: Project}) => {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  
  const deleteProject = api.project.delete.useMutation({
      onSuccess: () => {
          router.refresh();
      }
  });
  
  const handleDelete = () => {
      deleteProject.mutate({id: props.project.id})
  }

  const handleEdit = () => {
    // router.push(`/projects/${props.project.id}/edit`)
    setEditing(!editing);
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <input type="text"
          className="w-full rounded-full px-4 py-2 text-black"
          disabled={true}
          value={props.project.title ?? ""}
      />
      <div className="flex gap-8">
        <button
            className="bg-cyan-500 px-4 py-2 rounded-md"
            onClick={handleEdit}>
                {false ? "Save" : "Edit"}
        </button>
        <button 
            className="bg-red-500 px-4 py-2 rounded-md"
            onClick={handleDelete}
        >
            delete
          </button>
      </div>
      {editing && (
        <div className="col-span-2">
          <CreateProject project={props.project} />
        </div>
      )}
      
    </div>
  );
}

export default ProjectView;
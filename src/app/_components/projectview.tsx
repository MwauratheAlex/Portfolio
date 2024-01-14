"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { ProjectForm } from "./project-form";
type Inputs = {
  title: string
  description: string
  imageUrl: string
  gitUrl: string
  demoUrl: string
  tags: string[]
}
   
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
  const updateProject = api.project.update.useMutation({
    onSuccess: () => router.refresh(),
  })
  const deleteProject = api.project.delete.useMutation({
      onSuccess: () => {
          router.refresh();
      }
  });
  
  const handleDelete = () => {
      deleteProject.mutate({id: props.project.id})
  }

  const handleSubmit = (data: Inputs) => {
    setEditing(!editing)
    updateProject.mutate({id: props?.project?.id || "", ...data})
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
            onClick={() => setEditing(!editing)}>
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
          <ProjectForm project={props.project} handleSubmit={handleSubmit} loading={updateProject.isLoading} />
        </div>
      )}
      
    </div>
  );
}

export default ProjectView;
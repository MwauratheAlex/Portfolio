"use client";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

   
type Project = {
    id: string;
    title: string | null;
  };

const ProjectView = (props: {project: Project}) => {
  const router = useRouter();
  
  const deleteProject = api.project.delete.useMutation({
      onSuccess: () => {
          router.refresh();
      }
  });
  
  const handleDelete = () => {
      deleteProject.mutate({id: props.project.id})
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
            className="bg-red-500 px-4 py-2 rounded-md"
            onClick={handleDelete}
        >
            delete
          </button>
      </div>
    </div>
  );
}

export default ProjectView;
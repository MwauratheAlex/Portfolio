"use client"
import { ProjectForm } from "./project-form";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

type tag = {
    id: string;
    name: string | null;
  }

  type Inputs = {
    title: string
    description: string
    imageUrl: string
    gitUrl: string
    demoUrl: string
    tags: string[]
  }

const CreateProject = (props: { tags: tag[]}) => {
    const router = useRouter();
    const createProject = api.project.create.useMutation({
        onSuccess: () => {
          router.refresh();
        },
      });
    const handleSubmit = (data: Inputs) => {
        createProject.mutate(data);
    }
    return (
        <>
            <h3 className="text-xl font-medium py-2">Add Projects</h3>
            <ProjectForm tags={props.tags} handleSubmit={handleSubmit} loading={createProject.isLoading}/>
        </>
    )
}

export default CreateProject;
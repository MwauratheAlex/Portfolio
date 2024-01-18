"use client";
import { ProjectForm } from "./ProjectForm";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import type { ProjectFormInput } from "../types";

type tag = {
  id: string;
  name: string | null;
};

const CreateProject = (props: { tags: tag[] }) => {
  const router = useRouter();
  const createProject = api.project.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const handleSubmit = (data: ProjectFormInput) => {
    createProject.mutate(data);
  };
  return (
    <>
      <h3 className="py-2 text-xl font-medium">Add Projects</h3>
      <ProjectForm
        tags={props.tags}
        handleSubmit={handleSubmit}
        loading={createProject.isLoading}
      />
    </>
  );
};

export default CreateProject;

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { ProjectForm } from "./project-form";
import type { ProjectFormInput } from "../types";

type tag = {
  id: string;
  name: string | null;
};

type Project = {
  id: string;
  title: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  description: string | null;
  image_url: string | null;
  git_url: string | null;
  demo_url: string | null;
  projectsToTags: object;
};

const ProjectView = (props: { project: Project; tags: tag[] }) => {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const updateProject = api.project.update.useMutation({
    onSuccess: () => router.refresh(),
  });
  const deleteProject = api.project.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleDelete = () => {
    deleteProject.mutate({ id: props.project.id });
  };

  const handleSubmit = (data: ProjectFormInput) => {
    setEditing(!editing);
    updateProject.mutate({ id: props?.project?.id || "", ...data });
  };
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      <input
        type="text"
        className="w-full rounded-full px-4 py-2 text-black"
        disabled={true}
        value={props.project.title ?? ""}
      />
      <div className="flex gap-8">
        <button
          className="rounded-md bg-cyan-500 px-4 py-2"
          onClick={() => setEditing(!editing)}
        >
          {false ? "Save" : "Edit"}
        </button>
        <button
          className="rounded-md bg-red-500 px-4 py-2"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
      {editing && (
        <div className="col-span-2">
          <ProjectForm
            project={props.project}
            handleSubmit={handleSubmit}
            loading={updateProject.isLoading}
            tags={props.tags}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectView;

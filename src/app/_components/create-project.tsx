"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
type Inputs = {
  title: string
  description: string
  imageUrl: string
  gitUrl: string
  demoUrl: string
  tags: string[]
}

import { api } from "~/trpc/react";
type tag = {
  id: string;
  name: string | null;
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
export function CreateProject(props?: { tags?: tag[]; project?: Project }) {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const createProject = api.project.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log("SUBMIT:", data)
    createProject.mutate(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        defaultValue={props?.project?.title ?? ""}
        {...register("title", { required: true })}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        rows={4} 
        className="w-full rounded-md px-4 py-2 text-black" 
        placeholder="Write your thoughts here..."
        defaultValue={props?.project?.description ?? ""}
        {...register("description", { required: true })}
      />
      <label htmlFor="imageUrl">ImageUrl</label>
      <input
        type="text"
        id="imageUrl"
        placeholder="ImageUrl"
        defaultValue={props?.project?.image_url ?? ""}
        {...register("imageUrl", { required: true })}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="link">Link</label>
      <input
        type="text"
        id="link"
        placeholder="Link"
        defaultValue={props?.project?.demo_url ?? ""}
        {...register("demoUrl", { required: true })}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="repo">Repo</label>
      <input
        type="text"
        id="repo"
        placeholder="Repo"
        defaultValue={props?.project?.git_url ?? ""}
        {...register("gitUrl", { required: true })}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label 
        htmlFor="tags" 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select a Tag
      </label>
      <select 
        multiple 
        id="tags" 
        {...register("tags", { required: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500">
        {props?.tags?.map((tag) => (
          <option 
            value={JSON.stringify(tag) ?? ""} 
            key={tag.id}>
              {tag.name}
          </option>))}
      </select>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createProject.isLoading}
      >
        {createProject.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

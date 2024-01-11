"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
type Inputs = {
  title: string
  description: string
  imageUrl: string
  link: string
  repo: string
  tags: string[]
}

import { api } from "~/trpc/react";
type tag = {
  id: string;
  name: string | null;
}
export function CreateProject(props: { tags: tag[] }) {
  const router = useRouter();

  const [name, setName] = useState("");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        rows={4} 
        className="w-full rounded-md px-4 py-2 text-black" 
        placeholder="Write your thoughts here..."
      />
      <label htmlFor="imageUrl">ImageUrl</label>
      <input
        type="text"
        id="imageUrl"
        placeholder="ImageUrl"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="link">Link</label>
      <input
        type="text"
        id="link"
        placeholder="Link"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label htmlFor="repo">Repo</label>
      <input
        type="text"
        id="repo"
        placeholder="Repo"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        className="bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500">
        {props.tags.map((tag) => (
          <option 
            value={tag.name ?? ""} 
            key={tag.id}>
              {tag.name}
          </option>))}
      </select>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

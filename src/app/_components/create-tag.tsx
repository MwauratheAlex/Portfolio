"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
type Inputs = {
  title: string
  titleRequired: string
}

import { api } from "~/trpc/react";

export function CreateTag() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const createTag = api.tag.create.useMutation({
    onSuccess: () => {
      router.refresh();
      reset()
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createTag.mutate({name: data.title})
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        {...register("title", { required: true })}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      { errors.title && <span className="border color">This field is required</span>}
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createTag.isLoading}
      >
        {createTag.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

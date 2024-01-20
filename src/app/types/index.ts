import * as z from "zod";

export type ProjectFormInput = {
  title: string;
  description: string;
  imageUrl: string;
  gitUrl: string;
  demoUrl: string;
  tags: string[];
};

export const messageFormSchema = z.object({
  name: z.string().min(4, "name must be more than 4 characters long."),
  emailAddress: z.string().email(),
  message: z.string().min(4, "message must be more than 4 characters long."),
});

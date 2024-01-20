import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const messageFormSchema = z.object({
  name: z.string().min(4, "name must be more than 4 characters long."),
  emailAddress: z.string().email(),
  message: z.string().min(4, "message must be more than 4 characters long."),
});

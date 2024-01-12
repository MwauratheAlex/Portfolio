import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projects } from "~/server/db/schema";

export const ProjectRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        imageUrl: z.string().min(1),
        gitUrl: z.string().min(1),
        demoUrl: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(projects).values({
        title: input.title,
        description: input.description,
        image_url: input.imageUrl,
        git_url: input.gitUrl,
        demo_url: input.demoUrl,
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.projects.findMany();
  }),
});

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projects } from "~/server/db/schema";

export const ProjectRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image_url: z.string().min(1),
        git_url: z.string().min(1),
        demo_url: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(projects).values({
        title: input.title,
        description: input.description,
        image_url: input.image_url,
        git_url: input.git_url,
        demo_url: input.demo_url,
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.projects.findMany();
  }),
});

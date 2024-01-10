import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { tags } from "~/server/db/schema";

export const TagRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(tags).values({
        name: input.name,
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.tags.findMany();
  }),
});

import { eq } from "drizzle-orm";
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

  update: publicProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(tags)
        .set({ name: input.name })
        .where(eq(tags.id, input.id));
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(tags).where(eq(tags.id, input.id));
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.tags.findMany();
  }),
});

import { messageFormSchema } from "~/lib/utils";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const messageRouter = createTRPCRouter({
  create: publicProcedure
    .input(messageFormSchema)
    .mutation(async ({ ctx, input }) => {
      //   await ctx.db.insert(posts).values({
      //     name: input.name,
      //   });
      console.log(input);
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),
});

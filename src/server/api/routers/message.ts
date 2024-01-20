import { messageFormSchema } from "~/app/types";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { messages } from "~/server/db/schema";

export const messageRouter = createTRPCRouter({
  create: publicProcedure
    .input(messageFormSchema)
    .mutation(async ({ ctx, input }) => {
      //   await ctx.db.insert(posts).values({
      //     name: input.name,
      //   });
      console.log(input);
      await ctx.db.insert(messages).values({
        name: input.name,
        email: input.emailAddress,
        messages: input.message,
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),
});

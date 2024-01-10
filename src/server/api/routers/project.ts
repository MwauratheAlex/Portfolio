import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projects } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.projects.findMany();
  }),
});

import { createTRPCRouter } from "~/server/api/trpc";
import { TagRouter } from "./routers/tags";
import { ProjectRouter } from "./routers/project";
import { messageRouter } from "./routers/message";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  message: messageRouter,
  project: ProjectRouter,
  tag: TagRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

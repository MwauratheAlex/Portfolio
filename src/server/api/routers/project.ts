import { eq } from "drizzle-orm";
import { string, z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { projects, projectsToTags } from "~/server/db/schema";

type tag = {
  id: string;
  name: string | null;
};

export const ProjectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        imageUrl: z.string().min(1),
        gitUrl: z.string().min(1),
        demoUrl: z.string().min(1),
        tags: z.array(string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const insertId = createId();
      await ctx.db.insert(projects).values({
        id: insertId,
        title: input.title,
        description: input.description,
        image_url: input.imageUrl,
        git_url: input.gitUrl,
        demo_url: input.demoUrl,
      });
      await Promise.all(
        input.tags.map(async (tag) => {
          const parsedTag = JSON.parse(tag) as tag;
          await ctx.db.insert(projectsToTags).values({
            projectId: insertId,
            tagId: parsedTag.id,
          });
        }),
      );
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1),
        description: z.string().min(1),
        imageUrl: z.string().min(1),
        gitUrl: z.string().min(1),
        demoUrl: z.string().min(1),
        tags: z.array(string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(projects)
        .set({
          title: input.title,
          description: input.description,
          image_url: input.imageUrl,
          git_url: input.gitUrl,
          demo_url: input.demoUrl,
        })
        .where(eq(projects.id, input.id));
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      await Promise.all([
        ctx.db.delete(projects).where(eq(projects.id, id)),
        ctx.db.delete(projectsToTags).where(eq(projectsToTags.projectId, id)),
      ]);
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.query.projects.findMany({
      with: {
        projectsToTags: {
          columns: { projectId: false, tagId: false },
          with: { tag: true },
        },
      },
    });
    return projects;
  }),
});

// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql, relations } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `portfolio_${name}`);

export const posts = mysqlTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const projects = mysqlTable("project", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  title: varchar("title", { length: 256 }),
  description: varchar("description", { length: 256 }),
  image_url: varchar("image_url", { length: 256 }),
  git_url: varchar("git_url", { length: 256 }),
  demo_url: varchar("demo_url", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export const projectRelations = relations(projects, ({ many }) => ({
  projectsToTags: many(projectsToTags),
}));

export const tags = mysqlTable("tag", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
});

export const tagRelations = relations(tags, ({ many }) => ({
  projectsToTags: many(projectsToTags),
}));

export const projectsToTags = mysqlTable("projectsToTags", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  projectId: bigint("project_id", { mode: "number" }).notNull(),
  tagId: bigint("tag_id", { mode: "number" }).notNull(),
});

export const projectsToTagsRelations = relations(projectsToTags, ({ one }) => ({
  tag: one(tags, {
    fields: [projectsToTags.tagId],
    references: [tags.id],
  }),
  project: one(projects, {
    fields: [projectsToTags.projectId],
    references: [projects.id],
  }),
}));

"use client";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Container from "./ui/container";
import SectionHeading from "./ui/sectionHeading";
import { useRef } from "react";

type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  title: string | null;
  description: string | null;
  image_url: string | null;
  git_url: string | null;
  demo_url: string | null;
  projectsToTags: object[];
};

const Projects = (props: { projects: Project[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="py-8 " id="projects">
      <Container>
        <SectionHeading title="Projects" />
        {props.projects.length === 0 && <p>Oop! No projects available.</p>}
        {props.projects.length > 0 && (
          <div ref={ref}>
            {props.projects.length === 0 && <p>no projects available</p>}
            {props.projects.map((project, index) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.5 }}
                key={project.id}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;

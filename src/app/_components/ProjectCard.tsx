"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import image from "../../images/image.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectCardProps = {
  project: {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    title: string | null;
    description: string | null;
    image_url: string | null;
    git_url: string | null;
    demo_url: string | null;
  };
};

const ProjectCard = (props: ProjectCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <section ref={ref}>
      <div className="flex gap-6">
        <div>
          <Image src={image} width={800} alt="project" />
        </div>
        <div className="flex flex-col content-center justify-center align-middle">
          <motion.div className="card-body" style={{ y }}>
            <h1 className="card-title">{props.project.title}</h1>
            <p className="card-text">{props.project.description}</p>
          </motion.div>
          <div>
            <Button variant="link">code</Button>
            <Button variant="link">Visit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

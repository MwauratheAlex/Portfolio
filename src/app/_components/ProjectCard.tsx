"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import image from "../../images/image.jpg";
import { Github, Link } from "lucide-react";

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
  return (
    <section className="my-10 overflow-hidden rounded-lg border">
      <div className="flex flex-col lg:flex-row">
        <div className="overflow-hidden rounded-md  lg:my-4 lg:ml-4 lg:h-96">
          <Image src={image} objectFit="contain" alt="project" />
        </div>
        <div className="my-auto flex h-fit flex-col gap-4 bg-slate-900 px-4  py-8 lg:w-2/4 lg:px-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{props.project.title}</h1>
            <p className="">{props.project.description}</p>
          </div>
          <div className="flex gap-2 md:gap-5">
            <Button
              variant="outline"
              className=" h-10 rounded-full bg-black"
              size="lg"
            >
              <Github />
              <span className="ml-2 font-bold">Git</span>
            </Button>
            <Button
              variant="outline"
              className=" h-10 rounded-full bg-red-950"
              size="lg"
            >
              <Link />
              <span className="ml-2 font-bold">Visit</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

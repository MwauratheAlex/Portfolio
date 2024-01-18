import { Button } from "./ui/button";

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

const projectCard = (props: ProjectCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.project.title}</h5>
        <p className="card-text">{props.project.description}</p>
      </div>
      <div>
        <Button>code</Button>
        <Button>Visit</Button>
      </div>
    </div>
  );
};

export default projectCard;

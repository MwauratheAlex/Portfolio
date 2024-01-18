import { Button } from "./ui/button";
import Container from "./ui/container";

const Hero = () => {
  const stacks = [
    { name: "UI/UX" },
    { name: "Front-End" },
    { name: "Back-End" },
  ];
  return (
    <Container>
      <div className="grid place-items-center  gap-4 text-center">
        <h1 className="text-5xl  text-slate-400">Mwaura Mbugua</h1>
        <h2 className="text-6xl font-medium">
          Making beautiful stuff <br /> with code
        </h2>
        <div className="flex">
          {stacks.map((stack, idx) => (
            <Stack key={idx} name={stack.name} />
          ))}
        </div>
        <Button
          variant="outline"
          size="lg"
          className="mt-2 rounded-md border-red-500 py-6 text-xl font-medium"
        >{`Let's talk`}</Button>
      </div>
    </Container>
  );
};

const Stack = (props: { name: string }) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default Hero;

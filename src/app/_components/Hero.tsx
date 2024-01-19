"use client";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import Parallax from "./animations/Parallax";
import { Button } from "./ui/button";
import Container from "./ui/container";

const Hero = () => {
  const stacks = [
    { name: "Front-End" },
    { name: "UI/UX" },
    { name: "Back-End" },
  ];
  return (
    <Parallax>
      <div className="mt-24 grow align-middle">
        <Container>
          <div
            className="
            mx-auto
            grid w-max 
            max-w-full place-items-center justify-center
            gap-6 rounded-3xl bg-black bg-opacity-90 px-6 py-8 text-center lg:px-10"
          >
            <h1 className="text-2xl text-slate-400  lg:text-5xl">
              Mwaura Mbugua
            </h1>
            <h2 className="text-3xl font-medium lg:text-6xl">
              Making beautiful stuff <br /> for the web
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
      </div>
    </Parallax>
  );
};

const Stack = (props: { name: string }) => {
  return (
    <div className="m-3 flex flex-col place-items-center gap-3 lg:m-4">
      {props.name === "UI/UX" && (
        <DiZend size="2rem" color="rgb(250, 2, 221)" />
      )}
      {props.name === "Front-End" && (
        <DiReact size="2rem" color="rgb(7, 181, 237)" />
      )}
      {props.name === "Back-End" && (
        <DiFirebase size="2rem" color="rgb(250, 172, 2)" />
      )}
      <p
        className={`text-lg font-bold lg:text-2xl
        ${props.name === "UI/UX" && "text-purple-400"}
        ${props.name === "Front-End" && "text-blue-400"}
        ${props.name === "Back-End" && "text-yellow-200"}`}
      >
        {props.name}
      </p>
    </div>
  );
};

export default Hero;

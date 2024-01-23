"use client";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import Parallax from "./animations/Parallax";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const stacks = [
    { name: "Front-End" },
    { name: "UI/UX" },
    { name: "Back-End" },
  ];

  return (
    <Parallax>
      <div className="grow align-middle">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`
            mx-auto
            w-max max-w-full 
            place-items-center justify-center gap-3
            rounded-3xl bg-black bg-opacity-90 px-6 py-8 text-center md:gap-6 lg:px-10`}
          >
            <div className="flex flex-col gap-3 lg:gap-6">
              {/* <h1 className="text-2xl text-blue-200 opacity-90  lg:text-5xl">
                Mwaura Mbugua
              </h1> */}
              <h2 className="text-3xl font-bold text-blue-200 lg:text-6xl">
                Building
                <TypeAnimation
                  sequence={[
                    "Beautiful",
                    2000,
                    "Elegant",
                    2000,
                    "Modern",
                    2000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ display: "block" }}
                  className=" my-4 text-blue-400"
                  repeat={Infinity}
                />
                stuff for the web
              </h2>
            </div>

            <div className="flex justify-center">
              {stacks.map((stack, idx) => (
                <Stack key={idx} name={stack.name} />
              ))}
            </div>
            <Button
              variant="outline"
              size="lg"
              className="mt-2 rounded-md border-red-500 py-6 text-xl font-medium"
            >{`Let's talk`}</Button>
          </motion.div>
        </Container>
      </div>
    </Parallax>
  );
};

export const Stack = (props: { name: string; children?: React.ReactNode }) => {
  return (
    <div className="m-3 flex flex-col place-items-center gap-1 opacity-85 md:gap-2 lg:m-4">
      {props.name === "UI/UX" && <DiZend size="2rem" color="#cf5dc1" />}
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
      {props.children}
    </div>
  );
};

export default Hero;

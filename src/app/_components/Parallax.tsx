"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yChildren = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const mountainOpacity = useTransform(scrollYProgress, [0, 1], ["90%", "0%"]);
  const starsOpacity = useTransform(scrollYProgress, [0, 1], ["100%", "30%"]);
  const planetOpacity = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);
  const childrenOpacity = useTransform(scrollYProgress, [0, 1], ["95%", "60%"]);

  return (
    <div
      ref={ref}
      className="relative h-full max-w-full
        overflow-hidden bg-gradient-to-b from-slate-950 to-black"
    >
      <motion.div
        style={{ y: yBg, opacity: planetOpacity }}
        className="bg-planets absolute top-0 h-full w-full bg-cover bg-bottom"
      />
      <motion.div
        style={{ x: yBg, opacity: starsOpacity }}
        className="bg-stars absolute top-0 h-full w-full bg-cover bg-bottom"
      />
      <motion.div
        style={{ opacity: mountainOpacity }}
        className="bg-mountains absolute top-0 z-20 h-full w-full bg-cover bg-bottom"
      />
      <motion.div
        className="relative z-50"
        style={{ y: yChildren, opacity: childrenOpacity }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Parallax;

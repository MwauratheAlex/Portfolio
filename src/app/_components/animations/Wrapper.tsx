"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0.8 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);

export default Wrapper;

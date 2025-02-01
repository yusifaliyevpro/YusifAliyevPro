"use client";
import { motion } from "motion/react";
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 80,
      }}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
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

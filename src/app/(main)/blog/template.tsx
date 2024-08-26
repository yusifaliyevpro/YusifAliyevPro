"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

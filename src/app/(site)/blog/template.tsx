import type { ReactNode } from "react";

import * as motion from "motion/react-client";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        stiffness: 100,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}

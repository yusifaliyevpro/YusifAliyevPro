import type { ReactNode } from "react";

import * as motion from "motion/react-client";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -60 }}
      transition={{
        duration: 0.2,
        stiffness: 80,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}

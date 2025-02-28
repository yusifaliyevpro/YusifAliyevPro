import * as motion from "motion/react-client";

export default function Template({ children }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
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

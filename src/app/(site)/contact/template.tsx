import * as m from "motion/react-m";

export default function Template({ children }) {
  return (
    <m.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -60, opacity: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 80,
      }}
    >
      {children}
    </m.div>
  );
}

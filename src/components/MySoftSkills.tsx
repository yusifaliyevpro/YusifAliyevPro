import * as motion from "motion/react-client";

import Reveal from "./Reveal";
import type { Variants } from "motion/dist/react";

const olVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const itemVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, transition: { duration: 0.4, stiffness: 70, type: "spring" }, x: 0 },
};

export default function MySoftSkills() {
  return (
    <section
      aria-label="Soft Skills"
      className="flex min-h-[70svh] w-full flex-col items-center md:px-40 xl:px-64"
    >
      <Reveal
        as="h2"
        className="w-full text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl"
      >
        Soft Skills
      </Reveal>
      <motion.ol
        className="mt-10 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-4 overflow-x-hidden px-3 text-xl md:ml-3 md:gap-x-5 md:px-5"
        initial="hidden"
        variants={olVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {softSkills.map((skill, i) => (
          <motion.li
            key={i}
            className="rounded-lg bg-gradient-to-r from-blue-600/90 to-blue-500 p-1 px-2 text-center text-base text-white dark:text-slate-300 md:px-4 md:text-lg lg:text-xl"
            variants={itemVariants}
          >
            <h3>{skill}</h3>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

const softSkills = [
  "Problem solving",
  "Analytical thinking",
  "Critical thinking",
  "Creativity",
  "Collaboration",
  "Time management",
  "English B2",
  "Project management",
  "Attention to detail",
  "Empathy",
  "Responsibility",
  "Continuous learning",
  "Decision making",
  "Azerbaijani Native",
  "Self-motivation",
  "Fast learner",
];

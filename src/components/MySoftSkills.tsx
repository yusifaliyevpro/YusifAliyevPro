import Reveal from "./Reveal";
import * as m from "motion/react-m";

const olVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, type: "spring", stiffness: 70 } },
};

export default function MySoftSkills() {
  return (
    <section aria-label="Soft Bacarıqlarım" className="flex min-h-[70svh] w-full flex-col items-center md:px-40 xl:px-64">
      <Reveal as="h2" className="w-full text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl">
        Soft Bacarıqlarım
      </Reveal>
      <m.ol
        className="mt-10 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-4 overflow-x-hidden px-3 text-xl md:ml-3 md:gap-x-5 md:px-5"
        initial="hidden"
        variants={olVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {softs.map((skill, i) => (
          <m.li
            key={i}
            className="rounded-lg bg-gradient-to-r from-blue-600/90 to-blue-500 p-1 px-3 text-center text-lg text-white dark:text-slate-300 md:px-4 lg:text-xl"
            variants={itemVariants}
          >
            <h3>{skill}</h3>
          </m.li>
        ))}
      </m.ol>
    </section>
  );
}

const softs: string[] = [
  "Layihələrin idarə edilməsi",
  "Komanda ilə işləmə",
  "Tez öyrənmə",
  "Analitik düşüncə",
  "English B1-B2",
  "Vaxt idarə etməsi",
];

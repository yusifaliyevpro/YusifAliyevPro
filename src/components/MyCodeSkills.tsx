import { Progress } from "@heroui/progress";
import * as motion from "motion/react-client";
import Reveal from "./Reveal";

const olVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, type: "spring", stiffness: 70 } },
};

export default function MyCodeSkills() {
  return (
    <section aria-label="Kod Bacarıqları" className="flex min-h-svh w-full flex-col items-center">
      <Reveal as="h2" className="px-5 text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl">
        Kod Bacarıqları
      </Reveal>
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={olVariants}
        className="mt-12 flex w-full flex-col gap-y-8 overflow-x-hidden px-10 sm:px-28 lg:px-56 xl:px-80"
      >
        {skills.map((skill, i) => (
          <motion.li key={i} variants={itemVariants} className="flex w-full flex-col items-start justify-around gap-y-2">
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="text-xl md:text-2xl">{skill.name}</h3>
              <p className="text-lg font-semibold" aria-label={`${skill.value}%`}>
                {skill.value}%
              </p>
            </div>
            <Progress
              size="lg"
              classNames={{
                indicator: "to-[#0c8bea] from-[#0B66C2] bg-gradient-to-r",
              }}
              aria-label={skill.name}
              minValue={0}
              maxValue={100}
              value={skill.value}
            />
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

type Skill = { name: string; value: number };

const skills: Skill[] = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS, TailwindCSS",
    value: 80,
  },
  {
    name: "JavaScript, TypeScript",
    value: 85,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "NextJS",
    value: 90,
  },
];

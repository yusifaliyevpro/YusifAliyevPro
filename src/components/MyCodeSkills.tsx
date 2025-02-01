"use client";
import { Progress } from "@heroui/progress";
import { Motion } from "./Motion";

export default function MyCodeSkills() {
  return (
    <ol className="mt-12 flex w-full flex-col gap-y-8 overflow-x-hidden px-10 sm:px-28 lg:px-56 xl:px-80">
      {skills.map((skill, i) => (
        <Motion
          type="li"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            type: "spring",
            stiffness: 70,
          }}
          viewport={{ once: true }}
          key={i}
          className="flex w-full flex-col items-start justify-around gap-y-2"
        >
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
        </Motion>
      ))}
    </ol>
  );
}

const skills: {
  name: string;
  value: number;
}[] = [
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

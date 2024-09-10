import { Motion } from "./Motion";

export default function MySoftSkills() {
  return (
    <ol className="mt-10 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-4 overflow-x-hidden px-3 text-xl md:ml-3 md:gap-x-5 md:px-5">
      {addSkills.map((skill, i) => (
        <Motion
          type="li"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            delay: (i + 1) * 0.2,
            stiffness: 70,
          }}
          viewport={{ once: true }}
          key={i}
          className="rounded-lg bg-gradient-to-r from-blue-600/90 to-blue-500 p-1 px-3 text-center text-lg text-white dark:text-slate-300 md:px-4 lg:text-xl"
        >
          <h3>{skill}</h3>
        </Motion>
      ))}
    </ol>
  );
}

const addSkills: string[] = [
  "Layihə İdarə etməsi",
  "Komanda ilə işləmə",
  "Tez öyrənmə",
  "Analitik düşüncə",
  "Vaxt idarə etməsi",
  "English B1",
  "Empatiya",
];

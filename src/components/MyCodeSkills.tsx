// import Reveal from "./Reveal";
// import { Progress } from "@heroui/progress";
// import * as motion from "motion/react-client";

// const olVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
// const itemVariants = {
//   hidden: { opacity: 0, x: -300 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.4, type: "spring", stiffness: 70 } },
// };

// export default function MyCodeSkills() {
//   return (
//     <section aria-label="Kod Bacarıqları" className="flex min-h-svh w-full flex-col items-center">
//       <Reveal as="h2" className="px-5 text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl">
//         Kod Bacarıqları
//       </Reveal>
//       <motion.ol
//         className="mt-12 flex w-full flex-col gap-y-8 overflow-x-hidden px-10 sm:px-28 lg:px-56 xl:px-80"
//         initial="hidden"
//         variants={olVariants}
//         viewport={{ once: true }}
//         whileInView="visible"
//       >
//         {skills.map((skill, i) => (
//           <motion.li key={i} className="flex w-full flex-col items-start justify-around gap-y-2" variants={itemVariants}>
//             <div className="flex w-full flex-row items-center justify-between">
//               <h3 className="text-xl md:text-2xl">{skill.name}</h3>
//               <p aria-label={`${skill.value}%`} className="text-lg font-semibold">
//                 {skill.value}%
//               </p>
//             </div>
//             <Progress
//               aria-label={skill.name}
//               classNames={{
//                 indicator: "bg-gradient-to-r from-[#0B66C2] to-[#0c8bea]",
//               }}
//               maxValue={100}
//               minValue={0}
//               size="lg"
//               value={skill.value}
//             />
//           </motion.li>
//         ))}
//       </motion.ol>
//     </section>
//   );
// }

// type Skill = { name: string; value: number };

// const skills: Skill[] = [
//   {
//     name: "HTML",
//     value: 90,
//   },
//   {
//     name: "CSS, TailwindCSS",
//     value: 80,
//   },
//   {
//     name: "JavaScript, TypeScript",
//     value: 85,
//   },
//   {
//     name: "React",
//     value: 90,
//   },
//   {
//     name: "NextJS",
//     value: 90,
//   },
// ];

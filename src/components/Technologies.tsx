import Reveal from "./Reveal";
import { Tooltip } from "@heroui/tooltip";
import * as m from "motion/react-m";
import Image from "next/image";

const olVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
};

export default function Technologies() {
  return (
    <section aria-label="Texnologiyalar" className="flex min-h-svh w-full flex-col items-center px-5 md:px-52">
      <Reveal as="h2" className="text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl lg:text-6xl">
        Texnologiyalar
      </Reveal>
      <m.ol
        className="mt-16 flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 transition-all lg:gap-x-7 lg:gap-y-7"
        initial="hidden"
        variants={olVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {techs.map((tech, i) => (
          <m.li
            key={i}
            className="flex aspect-square rounded-lg bg-white p-3 shadow-medium dark:bg-slate-800 max-lg:items-center max-lg:justify-center lg:p-3"
            variants={itemVariants}
          >
            <h3 className="sr-only">{tech.name}</h3>
            <Tooltip shouldFlip showArrow color="primary" content={tech.name} offset={23} size="lg">
              <Image
                alt={tech.name}
                className="select-none object-contain drop-shadow-2xl max-lg:size-16"
                height={90}
                src={tech.icon}
                width={90}
              />
            </Tooltip>
          </m.li>
        ))}
      </m.ol>
    </section>
  );
}

type Tech = { name: string; link: string; icon: string };

const techs: Tech[] = [
  { name: "NextJS 15", link: "https://nextjs.org/", icon: "/techs/next.svg" },
  { name: "TypeScript", link: "https://nextjs.org/", icon: "/techs/ts.png" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com/", icon: "/techs/tailwind.svg" },
  { name: "Vercel Hosting", link: "https://vercel.com/", icon: "/techs/vercel.svg" },
  { name: "NestJS", link: "https://nestjs.com/", icon: "/techs/nestjs.svg" },
  { name: "Prisma", link: "https://nextjs.org/", icon: "/techs/prisma.svg" },
  { name: "NodeJS", link: "https://nextjs.org/", icon: "/techs/nodejs.png" },
  { name: "Sanity CMS", link: "https://www.sanity.io/", icon: "/techs/sanity.png" },
  { name: "NextUI", link: "https://nextui.org/", icon: "/techs/nextui.png" },
  { name: "React Icons", link: "https://react-icons.github.io/react-icons/", icon: "/techs/react-icons.svg" },
  { name: "motion", link: "https://motion.dev/", icon: "/techs/motion.png" },
  { name: "NextAuth", link: "https://nextjs.org/", icon: "/techs/nextauth.png" },
  { name: "MongoDB", link: "https://www.mongodb.com/", icon: "/techs/mongodb.svg" },
];

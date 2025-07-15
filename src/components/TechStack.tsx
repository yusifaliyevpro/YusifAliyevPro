import { Tooltip } from "@heroui/tooltip";
import * as motion from "motion/react-client";
import Image from "next/image";

import Reveal from "./Reveal";
import type { Variants } from "motion/dist/react";

const olVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, stiffness: 100, type: "spring" } },
};

export function TechStack() {
  return (
    <section aria-label="Tech Stack" className="flex min-h-svh w-full flex-col items-center px-5 md:px-52">
      <Reveal
        as="h2"
        className="text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl lg:text-6xl"
      >
        Tech Stack
      </Reveal>
      <motion.ol
        className="mt-16 flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 transition-all lg:gap-x-7 lg:gap-y-7"
        initial="hidden"
        variants={olVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {techs.map((tech, i) => (
          <motion.li
            key={i}
            className="shadow-medium flex aspect-square items-center justify-center rounded-lg bg-white p-3 lg:p-3"
            variants={itemVariants}
          >
            <h3 className="sr-only">{tech.name}</h3>
            <Tooltip shouldFlip showArrow color="primary" content={tech.name} offset={23} size="lg">
              <Image
                alt={tech.name}
                className="aspect-square object-contain drop-shadow-2xl select-none max-lg:size-16"
                height={90}
                src={tech.icon}
                width={90}
              />
            </Tooltip>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

type Tech = { icon: string; link: string; name: string };

const techs: Tech[] = [
  { icon: "/techs/next.svg", link: "https://nextjs.org/", name: "NextJS 15" },
  { icon: "/techs/ts.png", link: "https://nextjs.org/", name: "TypeScript" },
  { icon: "/techs/tailwind.svg", link: "https://tailwindcss.com/", name: "Tailwind CSS" },
  { icon: "/techs/nextauth.png", link: "https://nextjs.org/", name: "NextAuth" },
  { icon: "/techs/prisma.svg", link: "https://nextjs.org/", name: "Prisma" },
  { icon: "/techs/nestjs.svg", link: "https://nestjs.com/", name: "NestJS" },
  { icon: "/techs/nodejs.png", link: "https://nextjs.org/", name: "NodeJS" },
  { icon: "/techs/vercel.svg", link: "https://vercel.com/", name: "Vercel Hosting" },
  { icon: "/techs/sanity.png", link: "https://www.sanity.io/", name: "Sanity CMS" },
  { icon: "/techs/mongodb.svg", link: "https://www.mongodb.com/", name: "MongoDB" },
  { icon: "/techs/nextui.png", link: "https://nextui.org/", name: "NextUI" },
  { icon: "/techs/react-icons.svg", link: "https://react-icons.github.io/react-icons/", name: "React Icons" },
  { icon: "/techs/motion.png", link: "https://motion.dev/", name: "motion" },
];

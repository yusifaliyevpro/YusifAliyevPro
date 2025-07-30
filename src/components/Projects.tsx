import * as motion from "motion/react-client";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import Reveal from "./Reveal";
import type { Variants } from "motion/dist/react";
import { getProjects } from "@/data-access/projects/get";

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, stiffness: 60, type: "spring" } },
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section aria-label="My Projects" className="flex min-h-svh flex-col items-center gap-y-16">
      <Reveal
        as="h2"
        className="text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl"
      >
        My Projects
      </Reveal>
      <motion.ul
        className="flex w-full flex-row flex-wrap items-stretch justify-center gap-x-16 gap-y-10 px-12 transition-all md:mx-52"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {projects.map((project, i) => (
          <motion.li
            key={i}
            className="shadow-neon-blue items-center justify-center rounded-2xl"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            <h3 className="sr-only" title={project.name + " Project"}>
              {project.name} Project
            </h3>
            <a
              aria-label={project.name}
              className="group z-10 flex flex-col items-center justify-center"
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
              title="Click the link for live preview"
            >
              <figure>
                <Image
                  alt={`${project.name} logo`}
                  blurDataURL={project.imageMetadata.lqip || ""}
                  className="shadow-medium aspect-16/10 size-auto max-h-44 rounded-2xl object-cover transition-all hover:blur-md md:max-h-48"
                  height={200}
                  placeholder="blur"
                  quality={100}
                  src={project.image!}
                  width={350}
                />
                <figcaption className="sr-only">alt={`${project.name} logo`}</figcaption>
              </figure>
              <TbExternalLink
                aria-hidden
                className="pointer-events-none absolute hidden text-3xl text-slate-900 transition-all group-hover:flex"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

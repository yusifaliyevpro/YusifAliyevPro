import { TbExternalLink } from "react-icons/tb";
import * as motion from "motion/react-client";
import SanityImage from "./SanityImage";
import Reveal from "./Reveal";
import { getProjects } from "../lib/utils";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, type: "spring", stiffness: 60 } },
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section aria-label="Layihələrim" className="flex min-h-svh flex-col items-center gap-y-16">
      <Reveal as="h2" className="text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl">
        Layihələrim
      </Reveal>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex w-full flex-row flex-wrap items-stretch justify-center gap-x-16 gap-y-10 px-12 transition-all md:mx-52"
      >
        {projects.map((project, i) => (
          <motion.li
            key={i}
            viewport={{ once: true }}
            variants={itemVariants}
            className="items-center justify-center rounded-2xl shadow-neon-blue"
          >
            <h3 className="sr-only" title={project.name + " Project"}>
              {project.name} Project
            </h3>
            <a
              href={project.link}
              title="Canlı baxış üçün linkə klikləyin"
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${project.name} websaytına baxın`}
              className="group z-10 flex flex-col items-center justify-center"
            >
              <figure>
                <SanityImage
                  src={project.image}
                  width={350}
                  height={200}
                  alt={`${project.name} logo`}
                  unoptimized
                  placeholder="blur"
                  blurDataURL={project.imageMetadata.lqip}
                  className="aspect-[16/10] size-auto max-h-44 rounded-2xl object-cover shadow-medium transition-all hover:blur-md md:max-h-48"
                />
                <figcaption className="sr-only">alt={`${project.name} logo`}</figcaption>
              </figure>
              <TbExternalLink
                className="pointer-events-none absolute hidden text-3xl text-slate-900 transition-all group-hover:flex"
                aria-hidden
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

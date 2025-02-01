import { TbExternalLink } from "react-icons/tb";
import { Motion } from "./Motion";
import { getProjects } from "@/lib/utils";
import SanityImage from "./SanityImage";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex w-full flex-row flex-wrap items-stretch justify-center gap-x-16 gap-y-10 px-12 transition-all md:mx-52">
      {projects.map((project, i) => (
        <Motion
          key={i}
          type="article"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            delay: (i + 1) * 0.2,
            duration: 0.2,
            type: "spring",
            stiffness: 60,
          }}
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
              <figcaption className="sr-only">
                alt={`${project.name} logo`}
              </figcaption>
            </figure>
            <TbExternalLink
              className="pointer-events-none absolute hidden text-3xl text-slate-900 transition-all group-hover:flex"
              aria-hidden
            />
          </a>
        </Motion>
      ))}
    </div>
  );
}

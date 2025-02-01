import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Motion } from "./Motion";
import { cn } from "@/lib/cn";
import { PROJECTS_QUERYResult } from "../../sanity.types";
import { getProjects } from "@/lib/utils";
import SanityImage from "./SanityImage";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex w-full flex-row flex-wrap items-stretch justify-center gap-x-10 gap-y-8 px-7 transition-all md:mx-48">
      {projects.map((project, i) => (
        <Motion
          type="article"
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            delay: (i + 1) * 0.2,
            duration: 0.2,
            type: "spring",
            stiffness: 60,
          }}
          key={i}
          className="flex flex-col items-center justify-center gap-y-3 rounded-2xl border-blue-400 shadow-medium md:gap-y-4"
        >
          <figure
            className={`flex aspect-[16/9] flex-col items-center justify-center`}
          >
            <SanityImage
              src={project.image}
              width={310}
              height={200}
              alt={`${project.name} ana səhifəsi`}
              unoptimized
              placeholder="blur"
              blurDataURL={project.imageMetadata.lqip}
              className="aspect-[16/8.3] size-auto max-h-40 rounded-lg object-cover shadow-medium"
            />
            <figcaption className="sr-only">
              alt={`${project.name} ana səhifəsi`}
            </figcaption>
          </figure>
          <div className="sr-only">
            <h3
              title={project.name}
              className="line-clamp-1 w-full px-2 text-center text-2xl font-semibold text-gray-800 dark:text-slate-300"
            >
              {project.name}
            </h3>
          </div>
          <div className="mt-3 flex w-full flex-row flex-wrap items-center justify-around gap-y-3">
            <a
              href={project.link}
              title="Canlı baxış üçün linkə klikləyin"
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${project.name} websaytına baxın`}
              className={cn(
                "group flex min-w-[9.4rem] cursor-pointer select-none flex-row items-center justify-center gap-x-1 rounded-full px-5 py-3 text-white transition-all duration-400 ease-in-out",
                "md:px-5",
                "bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90",
              )}
            >
              <span className="sr-only">{project.name} </span>
              <FaGlobe className="text-2xl" aria-hidden />
              <span className="sr-only transform opacity-0 transition-all duration-400 ease-in-out group-hover:not-sr-only group-hover:translate-x-1 group-hover:opacity-100">
                Websayt
              </span>
            </a>
            {project.repo ? (
              <a
                href={project.repo}
                title={"Github Reposuna baxmaq üçün klikləyin"}
                rel="noopener noreferrer"
                target="_blank"
                className="group flex min-w-[8.4rem] select-none flex-row items-center justify-center gap-x-1 rounded-full bg-slate-800 px-5 py-3 text-white transition-all duration-400 ease-in-out hover:opacity-90 md:px-8"
              >
                <span className="sr-only">{project.name} GitHub </span>
                <FaGithub className="text-2xl" aria-hidden />
                <span className="sr-only transform opacity-0 transition-all duration-400 ease-in-out group-hover:not-sr-only group-hover:translate-x-1 group-hover:opacity-100">
                  Repo
                </span>
              </a>
            ) : (
              <div
                title="Repo ictimaiyyətə açıq deyil"
                className="group flex min-w-[8.4rem] cursor-pointer select-none flex-row items-center justify-center gap-x-1 rounded-full bg-slate-800 px-5 py-3 text-white transition-all duration-400 ease-in-out hover:opacity-90 md:px-8"
              >
                <span className="sr-only">{project.name} GitHub </span>
                <FaGithub className="text-2xl" aria-hidden />
                <span className="sr-only transform opacity-0 transition-all duration-400 ease-in-out group-hover:not-sr-only group-hover:translate-x-1 group-hover:opacity-100">
                  Repo
                </span>
              </div>
            )}
          </div>
        </Motion>
      ))}
    </div>
  );
}

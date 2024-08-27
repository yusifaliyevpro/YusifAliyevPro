import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Motion } from "./Motion";
import { getProjects } from "@/lib/utils";
import { cn } from "@/lib/cn";

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
          className="flex flex-col items-center justify-center gap-y-3 rounded-2xl border-1 border-blue-400 p-4 shadow-medium md:gap-y-4"
        >
          <Image
            src={project.image}
            width={310}
            alt={`${project.name} websaytının şəkili`}
            height={200}
            className="aspect-[16/8.3] size-auto max-h-40 rounded-lg object-fill shadow-medium transition-all hover:scale-105"
          />
          <div className="flex flex-col md:gap-y-4">
            <h3
              title={project.name}
              className="line-clamp-1 w-full px-2 text-center text-2xl font-semibold text-gray-800 dark:text-slate-300"
            >
              {project.name}
            </h3>
            <p
              title={project.description}
              className="line-clamp-2 w-fit max-w-[20rem] text-pretty text-center text-sm text-gray-500 dark:text-slate-400 md:px-2"
            >
              {project.description}
            </p>
          </div>
          <div className="mt-3 flex w-full flex-row items-center justify-around">
            <a
              href={project.link}
              title="Canlı baxış üçün linkə klikləyin"
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${project.name} websaytına baxın`}
              className={cn(
                "flex cursor-pointer select-none flex-row items-center justify-center gap-x-3 rounded-full text-white",
                "md:px-5",
                "bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-3 hover:opacity-90",
              )}
            >
              <span className="sr-only">{project.name} </span>
              <FaGlobe className="text-2xl" aria-hidden /> Websayt
            </a>
            {project.repo ? (
              <a
                href={project.repo}
                title={"Github Reposuna baxmaq üçün klikləyin"}
                rel="noopener noreferrer"
                target="_blank"
                className="flex select-none flex-row items-center justify-center gap-x-3 rounded-full bg-slate-800 px-5 py-3 text-white hover:opacity-90 md:px-8"
              >
                <span className="sr-only">{project.name} GitHub </span>
                <FaGithub className="text-2xl" aria-hidden /> Repo
              </a>
            ) : (
              <div
                title="Repo ictimaiyyətə açıq deyil"
                className="flex cursor-pointer select-none flex-row items-center justify-center gap-x-3 rounded-full bg-slate-800 px-5 py-3 text-white hover:opacity-90 md:px-8"
              >
                <span className="sr-only">{project.name} GitHub </span>
                <FaGithub className="text-2xl" aria-hidden /> Repo
              </div>
            )}
          </div>
        </Motion>
      ))}
    </div>
  );
}

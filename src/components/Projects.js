import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Motion } from "./Motion";

export default function Projects({ projects }) {
  return (
    <div className="flex w-full flex-row flex-wrap items-stretch justify-center gap-x-10 gap-y-8 px-5 transition-all md:mx-48">
      {projects.map((project, i) => (
        <Motion
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
          className="flex flex-col items-center justify-center gap-y-4 rounded-2xl border-1 border-blue-400 p-4 shadow-medium"
        >
          <Image
            src={project.image}
            width={310}
            alt={project.name}
            height={200}
            className="aspect-[16/8.3] size-auto max-h-40 rounded-lg object-fill shadow-medium transition-all hover:scale-105"
          />
          <h4
            title={project.name}
            className="line-clamp-1 w-full px-2 text-center text-2xl font-semibold text-gray-800"
          >
            {project.name}
          </h4>
          <p
            title={project.description}
            className="line-clamp-2 w-fit max-w-[20rem] text-pretty px-2 text-center text-sm text-gray-500"
          >
            {project.description}
          </p>
          <div className="mt-3 flex w-full flex-row items-center justify-around">
            <Link
              href={project.link}
              prefetch={false}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center gap-x-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-3 text-white hover:opacity-90 md:px-5"
            >
              <FaGlobe className="text-2xl" /> Websayt
            </Link>
            <Link
              href={project.repo}
              prefetch={false}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center justify-center gap-x-3 rounded-full bg-slate-800 px-5 py-3 text-white hover:opacity-90 md:px-8"
            >
              <FaGithub className="text-2xl" /> Repo
            </Link>
          </div>
        </Motion>
      ))}
    </div>
  );
}

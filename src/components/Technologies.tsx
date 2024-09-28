import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { Motion } from "./Motion";

export default function Technologies() {
  return (
    <ol className="mt-16 flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 transition-all lg:gap-x-7 lg:gap-y-7">
      {technologies.map((tech, i) => (
        <Motion
          type="li"
          initial={{ scale: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
          key={i}
          transition={{
            duration: 0.5,
            delay: i * 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="flex aspect-square rounded-lg bg-white p-3 shadow-medium dark:bg-slate-800 max-lg:items-center max-lg:justify-center lg:p-3"
        >
          <h3 className="sr-only">{tech.name}</h3>
          <Tooltip
            shouldFlip
            showArrow
            size="lg"
            color="primary"
            offset={23}
            content={tech.name}
          >
            <Image
              className="select-none object-contain drop-shadow-xl max-lg:size-16"
              src={tech.icon}
              alt={tech.name}
              width={90}
              height={90}
            />
          </Tooltip>
        </Motion>
      ))}
    </ol>
  );
}

const technologies: {
  name: string;
  link: string;
  icon: string;
}[] = [
  {
    name: "NextJS 14",
    link: "https://nextjs.org/",
    icon: "/techs/next.svg",
  },
  {
    name: "Vercel Hosting",
    link: "https://vercel.com/",
    icon: "/techs/vercel.svg",
  },
  {
    name: "Sanity CMS",
    link: "https://www.sanity.io/",
    icon: "/techs/sanity.png",
  },
  {
    name: "NextUI",
    link: "https://nextui.org/",
    icon: "/techs/nextui.png",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "/techs/tailwind.svg",
  },
  {
    name: "TypeScript",
    link: "https://nextjs.org/",
    icon: "/techs/ts.png",
  },
  {
    name: "NodeJS",
    link: "https://nextjs.org/",
    icon: "/techs/nodejs.png",
  },
  {
    name: "NestJS",
    link: "https://nestjs.com/",
    icon: "/techs/nestjs.svg",
  },
  {
    name: "React Icons",
    link: "https://react-icons.github.io/react-icons/",
    icon: "/techs/react-icons.svg",
  },
  {
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
    icon: "/techs/framer-motion.png",
  },
  {
    name: "Clerk Auth",
    link: "https://nextjs.org/",
    icon: "/techs/clerk.webp",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: "/techs/mongodb.svg",
  },
];

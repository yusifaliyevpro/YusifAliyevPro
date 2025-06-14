import type { JSX } from "react";

import * as motion from "motion/react-client";

import Reveal from "./Reveal";
import type { Variants } from "motion/dist/react";

const olVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, stiffness: 80, type: "spring" } },
};
const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, transition: { duration: 0.4, stiffness: 80, type: "spring" }, x: 0 },
};

export default function Timeline() {
  return (
    <section aria-label="Təcrübələr" className="flex w-full flex-col items-center justify-center">
      <Reveal
        as="h2"
        className="w-full text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl"
      >
        Təcrübələr
      </Reveal>
      <div className="relative mt-16 flex min-h-[60svh] w-full flex-col items-start justify-start overflow-x-hidden md:w-7/12 xl:w-5/12">
        <hr className="absolute ml-[47px] h-full w-1 rounded-xl bg-gray-300 md:ml-[5.34rem] dark:bg-gray-400"></hr>
        <motion.ol initial="hidden" variants={olVariants} viewport={{ once: true }} whileInView="visible">
          {events.map((event, i) => (
            <li key={i} className="relative mt-10 flex flex-row items-center">
              <p aria-hidden={!event.year} className="hidden w-[4.9rem] pr-10 text-xl md:flex">
                {event.year}
              </p>
              <motion.span
                className="ml-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-[3px] md:ml-0"
                variants={dotVariants}
              >
                <span className="block size-3 rounded-full bg-white dark:bg-gray-300"></span>
              </motion.span>
              {event.year && <p className="flex pl-12 text-xl md:hidden">{event.year}</p>}
              <motion.div className="flex flex-col pr-2 pl-10 max-sm:space-y-2" variants={textVariants}>
                {event.name && <h3 className="text-2xl text-wrap xl:max-w-[27rem]">{event.name}</h3>}
                {event.description && (
                  <p className="pr-5 text-sm text-gray-500 max-sm:text-base dark:text-slate-400">
                    {event.description}
                  </p>
                )}
              </motion.div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

type Event = {
  description?: JSX.Element | string;
  name?: string;
  year?: number;
};

function DescriptionComponent({ after, href, linkText }: { after: string; href: string; linkText: string }) {
  return (
    <>
      <a className="text-blue-500" href={href} rel="noopener noreferrer" target="_blank">
        {linkText}
      </a>{" "}
      | {after}
    </>
  );
}
const events: Event[] = [
  {
    name: "eComX Təlim Proqramı",
    description: "E-Ticarət | ecomx.az | 3 ay",
  },
  {
    name: "International Innovative Student",
    description: "National Final | Gold Medal 🥇 | StartUp Category",
  },
  {
    name: "SABAH.HUB StartUp Academy",
    description: "AzTU | Entrepreneurship | Succesfully Finished ✅",
  },
  { year: 2025 },
  {
    name: "AzTU | Kompüter Elmləri",
    description: "İngiliscə tədrislə | 2024-2028 | Dövlət Sifarişli",
  },
  {
    name: "Developer & Creator",
    description: (
      <DescriptionComponent
        after="Websayt"
        href="https://world-countriess.vercel.app/"
        linkText="World-Countriess"
      />
    ),
  },
  { year: 2024 },
  { name: "Xəmsə | 🥇 Birincilik" },
  { name: "Cyber Summer School 2023", description: "Beynəxlaq Yay Məktəbi" },
  {
    name: "Developer & Creator",
    description: (
      <DescriptionComponent after="Film Websaytı" href="https://filmisbest.com/" linkText="FilmIsBest" />
    ),
  },
  {
    name: "Text Editor & SEO & Debugger",
    description: (
      <DescriptionComponent after="StartUp" href="https://kitabxanano2.vercel.app/" linkText="Kitabxano2" />
    ),
  },
  { name: "I Şəxsi İnkişaf Məktəbi" },
  { name: "", year: 2023 },
  { name: "Gənc Könüllü | Abşeron GİKM", description: "3 + 1 ay | Ayın Gənci" },
];

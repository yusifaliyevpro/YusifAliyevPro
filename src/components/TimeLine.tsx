import type { JSX } from "react";
import * as motion from "motion/react-client";
import Reveal from "./Reveal";
import type { Variants } from "motion/dist/react";
import { FaGraduationCap } from "react-icons/fa6";
import { BiAward, BiCode, BiTrophy } from "react-icons/bi";

const olVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, stiffness: 80, type: "spring" } },
};
const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, stiffness: 80, type: "spring" } },
};

const getIcon = (name: string) => {
  if (name?.includes("Developer") || name?.includes("Creator")) return <BiCode className="size-8" />;
  if (name?.includes("Medal") || name?.includes("First Place")) return <BiTrophy className="size-8" />;
  if (name?.includes("Academy") || name?.includes("School") || name?.includes("AzTU"))
    return <FaGraduationCap className="size-8" />;
  return <BiAward className="size-8" />;
};

export default function Timeline() {
  return (
    <section aria-label="My Journey" className="flex w-full flex-col items-center justify-center">
      <Reveal
        as="h2"
        className="w-full text-center text-5xl font-bold after:text-blue-500 after:content-['.'] lg:text-6xl"
      >
        My Journey
      </Reveal>
      <div className="relative mt-16 flex min-h-[60svh] w-fit flex-col items-center justify-start overflow-x-hidden px-2 lg:px-5">
        {/* Line */}
        <hr className="absolute left-0 ml-7 h-full w-1 rounded-xl bg-linear-to-b from-blue-500 to-blue-100 lg:ml-10"></hr>
        <motion.ol initial="hidden" variants={olVariants} viewport={{ once: true }} whileInView="visible">
          {events.map((event, i) => (
            <li key={i} className="relative mt-10 flex flex-row items-center">
              {/* Icons */}
              <motion.div
                className={`flex size-11 flex-col items-center justify-center rounded-full bg-linear-to-r from-[#0c8bea] to-[#0B66C2] p-2 text-white`}
                variants={dotVariants}
              >
                {event.year ? <p>{event.year}</p> : getIcon(event.name!)}
              </motion.div>
              <motion.div className="flex flex-col pr-2 pl-10 max-sm:space-y-2" variants={textVariants}>
                {event.name && <h3 className="text-2xl text-wrap">{event.name}</h3>}
                {event.description && (
                  <p className="pr-5 text-sm text-gray-500 max-sm:text-base">{event.description}</p>
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
    name: "REST Countries Typed API",
    description: (
      <DescriptionComponent
        after="NPM Package"
        href="https://www.npmjs.com/package/@yusifaliyevpro/countries"
        linkText="See"
      />
    ),
  },
  {
    name: "eComX Traning Program",
    description: "E-Commerce | ecomx.az | 3 months",
  },
  {
    name: "International Innovative Student",
    description: "National Final | Gold Medal 🥇 | StartUp Category",
  },
  {
    name: "SABAH.HUB StartUp Academy",
    description: "AzTU | Entrepreneurship | Succesfully Finished ✅",
  },
  {
    name: "UniBot | Full Stack Developer",
    description: (
      <DescriptionComponent
        after="Read"
        href="https://yusifaliyevpro.com/blog/unibot-make-your-study-easier"
        linkText="StartUp"
      />
    ),
  },
  { year: 2025 },
  {
    name: "AzTU | Computer Science",
    description: "English Sector | 2024-2028 | Scholarship",
  },
  {
    name: "Developer & Creator",
    description: (
      <DescriptionComponent
        after="Website"
        href="https://world-countriess.vercel.app/"
        linkText="World-Countriess"
      />
    ),
  },
  { year: 2024 },
  { name: "Khamsa | 🥇 First Place" },
  { name: "Cyber Summer School 2023", description: "International Summer School" },
  {
    name: "Developer & Creator",
    description: (
      <DescriptionComponent after="Movie Website" href="https://filmisbest.com/" linkText="FilmIsBest" />
    ),
  },
  {
    name: "Text Editor & SEO & Debugger",
    description: (
      <DescriptionComponent after="StartUp" href="https://kitabxanano2.vercel.app/" linkText="Kitabxano2" />
    ),
  },
  { name: "I Personal Development School" },
  { name: "", year: 2023 },
  { name: "Young Volunteer | Absheron GIKM", description: "3 + 1 months | Youth of the Month" },
];

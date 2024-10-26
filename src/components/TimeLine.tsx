import { Tooltip } from "@nextui-org/react";
import { Motion } from "./Motion";

export default function Timeline() {
  return (
    <div className="relative mt-16 flex min-h-[60svh] w-full flex-col items-start justify-start overflow-x-hidden md:w-7/12 xl:w-5/12">
      <hr className="absolute ml-[47px] h-full w-1 rounded-xl bg-gray-300 dark:bg-gray-400 md:ml-[5.34rem]"></hr>
      <ol>
        {events.map((event, i) => (
          <li key={i} className="relative mt-10 flex flex-row items-center">
            {
              <p
                className="hidden w-[4.9rem] pr-10 text-xl md:flex"
                aria-hidden={!event.year}
              >
                {event.year}
              </p>
            }
            <Motion
              type="span"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                delay: ((i + 1) / events.length) * 2,
                stiffness: 80,
              }}
              viewport={{ once: true }}
              className="ml-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-[3px] md:ml-0"
            >
              <span className="block size-3 rounded-full bg-white dark:bg-gray-300"></span>
            </Motion>
            {event.year && (
              <p className="flex pl-12 text-xl md:hidden">{event.year}</p>
            )}
            <Motion
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
                delay: ((i + 1) / events.length) * 2 + 0.4,
                stiffness: 80,
              }}
              viewport={{ once: true }}
              className="flex flex-col pl-10 pr-2 max-sm:space-y-2"
            >
              {event.name && (
                <h3 className="text-wrap text-2xl xl:max-w-[27rem]">
                  {event.name}
                </h3>
              )}
              {event.description && (
                <p className="pr-5 text-sm text-gray-500 dark:text-slate-400 max-sm:text-base">
                  {event.description}
                </p>
              )}
            </Motion>
          </li>
        ))}
      </ol>
    </div>
  );
}

const events: {
  name?: string;
  description?: JSX.Element | string;
  year?: number;
}[] = [
  {
    name: "Div Academy | Gələcəyi Yazanlar",
    description: "Full-Stack Programming | Təqaüd",
  },
  {
    name: "Holberton School | Pasha Bank",
    description: "Full-Stack | Computer Science | Təqaüd",
  },
  {
    name: "AzTU | Kompüter Elmləri",
    description: "İngiliscə tədrislə | 2024-2028 | Dövlət Sifarişli",
  },
  {
    name: "Technest Təqaüd Proqramı",
    description: "CodeNext | MERN Stack | 100% təqaüd",
  },
  {
    name: "Developer & Creator",
    description: (
      <>
        <a
          rel="noopener noreferrer"
          href={"https://world-countriess.vercel.app/"}
          className="text-blue-500"
          target="_blank"
        >
          World-Countriess
        </a>{" "}
        | Websayt
      </>
    ),
  },
  {
    year: 2024,
  },
  {
    name: "Xəmsə | 🥇 Birincilik",
  },
  {
    name: "Cyber Summer School 2023",
    description: "Beynəxlaq Yay Məktəbi",
  },
  {
    name: "Developer & Creator",
    description: (
      <>
        <a
          href={"https://filmisbest.com/"}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          FilmIsBest
        </a>{" "}
        | Film Websaytı
      </>
    ),
  },
  {
    name: "Text Editor & SEO & Debugger",
    description: (
      <>
        <a
          href={"https://kitabxanano2.vercel.app/"}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kitabxano2
        </a>{" "}
        | StartUp
      </>
    ),
  },
  {
    name: "I Şəxsi İnkişaf Məktəbi",
  },
  {
    year: 2023,
    name: "",
  },
  {
    name: "Gənc Könüllü | Abşeron GİKM",
    description: "3 + 1 ay | Ayın Gənci",
  },
  {
    name: "Google Digital Garage",
    description: "The Fundamentals of Marketing",
  },
  {
    name: "IIENSITU | Marketing Course",
    description: "Istanbul İşletme Enstitüsü",
  },
  { year: 2022 },
];

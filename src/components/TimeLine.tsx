import { events } from "@/lib/timeline";
import { Motion } from "./Motion";

export default function Timeline() {
  return (
    <div className="relative mt-16 flex min-h-[60svh] w-full flex-col items-start justify-start overflow-x-hidden md:w-7/12 xl:w-5/12">
      <div className="absolute flex h-full min-h-[60svh] w-full flex-col">
        <div className="absolute ml-[47px] h-full w-1 rounded-xl bg-gray-300 dark:bg-gray-400 md:ml-[5.34rem]"></div>
      </div>
      {events.map((event, i) => (
        <div key={i} className="relative mt-10 flex flex-row items-center">
          <p className="hidden w-[4.9rem] pr-10 text-xl md:flex">
            {event.year}
          </p>
          <Motion
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
            <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-300"></div>
          </Motion>
          <p className={"flex pl-12 text-xl md:hidden"}>{event.year}</p>
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
            className="flex flex-col pl-0 pr-2 max-sm:space-y-2 md:pl-10"
          >
            <p className="text-wrap text-2xl xl:max-w-[27rem]">{event.name}</p>
            <p className="pr-5 text-sm text-gray-500 dark:text-slate-400 max-sm:text-base">
              {event.description}
            </p>
          </Motion>
        </div>
      ))}
    </div>
  );
}

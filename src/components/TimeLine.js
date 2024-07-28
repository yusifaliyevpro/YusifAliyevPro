import { events } from "@/lib/timeline";
import { Motion } from "./Motion";

export default function Timeline() {
  return (
    <div className="relative mt-16 flex min-h-[60dvh] w-full flex-col items-start justify-start overflow-x-hidden md:w-5/12">
      <div className="absolute flex h-full min-h-[60dvh] w-full flex-col">
        <div className="absolute ml-[46px] h-full w-1 rounded-xl bg-gray-300 md:ml-[84.5px]"></div>
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
            className="ml-10 h-4 min-h-4 w-4 min-w-4 rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] md:ml-0"
          ></Motion>
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
            className="flex flex-col pl-0 md:pl-10"
          >
            <p className="text-wrap text-2xl md:w-[25rem]">{event.name}</p>
            <p className="pr-5 text-sm text-gray-500">{event.description}</p>
          </Motion>
        </div>
      ))}
    </div>
  );
}

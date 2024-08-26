import Projects from "@/components/Projects";
import Timeline from "@/components/TimeLine";
import { addSkills, skills } from "@/lib/skills";
import { technologies } from "@/lib/technologies";
import { Progress, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { Motion } from "../../../components/Motion";
import { Typewriter } from "nextjs-simple-typewriter";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hi👋, I'm a Full-Stack Developer",
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURI("Ana səhifə")}`,
      },
    ],
  },
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-56 pb-20 transition-all">
      <section className="mt-28 flex min-h-[76svh] w-full flex-col items-center justify-between px-8 md:mt-32 md:min-h-[88vh] md:pb-[10vh] lg:px-28 xl:mt-2 xl:min-h-svh xl:flex-row">
        <div className="relative flex flex-col gap-y-2 text-4xl max-lg:w-full max-lg:items-center max-lg:justify-center md:mt-0 md:gap-y-2 md:text-5xl xl:text-6xl">
          <h1 className="sr-only">
            Hi👋, I&apos;m Yusif Aliyev, a Full-Stack Developer
          </h1>
          <Reveal
            first
            className="flex flex-col flex-nowrap items-center justify-center gap-y-2 text-center md:flex-row md:justify-start md:gap-y-0"
          >
            <span className="text-nowrap">Hi👋, I&apos;m a&nbsp;</span>
            <span className="inline-block min-w-72 flex-row bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] bg-clip-text text-center text-transparent md:flex md:items-start md:text-center lg:text-left xl:min-w-[22.7rem]">
              <Typewriter
                words={["Full-Stack", "React", "NextJS"]}
                typeSpeed={130}
                deleteSpeed={90}
                delaySpeed={3000}
                cursor
                loop={0}
                cursorStyle="_"
              />
            </span>
          </Reveal>
          <Reveal
            as="p"
            className="mt-2 flex flex-row items-center justify-center text-nowrap after:text-blue-500 after:content-['.'] md:w-[39rem]"
            first
          >
            Developer
          </Reveal>
        </div>
        <Motion
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 70,
          }}
          className="select-none rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-1 shadow-large"
        >
          <Image
            src={"/profile.webp"}
            width={350}
            quality={100}
            priority
            alt="Profile Picture"
            height={350}
            className="max-h-[250px] max-w-[250px] select-none rounded-full md:max-h-[300px] md:max-w-[300px] lg:px-0 xl:min-h-[360px] xl:min-w-[360px]"
          />
        </Motion>
      </section>
      {/* My ProJects */}
      <section className="flex min-h-svh flex-col items-center">
        <div className="mb-16 text-center text-4xl font-bold md:text-5xl">
          <Reveal as="h2" className="after:text-blue-500 after:content-['.']">
            Layihələrim
          </Reveal>
        </div>
        <Projects />
      </section>

      {/* My Skils */}
      <section className="flex min-h-svh w-full flex-col items-center">
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Kod Bacarıqları
        </Reveal>
        <div className="mt-12 flex w-full flex-col gap-y-8 overflow-x-hidden px-10 sm:px-28 lg:px-56 xl:px-80">
          {skills.map((skill, i) => (
            <Motion
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true }}
              key={i}
              className="flex w-full flex-col items-start justify-around gap-y-2"
            >
              <div className="flex w-full flex-row items-center justify-between">
                <p className="text-xl md:text-2xl">{skill.name}</p>
                <p className="text-lg font-semibold">{skill.value}%</p>
              </div>
              <Progress
                size="lg"
                classNames={{
                  indicator: "to-[#0c8bea] from-[#0B66C2] bg-gradient-to-r",
                }}
                aria-label="Loading..."
                value={skill.value}
              />
            </Motion>
          ))}
        </div>
      </section>

      {/* Other Skills */}
      <section className="flex min-h-[70vh] w-full flex-col items-center md:px-40 xl:px-64">
        <Reveal
          as="h2"
          className="w-full text-center text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Digər Bacarıqlar
        </Reveal>
        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-4 overflow-x-hidden px-3 text-xl md:ml-3 md:gap-x-5 md:px-5">
          {addSkills.map((skill, i) => (
            <Motion
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
                delay: (i + 1) * 0.2,
                stiffness: 70,
              }}
              viewport={{ once: true }}
              key={i}
              className="flex flex-row items-center"
            >
              <p className="rounded-lg bg-gradient-to-r from-blue-600/90 to-blue-500 p-1 px-3 text-lg text-white dark:text-slate-300 md:px-4 lg:text-xl">
                {skill}
              </p>
            </Motion>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="flex min-h-svh w-full flex-col items-center px-5 md:px-52">
        <Reveal
          as="h2"
          className="text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Texnologiyalar
        </Reveal>
        <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5 transition-all lg:gap-x-7 lg:gap-y-7">
          {technologies.map((tech, i) => (
            <Motion
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
              <Tooltip
                shouldFlip
                showArrow
                size="lg"
                placement="top"
                color="primary"
                offset={23}
                content={tech.name}
              >
                {
                  <Image
                    className="select-none object-contain drop-shadow-xl max-lg:size-16"
                    src={tech.icon}
                    alt={tech.name}
                    width={90}
                    height={90}
                  />
                }
              </Tooltip>
            </Motion>
          ))}
        </div>
      </section>

      {/* Təcrübələr */}
      <section className="flex w-full flex-col items-center justify-center">
        <Reveal
          as="h2"
          className="w-full text-center text-5xl font-bold after:text-blue-500 after:content-['.']"
        >
          Təcrübələr
        </Reveal>
        <Timeline />
      </section>
    </main>
  );
}

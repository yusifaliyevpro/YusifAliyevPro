import type { Metadata } from "next";
import Projects from "@/components/Projects";
import Timeline from "@/components/TimeLine";
import Image from "next/image";
import { Motion } from "../../../components/Motion";
import { Typewriter } from "nextjs-simple-typewriter";
import Reveal from "@/components/Reveal";
import { BASE_URL } from "@/lib/constants";
import MyCodeSkills from "@/components/MyCodeSkills";
import MySoftSkills from "@/components/MySoftSkills";
import Technologies from "@/components/Technologies";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Hi👋, I'm a Full-Stack Developer",
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    type: "website",
    siteName: "Yusif Aliyev",
    locale: "az_AZ",
    countryName: "Azerbaijan",
    url: `${BASE_URL}/`,
    images: [
      {
        url: "/profile.png",
        width: 1080,
        height: 1080,
        alt: "Yusif Aliyev Picture",
      },
    ],
  },
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-56 pb-20 transition-all">
      {/* CTA */}
      <section
        className={cn(
          "mt-28 flex min-h-[76svh] w-full flex-col items-center justify-between px-8",
          "md:mt-32 md:min-h-[88vh] md:pb-[10vh]",
          "lg:px-28",
          "xl:mt-2 xl:min-h-svh xl:flex-row",
        )}
      >
        <div
          className={cn(
            "relative ml-3 flex flex-col gap-y-2 text-5xl",
            "max-lg:w-full max-lg:items-center max-lg:justify-center",
            "md:ml-0 md:mt-0 md:gap-y-2 md:text-5xl",
            "xl:text-6xl",
          )}
        >
          <h1 className="sr-only">
            Hi👋, I&apos;m Yusif Aliyev, a Full-Stack Developer
          </h1>
          <Reveal
            first
            className={cn(
              "flex flex-col flex-nowrap items-center justify-center gap-y-2 text-center",
              "md:flex-row md:justify-start md:gap-y-0",
            )}
          >
            <span className="text-nowrap">Hi👋, I&apos;m a&nbsp;</span>
            <span
              className={cn(
                "inline-block min-w-72 flex-row text-center",
                "bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] bg-clip-text text-transparent",
                "md:flex md:items-start md:text-center",
                "lg:text-left",
                "xl:min-w-[22.7rem]",
              )}
            >
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
            className={cn(
              "mt-2 flex flex-row items-center justify-center text-nowrap",
              "after:text-blue-500 after:content-['.']",
              "md:w-[39rem]",
            )}
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
            className={cn(
              "max-h-[250px] max-w-[250px] select-none rounded-full",
              "md:max-h-[300px] md:max-w-[300px]",
              "lg:px-0",
              "xl:min-h-[360px] xl:min-w-[360px]",
            )}
          />
        </Motion>
      </section>

      {/* My ProJects */}
      <section
        aria-label="Layihələrim"
        className="flex min-h-svh flex-col items-center gap-y-16"
      >
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Layihələrim
        </Reveal>
        <Projects />
      </section>

      {/* My Code Skils */}
      <section
        aria-label="Kod Bacarıqları"
        className="flex min-h-svh w-full flex-col items-center"
      >
        <Reveal
          as="h2"
          className="text-center text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Kod Bacarıqları
        </Reveal>
        <MyCodeSkills />
      </section>

      {/* Other Skills */}
      <section
        aria-label="Soft Bacarıqlarım"
        className="flex min-h-[70vh] w-full flex-col items-center md:px-40 xl:px-64"
      >
        <Reveal
          as="h2"
          className="w-full text-center text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Soft Bacarıqlarım
        </Reveal>
        <MySoftSkills />
      </section>

      {/* Technologies */}
      <section
        aria-label="Texnologiyalar"
        className="flex min-h-svh w-full flex-col items-center px-5 md:px-52"
      >
        <Reveal
          as="h2"
          className="text-4xl font-bold after:text-blue-500 after:content-['.'] md:text-5xl"
        >
          Texnologiyalar
        </Reveal>
        <Technologies />
      </section>

      {/* Təcrübələr */}
      <section
        aria-label="Təcrübələr"
        className="flex w-full flex-col items-center justify-center"
      >
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

import type { Metadata } from "next/types";
import Projects from "@/components/Projects";
import Timeline from "@/components/TimeLine";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Typewriter } from "nextjs-simple-typewriter";
import Reveal from "@/components/Reveal";
import { BASE_URL } from "@/lib/constants";
import MySoftSkills from "@/components/MySoftSkills";
import Technologies from "@/components/Technologies";
import { cn } from "@/lib/cn";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-56 pb-20 transition-all">
      <section
        aria-label="CTA"
        className={cn(
          "mt-24 flex min-h-[70svh] w-full flex-col items-center justify-between px-8",
          "md:mt-32 md:min-h-[88vh] md:pb-[10vh]",
          "lg:px-[6.7rem]",
          "xl:mt-2 xl:min-h-svh xl:flex-row",
        )}
      >
        <div
          className={cn(
            "relative ml-3 flex flex-col gap-y-2 text-5xl",
            "max-lg:w-full max-lg:items-center max-lg:justify-center",
            "md:ml-0 md:mt-0 md:gap-y-2 md:text-5xl",
            "xl:text-[4.2rem]",
          )}
        >
          <h1 className="sr-only">Hi👋, I&apos;m Yusif Aliyev, a Full-Stack Developer</h1>
          <p className="sr-only">
            Şəxsi Websaytıma xoş gəlmişsiniz. Mənim kim olduğum haqqında daha çox məlumat almaq istəyirsənsə bütün səhifələrə bir baxış
            atmağını tövsiyə edirəm
          </p>
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
                words={["Full-Stack", "Web", "NextJS"]}
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 70,
          }}
          className="select-none rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-1 shadow-2xl shadow-blue-500"
        >
          <Image
            src={"/Profile.png"}
            width={350}
            height={350}
            priority
            unoptimized
            alt="Profile Picture"
            className={cn(
              "max-h-[250px] max-w-[250px] select-none rounded-full",
              "md:max-h-[300px] md:max-w-[300px]",
              "lg:px-0",
              "xl:min-h-[360px] xl:min-w-[360px]",
            )}
          />
        </motion.div>
      </section>

      {/* <MyCodeSkills /> */}
      <Technologies />
      <Projects />
      <MySoftSkills />
      <Timeline />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Yusif Aliyev | Hi👋, I'm a Full-Stack Developer",
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
        url: "/Profile.png",
        width: 500,
        height: 500,
        alt: "Yusif Aliyev Picture",
      },
    ],
  },
};

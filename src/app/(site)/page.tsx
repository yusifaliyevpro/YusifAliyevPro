import type { Metadata } from "next/types";

import MySoftSkills from "@/components/MySoftSkills";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Technologies from "@/components/Technologies";
import Timeline from "@/components/TimeLine";
import { cn } from "@/lib/cn";
import { BASE_URL } from "@/lib/constants";
import { countryName, creator, locale, profileOGImage } from "@/src/lib/shared-metadata";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-56 pb-20 transition-all">
      <section
        aria-label="CTA"
        className={cn(
          "mt-24 flex min-h-[70svh] w-full flex-col items-center justify-between px-8",
          "md:mt-32 md:min-h-[88svh] md:pb-[10svh]",
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
            Şəxsi Websaytıma xoş gəlmişsiniz. Mənim kim olduğum haqqında daha çox məlumat almaq istəyirsənsə
            bütün səhifələrə bir baxış atmağını tövsiyə edirəm
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
                cursor
                cursorStyle="_"
                delaySpeed={3000}
                deleteSpeed={90}
                loop={0}
                typeSpeed={130}
                words={["Full-Stack", "Web", "NextJS"]}
              />
            </span>
          </Reveal>
          <Reveal
            first
            as="p"
            className={cn(
              "mt-2 flex flex-row items-center justify-center text-nowrap",
              "after:text-blue-500 after:content-['.']",
              "md:w-[39rem]",
            )}
          >
            Developer
          </Reveal>
        </div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="select-none rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-1 shadow-2xl shadow-blue-500"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.3,
            stiffness: 70,
            type: "spring",
          }}
        >
          <Image
            priority
            alt="Profile Picture"
            height={350}
            quality={100}
            src={"/Profile.png"}
            width={350}
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
  alternates: { canonical: `/` },
  openGraph: {
    countryName,
    images: [profileOGImage],
    locale,
    siteName: creator,
    type: "website",
    url: `${BASE_URL}/`,
  },
  title: "Yusif Aliyev | Hi👋, I'm a Full-Stack Developer",
};

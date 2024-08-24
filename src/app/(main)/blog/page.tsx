import Blogs from "@/components/Blogs";
import { RefreshBlogs } from "@/components/Refresh";
import Reveal from "@/components/Reveal";
import Search from "@/components/Search";
import { isInDevelopment } from "@/lib/constants";
import { getBlogs } from "@/lib/utils";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Typewriter } from "nextjs-simple-typewriter";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bloq",
    description:
      "Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram.",
    alternates: {
      canonical: `/blog`,
    },
    openGraph: {
      url: `/blog`,
      images: [
        {
          url: `/api/og?title=${encodeURI("Bloq")}`,
        },
      ],
    },
  };
}

export default async function BlogsPage() {
  const { isEnabled } = draftMode();
  const blogs = await getBlogs({ isEnabled });
  const totalBlogCount = blogs.length;
  return (
    <main
      className={`flex min-h-[100svh] flex-col items-center pt-20 font-signika`}
    >
      <div className="bg-gradiesnt-to-b mt-5 flex w-full flex-col items-center justify-center from-blue-50/100 to-blue-50 py-5 lg:py-10">
        <div className="flex w-full flex-col items-center justify-between px-5 md:flex-row md:px-16 lg:px-32">
          <div className={`w-full space-y-5 font-poppins sm:w-fit`}>
            <Reveal
              as="h1"
              first
              className="w-full text-left text-4xl font-semibold"
            >
              ✍️ Bloq yazılarım
            </Reveal>
            <p className="sr-only">
              Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi
              paylaşıram.
            </p>
            <span className="flex h-24 max-w-[25rem] text-wrap pl-3 text-lg font-normal text-slate-600 dark:text-slate-400 sm:h-12">
              <Typewriter
                words={[
                  " Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram.",
                ]}
                typeSpeed={90}
                loop={1}
              />
            </span>
          </div>
          <Search />
        </div>
        <Blogs blogs={blogs} totalBlogCount={totalBlogCount} />
      </div>
      {(isEnabled || isInDevelopment) && <RefreshBlogs />}
    </main>
  );
}

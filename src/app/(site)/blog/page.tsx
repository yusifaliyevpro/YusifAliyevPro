import type { BLOGS_POSTS_QUERYResult } from "@/src/sanity/types";
import type { Metadata } from "next/types";

import BlogPosts from "@/components/BlogPosts";
import Search from "@/components/Search";
import { getBlogPosts } from "@/lib/utils";
import Subscribe from "@/src/components/Subsciption";
import { countryName, creator, locale, profileOGImage } from "@/src/lib/shared-metadata";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import { FaRegBell } from "react-icons/fa6";

export default async function BlogPostsPage() {
  const blogPosts = await getBlogPosts();
  return <BlogPostsPageUI blogPosts={blogPosts} />;
}

export function BlogPostsPageUI({ blogPosts }: { blogPosts: BLOGS_POSTS_QUERYResult }) {
  return (
    <main className="flex min-h-svh flex-col items-center gap-y-6 scroll-smooth pt-20 font-signika">
      <section className="bg-gradiesnt-to-b flex w-full flex-col items-center justify-center from-blue-50/100 to-blue-50 py-5 lg:py-10">
        <header className="flex w-full flex-col items-center justify-between px-5 md:flex-row md:px-16 lg:px-32">
          <div className="w-full space-y-5 font-poppins sm:w-fit">
            <h1 className="w-full text-left text-4xl font-semibold">✍️ Bloq yazılarım</h1>
            <p className="sr-only">Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram.</p>
            <span className="flex h-24 max-w-[25rem] text-wrap pl-3 text-lg font-normal text-slate-600 dark:text-slate-400 sm:h-12">
              <Typewriter
                loop={1}
                typeSpeed={90}
                words={[" Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram."]}
              />
            </span>
          </div>
          <div className="mt-5 flex flex-row items-center justify-center">
            <Link href="#subscription">
              <Button isIconOnly color="primary">
                <FaRegBell className="size-5" />
              </Button>
            </Link>
            <Search />
          </div>
        </header>
      </section>
      <BlogPosts blogPosts={blogPosts} />
      <Subscribe />
    </main>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: `/blog` },
  description: "Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram.",
  openGraph: {
    countryName,
    images: [profileOGImage],
    locale,
    siteName: creator,
    type: "website",
    url: `/blog`,
  },
  title: "✍️ Bloq yazılarım: ✨🧑‍💻🌍🎨",
};
export const BlogPostsMetadata = metadata;

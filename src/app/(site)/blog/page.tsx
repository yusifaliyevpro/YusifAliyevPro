import type { BlogPostsQueryResult } from "@/src/sanity/types";
import type { Metadata } from "next/types";
import BlogPosts from "@/components/BlogPosts";
import Search from "@/components/Search";
import Subscribe from "@/components/Subsciption";
import { profileOGImage, sharedMetadata, sharedOpenGraph } from "@/src/lib/shared-metadata";
import { Button } from "@heroui/button";
import { Typewriter } from "nextjs-simple-typewriter";
import { FaRegBell } from "react-icons/fa6";
import { getBlogPosts } from "@/data-access/blog/get";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Blog ✍️✨🌍🎨",
  alternates: { canonical: `/blog` },
  description: "I share my thoughts, experiences, and stories on various topics.",
  openGraph: {
    type: "article",
    url: `/blog`,
    images: profileOGImage,
    ...sharedOpenGraph,
  },
};

export default async function Page() {
  const blogPosts = await getBlogPosts();
  return <BlogPostsPageUI blogPosts={blogPosts} />;
}

export function BlogPostsPageUI({ blogPosts }: { blogPosts: BlogPostsQueryResult }) {
  return (
    <main className="font-signika flex min-h-svh flex-col items-center gap-y-6 scroll-smooth pt-20">
      <section className="bg-gradiesnt-to-b flex w-full flex-col items-center justify-center from-blue-50 to-blue-50 py-5 lg:py-10">
        <header className="flex w-full flex-col items-center justify-between px-5 md:flex-row md:px-16 lg:px-32">
          <div className="font-poppins w-full space-y-5 sm:w-fit">
            <h1 className="w-full text-left text-4xl font-semibold">✍️ My Blog Posts</h1>
            <p className="sr-only">I share my thoughts, experiences, and stories on various topics.</p>
            <span className="flex h-24 max-w-100 pl-3 text-lg font-normal text-wrap text-slate-600 sm:h-12">
              <Typewriter
                loop={1}
                typeSpeed={90}
                words={["I share my thoughts, experiences, and stories on various topics."]}
              />
            </span>
          </div>
          <div className="mt-5 flex flex-row items-center justify-center">
            <a href="#subscription">
              <Button isIconOnly color="primary">
                <FaRegBell className="size-5" />
              </Button>
            </a>
            <Search />
          </div>
        </header>
      </section>
      <section className="mb-4 flex w-full items-center justify-center rounded-xl">
        <p className="bg-linear-to-t from-blue-300 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent drop-shadow-sm">
          🌐 Multilingual posts coming soon. Stay tuned!
        </p>
      </section>
      <BlogPosts blogPosts={blogPosts} />
      <Subscribe />
    </main>
  );
}

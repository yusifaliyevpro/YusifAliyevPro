import Blogs from "@/components/Blogs";
import { RefreshBlog } from "@/components/Refresh";
import Search from "@/components/Search";
import { getBlogPostsPreview } from "@/lib/utils";
import Subscribe from "@/src/components/Subsciption";
import type { Metadata } from "next/types";
import { Typewriter } from "nextjs-simple-typewriter";

export default async function BlogsPage() {
  const blogPosts = await getBlogPostsPreview();
  if (typeof blogPosts === "string") {
    console.log(blogPosts);
    return null;
  }
  return (
    <main className="flex min-h-svh flex-col items-center gap-y-6 pt-20 font-signika">
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
          <div className="flex flex-row items-center justify-center">
            <Search />
          </div>
        </header>
      </section>
      <Blogs blogPosts={blogPosts} />
      <Subscribe />
      <RefreshBlog />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "✍️ Bloq yazılarım: ✨🧑‍💻🌍🎨",
    description: "Müxtəlif mövzularda düşüncələrimi, təcrübələrimi və hekayələrimi paylaşıram.",
    alternates: {
      canonical: `/blog`,
    },
    openGraph: {
      url: `/blog`,
      type: "website",
      siteName: "Yusif Aliyev",
      locale: "az_AZ",
      countryName: "Azerbaijan",
      images: [
        {
          url: "/Profile.png",
          width: 1080,
          height: 1080,
          alt: "Yusif Aliyev Picture",
        },
      ],
    },
  };
}

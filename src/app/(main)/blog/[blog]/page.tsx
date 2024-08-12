import { getBlog, getSlugs } from "@/lib/utils";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FiWatch } from "react-icons/fi";
import RichText from "@/components/RichText";
import Link from "next/link";
import dateFormatter, { readtimeCalculator } from "@/lib/formatters";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { RefreshSpecificBlog } from "@/components/Refresh";
import { isInDevelopment } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const blog = await getBlog({ params });
  if (!blog) notFound();
  return {
    title: blog.title,
    description: blog.description,
    keywords: [blog.title, "bloq", "blog"],
    openGraph: {
      url: `/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: ["Yusif Aliyev"],
    },
  };
}

export async function generateStaticParams() {
  const blogSlugs = await getSlugs();
  return blogSlugs.map((blogSlug) => ({
    blog: blogSlug.slug,
  }));
}

export default async function BlogPage({ params }) {
  const { isEnabled } = draftMode();
  const blog = await getBlog({ params });

  if (!blog) notFound();
  return (
    <main
      className={`a flex min-h-[100dvh] w-full flex-col items-center justify-center pb-10 font-sans transition-all`}
    >
      <article className="relative top-0 flex min-h-[50dvh] w-full flex-col justify-center bg-gradient-to-tr from-blue-500 to-blue-200 pt-5 md:px-10 lg:px-24 xl:px-44">
        <div className="mt-24 flex min-h-[50dvh] w-full flex-col items-center border-b-[0px] border-solid border-gray-300 bg-white p-8 py-12 md:rounded-t-md md:border-b-[0.8px] lg:shadow-ltr-small">
          <div className="flex flex-row items-center justify-center gap-x-3">
            <Image
              src={"/profile.png"}
              alt="Profile Picture"
              width={50}
              height={50}
              unoptimized
              className="rounded-full shadow-large"
            />
            <address className="font-bold not-italic">
              <Link href={"/"} rel="author" className="hover:text-blue-500">
                Yusif Aliyev
              </Link>
            </address>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-x-5 font-semibold text-gray-500">
            <div className="flex flex-row items-center gap-x-1">
              <GoClock />
              <time
                dateTime={blog.publishedAt}
                className="text-md tabular-nums"
              >
                {dateFormatter({ date: blog.publishedAt })}
              </time>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <FiWatch />
              <p className="text-md tabular-nums">
                {readtimeCalculator({ text: blog.plainText })} dəq oxuma
              </p>
            </div>
          </div>
          <header className="flex flex-col items-center justify-center">
            <h1 className="flex px-5 py-5 text-center text-4xl font-bold leading-snug lg:text-5xl">
              {blog.title}
            </h1>
            <p className="text-pretty text-center text-lg font-normal leading-normal text-gray-500 md:px-12 lg:px-20 lg:text-xl">
              {blog.description}
            </p>
          </header>
        </div>
      </article>
      <div className="flex w-full flex-col items-start justify-center md:px-10 lg:px-24 xl:px-44">
        <div className="flex min-h-[100dvh] w-full flex-col md:rounded-b-md lg:shadow-small">
          <figure className="relative aspect-[16/9] h-full border-solid md:border-b-1">
            <Image
              src={blog.poster}
              priority
              alt="Blog Poster"
              fill
              className="object-cover p-3 md:p-0"
            />
            <figcaption className="sr-only">{blog.title}</figcaption>
          </figure>
          <article className="flex flex-col px-6 pb-10 pt-6 transition-all md:px-12 lg:px-20">
            <RichText blogText={blog.text} />
          </article>
        </div>
      </div>
      {(isEnabled || isInDevelopment) && <RefreshSpecificBlog />}
    </main>
  );
}

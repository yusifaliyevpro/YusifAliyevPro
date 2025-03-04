import Gallery from "@/components/Gallery";
import RichText from "@/components/RichText";
import { cn } from "@/lib/cn";
import { dateFormatter, getReadTime } from "@/lib/formatters";
import { getBlogPost, getBlogPosts } from "@/lib/utils";
import SanityImage from "@/src/components/SanityImage";
import { countryName, creator, keywords, locale } from "@/src/lib/shared-metadata";
import { BLOG_POST_QUERYResult } from "@/src/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import React from "react";
import { FiWatch } from "react-icons/fi";
import { GoClock } from "react-icons/go";

export function BlogPostPageUI({ blog }: { blog: BLOG_POST_QUERYResult }) {
  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center pb-10 font-sans transition-all">
      <article
        className={cn(
          "relative top-0 flex min-h-[50svh] w-full flex-col justify-center pt-5",
          "md:px-10",
          "lg:px-24",
          "xl:px-44",
          "bg-gradient-to-tr from-blue-500 to-blue-200",
        )}
      >
        <header
          className={cn(
            "mt-24 flex min-h-[50svh] w-full flex-col items-center bg-white p-8 py-12",
            "md:rounded-t-md md:border-b-[0.8px]",
            "lg:shadow-ltr-small",
            "dark:border-0 dark:bg-foreground",
            "border-b-[0px] border-solid border-gray-300",
          )}
        >
          <div className="flex flex-row items-center justify-center gap-x-3">
            <Image
              unoptimized
              alt="Yusif Aliyev Picture"
              className="rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-[2px] shadow-large shadow-blue-500"
              height={50}
              src={"/Profile.png"}
              width={50}
            />
            <address className="font-bold not-italic">
              <Link className="hover:text-blue-500" href={"/"} rel="author">
                Yusif Aliyev
              </Link>
            </address>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-x-5 font-semibold text-gray-500">
            <div className="flex flex-row items-center gap-x-1">
              <GoClock aria-hidden />
              <time className="text-md tabular-nums" dateTime={blog.publishedAt}>
                {dateFormatter(blog.publishedAt)}
              </time>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <FiWatch aria-hidden />
              <p className="text-md tabular-nums">{getReadTime(blog.plainText)} dəq oxuma</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="flex px-5 py-5 text-center text-4xl font-bold leading-snug lg:text-5xl">{blog.title}</h1>
            <p
              className={cn(
                "text-pretty text-center text-lg font-normal leading-normal text-gray-500",
                "md:px-12",
                "lg:px-20 lg:text-xl",
                "dark:text-slate-300/80",
              )}
            >
              {blog.description}
            </p>
          </div>
        </header>
      </article>
      <div className="flex w-full flex-col items-start justify-center md:px-10 lg:px-24 xl:px-44">
        <div className="flex min-h-svh w-full flex-col md:rounded-b-md lg:shadow-small">
          <figure className="relative aspect-[16/9] h-full border-solid dark:border-0 md:border-b-1">
            <SanityImage
              fill
              priority
              alt="Blog Poster"
              blurDataURL={blog.posterLqip}
              className="object-cover p-3 md:p-0"
              placeholder="blur"
              src={blog.poster}
            />
            <figcaption className="sr-only">{blog.title}</figcaption>
          </figure>
          <article className="flex flex-col px-6 pb-10 pt-6 transition-all md:px-12 lg:px-20">
            <RichText blogText={blog.text} />
            {blog.gallery && <Gallery images={blog.gallery} />}
          </article>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const blogSlugs = await getBlogPosts();
  return blogSlugs.map((blogSlug) => ({
    slug: blogSlug.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  if (!blog) notFound();
  return <BlogPostPageUI blog={blog} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  if (!blog) notFound();
  return {
    title: blog.title,
    description: blog.description.slice(0, 152).concat("..."),
    keywords: [...blog.tags, ...keywords, "bloq", "blog"],
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      url: `/blog/${blog.slug}`,
      siteName: creator,
      locale,
      countryName,
      type: "article",
      modifiedTime: blog._updatedAt,
      publishedTime: blog.publishedAt,
      authors: creator,
      tags: blog.tags,
      images: [{ url: blog.poster, width: 1200, height: 630, alt: blog.title + " Poster" }],
    },
  };
}

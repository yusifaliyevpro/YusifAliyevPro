import { createDataAttribute, type PortableTextBlock } from "next-sanity";
import type { Metadata } from "next/types";

import Gallery from "@/components/Gallery";
import RichText from "@/components/RichText";
import { dateFormatter, getReadTime } from "@/lib/format";
import { getBlogPost, getBlogPosts } from "@/data-access/blog/get";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FiWatch } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import type { BlogPostQueryResult } from "@/sanity/types";
import { sharedMetadata, sharedOpenGraph } from "@/lib/shared-metadata";

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  if (!blogPost) notFound();
  return {
    ...sharedMetadata,
    title: blogPost.title,
    alternates: { canonical: `/blog/${blogPost.slug}` },
    description: blogPost.description.slice(0, 152).concat("..."),
    openGraph: {
      ...sharedOpenGraph,
      images: [{ alt: blogPost.title + " Poster", height: 630, url: blogPost.poster as string, width: 1200 }],
      modifiedTime: blogPost._updatedAt,
      publishedTime: blogPost.publishedAt,
      tags: blogPost.tags,
      type: "article",
      url: `/blog/${blogPost.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  if (!blogPost) notFound();
  return <BlogPostPageUI blogPost={blogPost} />;
}

export function BlogPostPageUI({ blogPost }: { blogPost: NonNullable<BlogPostQueryResult> }) {
  const sanityAttr = createDataAttribute({
    id: blogPost._id,
    type: blogPost._type,
  });

  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center pb-10 font-sans transition-all">
      <article className="relative top-0 flex min-h-[50svh] w-full flex-col justify-center bg-linear-to-tr from-blue-500 to-blue-200 pt-5 md:px-10 lg:px-24 xl:px-44">
        <header className="lg:shadow-ltr-small mt-24 flex min-h-[50svh] w-full flex-col items-center border-b-0 border-solid border-gray-300 bg-white p-8 py-12 md:rounded-t-md md:border-b-[0.8px]">
          <div className="flex flex-row items-center justify-center gap-x-3">
            <Image
              alt="Yusif Aliyev Picture"
              className="shadow-large rounded-full bg-linear-to-r from-[#0c8bea] to-[#0B66C2] p-[2px] shadow-blue-500"
              height={50}
              quality={100}
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
              <time
                className="text-md tabular-nums"
                dateTime={blogPost.publishedAt}
                data-sanity={sanityAttr("publishedAt").toString()}
              >
                {dateFormatter(blogPost.publishedAt)}
              </time>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <FiWatch aria-hidden />
              <p className="text-md tabular-nums">{getReadTime(blogPost.plainText)} min read</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="flex px-5 py-5 text-center text-4xl leading-snug font-bold lg:text-5xl">
              {blogPost.title}
            </h1>
            <p className="text-center text-lg leading-normal font-normal text-pretty text-gray-500 md:px-12 lg:px-20 lg:text-xl">
              {blogPost.description}
            </p>
          </div>
        </header>
      </article>
      <div className="flex w-full flex-col items-start justify-center md:px-10 lg:px-24 xl:px-44">
        <div className="lg:shadow-small flex min-h-svh w-full flex-col md:rounded-b-md">
          <figure className="relative aspect-video h-full border-solid border-gray-200 md:border-b">
            <Image
              fill
              priority
              alt="Blog Poster"
              blurDataURL={blogPost.posterLqip!}
              className="object-cover p-3 md:p-0"
              placeholder="blur"
              src={blogPost.poster!}
            />
            <figcaption className="sr-only">{blogPost.title}</figcaption>
          </figure>
          <article className="flex flex-col px-6 pt-6 pb-10 transition-all md:px-12 lg:px-20">
            <RichText blogText={blogPost.text as PortableTextBlock[]} />
            {blogPost.gallery && <Gallery images={blogPost.gallery} />}
          </article>
        </div>
      </div>
    </main>
  );
}

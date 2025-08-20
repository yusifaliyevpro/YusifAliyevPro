"use client";

import { dateFormatter } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GoClock } from "react-icons/go";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Fuse from "fuse.js";
import type { BlogPostsQueryResult } from "@/sanity/types";

const LoadMore = dynamic(() => import("./LoadMore"), { loading: () => <p>Loading...</p> });

export default function Blogs({ blogPosts }: { blogPosts: BlogPostsQueryResult }) {
  const [results, setResults] = useState(blogPosts);
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.trim();
  const page = Number(searchParams.get("page")) || 1;
  const fuse = useMemo(
    () => new Fuse(blogPosts, { keys: ["title", "description"], threshold: 0.4 }),
    [blogPosts],
  );

  useEffect(() => {
    const runSearch = async () => {
      if (search) {
        const result = fuse.search(search);
        setResults(result.map(({ item }) => item));
      } else {
        setResults(blogPosts.slice(0, page * 12));
      }
    };
    runSearch();
  }, [blogPosts, fuse, search, page]);

  return (
    <>
      <section
        aria-label="Blog Posts"
        className="relative grid w-full grid-cols-1 place-items-stretch items-center justify-center gap-x-7 gap-y-9 px-6 sm:grid-cols-2 md:grid-cols-2 md:px-20 lg:grid-cols-2 lg:px-36 xl:grid-cols-3"
      >
        {results.map((blogPost) => (
          <article
            key={blogPost.slug}
            className="shadow-medium col-span-1 flex h-full cursor-pointer flex-col items-center justify-start rounded-lg border-solid bg-white pb-5 transition-all hover:scale-105"
          >
            <Link href={`/blog/${blogPost.slug}`} className="flex flex-col items-center justify-between">
              <figure className="flex aspect-video max-h-68 w-full rounded-t-lg border-t-0 border-b border-solid border-gray-200">
                <Image
                  alt={`${blogPost.title} Poster`}
                  blurDataURL={blogPost.posterMetadata.lqip as string}
                  className="size-full rounded-t-lg object-cover"
                  height={blogPost.posterMetadata.dimensions?.height}
                  placeholder="blur"
                  src={blogPost.poster!}
                  width={blogPost.posterMetadata.dimensions?.width}
                />
                <figcaption className="sr-only">{blogPost.title} Poster</figcaption>
              </figure>
              <div className="w-full pr-4 pl-6">
                <h2 className="my-5 line-clamp-2 min-h-14 text-left text-2xl font-bold">{blogPost.title}</h2>
                <p className="font-signika line-clamp-2 w-fit text-lg leading-relaxed font-medium text-wrap text-gray-500 md:line-clamp-6">
                  {blogPost.description}
                </p>
              </div>
              <div className="my-7 flex w-full flex-row items-center justify-between px-7 pr-8">
                <div className="flex flex-row items-center gap-x-4">
                  <Image
                    alt="Profile Picture"
                    className="shadow-medium rounded-full bg-linear-to-r from-[#0c8bea] to-[#0B66C2] p-[2px]"
                    height={45}
                    quality={100}
                    src="/Profile.png"
                    width={45}
                  />
                  <p className="font-medium">Yusif Aliyev</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-1 text-gray-700">
                  <GoClock />
                  <time className="text-sm font-normal tabular-nums" dateTime={blogPost.publishedAt}>
                    {dateFormatter(blogPost.publishedAt)}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
      {!search && blogPosts.length !== results.length && <LoadMore />}
    </>
  );
}

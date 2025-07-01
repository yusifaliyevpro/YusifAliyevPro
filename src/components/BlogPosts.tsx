"use client";

import { cn } from "@/lib/cn";
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
        className={cn(
          "relative grid w-full grid-cols-1 place-items-center items-center justify-center gap-x-7 gap-y-9 px-6",
          "sm:grid-cols-2",
          "md:grid-cols-2 md:px-20",
          "lg:grid-cols-2 lg:px-36",
          "xl:grid-cols-3",
        )}
      >
        {results.map((blog) => (
          <article
            key={blog.slug}
            className={cn(
              "cursor-pointer rounded-lg border-solid bg-white pb-5 shadow-medium transition-all",
              "col-span-1 flex flex-col items-center justify-start",
              "hover:scale-105",
              "dark:bg-gray-800",
            )}
          >
            <Link href={`blog/${blog.slug}`}>
              <figure
                className={cn(
                  "flex aspect-[16/9] max-h-[17rem] w-full rounded-t-lg",
                  "border-b-1 border-t-0 border-solid dark:border-0",
                )}
              >
                <Image
                  alt={`${blog.title} Poster`}
                  blurDataURL={blog.posterMetadata.lqip as string}
                  className="size-full rounded-t-lg object-cover"
                  height={blog.posterMetadata.dimensions?.height}
                  placeholder="blur"
                  src={blog.poster as string}
                  width={blog.posterMetadata.dimensions?.width}
                />
                <figcaption className="sr-only">{blog.title} Poster</figcaption>
              </figure>
              <div className="pl-6 pr-4">
                <h3 className="my-5 line-clamp-1 text-left text-2xl font-bold dark:text-slate-300">
                  {blog.title}
                </h3>
                <p
                  className={cn(
                    "line-clamp-2 w-fit text-wrap font-signika text-lg font-medium leading-relaxed text-gray-500",
                    "md:line-clamp-6",
                    "dark:text-slate-400/80",
                  )}
                >
                  {blog.description}
                </p>
              </div>
              <div className="flex w-full flex-row items-center justify-between px-7 py-5 pr-8">
                <div className="flex flex-row items-center gap-x-4">
                  <Image
                    alt="Profile Picture"
                    className="rounded-full bg-gradient-to-r from-[#0c8bea] to-[#0B66C2] p-[2px] shadow-medium"
                    height={45}
                    quality={100}
                    src="/Profile.png"
                    width={45}
                  />
                  <p className="font-medium">Yusif Aliyev</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-1 text-gray-700 dark:text-slate-400">
                  <GoClock />
                  <time className="text-sm font-normal tabular-nums" dateTime={blog.publishedAt}>
                    {dateFormatter(blog.publishedAt)}
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

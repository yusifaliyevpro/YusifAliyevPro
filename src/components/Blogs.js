"use client";
import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { Button } from "@nextui-org/react";
import Fuse from "fuse.js";
import useQuery from "@/lib/store";
import { useEffect, useState } from "react";
import dateFormatter from "@/lib/formatters";

export default function Blogs({ blogs, totalBlogCount }) {
  const [page, setPage] = useState(1);
  const search = useQuery((state) => state.search);
  const setResultCount = useQuery((state) => state.setResultCount);
  const resultCount = useQuery((state) => state.resultCount);
  let renderedBlogs = blogs;
  const options = {
    keys: ["title", "description"],
    threshold: 0.4,
  };
  const fuse = new Fuse(blogs, options);
  if (search) {
    const result = fuse.search(search);
    renderedBlogs = result.map(({ item }) => item);
  } else {
    renderedBlogs = renderedBlogs.slice(0, page * 12);
  }
  useEffect(() => {
    setResultCount(renderedBlogs.length);
  }, [renderedBlogs]);

  return (
    <>
      <div
        className={`relative mt-16 grid w-full grid-flow-row grid-cols-1 place-items-center items-center justify-center gap-x-10 gap-y-9 px-6 sm:grid-cols-2 md:grid-cols-2 md:px-20 lg:grid-cols-2 lg:px-40 xl:grid-cols-3`}
      >
        {renderedBlogs.map((blog, i) => (
          <article
            key={i}
            className="col-span-1 flex h-auto cursor-pointer flex-col items-center justify-start rounded-lg border-solid bg-white pb-5 shadow-medium shadow-blue-600 transition-all hover:scale-105"
          >
            <Link href={`/blog/${blog.slug}`}>
              <figure className="borde-x-0 flex aspect-[16/9] max-h-[17rem] w-full rounded-t-lg border-b-1 border-t-0 border-solid">
                <Image
                  src={blog.poster}
                  width={250}
                  height={200}
                  className="w-full rounded-t-lg object-cover"
                  alt={`${blog.title} Poster`}
                />
                <figcaption className="sr-only">{blog.title} Poster</figcaption>
              </figure>
              <div className="px-6">
                <h2 className="line-clamp-3 py-5 text-2xl font-bold">
                  {blog.title}
                </h2>
                <p className="line-clamp-1 w-fit text-wrap text-lg font-normal text-gray-500 md:line-clamp-5">
                  {blog.description}
                </p>
              </div>
              <div className="flex w-full flex-row items-center justify-between px-7 py-5 pr-8">
                <div className="flex flex-row items-center gap-x-4">
                  <Image
                    src="/profile.png"
                    width={45}
                    height={45}
                    unoptimized
                    alt="Profile Picture"
                    className="rounded-full shadow-medium"
                  />
                  <p className="font-medium">Yusif Aliyev</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-1 text-gray-700">
                  <GoClock />
                  <time
                    dateTime={blog.publishedAt}
                    className="text-sm font-normal tabular-nums"
                  >
                    {dateFormatter({ date: blog.publishedAt })}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {totalBlogCount > resultCount && !search && (
        <Button
          onPress={() => setPage(page + 1)}
          size="lg"
          className="mt-10 bg-gradient-to-r from-blue-500 to-blue-400 text-lg text-white"
        >
          Daha çox göstər
        </Button>
      )}
    </>
  );
}

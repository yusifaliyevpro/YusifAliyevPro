import { PortableText } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import { Suspense } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function RichText({ blogText }) {
  const components = {
    types: {
      image: ({ value }) => {
        const { width, height } = getImageDimensions(value);
        return (
          <div
            className={`flex w-full flex-col py-7 aspect-[${width / height}] items-center justify-center`}
          >
            <Image
              src={urlForImage(value)}
              width={width}
              height={height}
              alt=""
              className="h-fit w-fit rounded-md object-cover"
            />
          </div>
        );
      },
      code: ({ value }) => {
        return (
          <Suspense fallback={<p>Loading...</p>}>
            <CodeBlock
              code={value.code}
              fileName={value.filename}
              language={value.language}
            />
          </Suspense>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="pb-5 pt-10 text-5xl font-bold text-gray-800 md:text-6xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="pb-5 pt-10 text-4xl font-bold text-gray-800 md:text-5xl">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="pb-5 pt-10 text-3xl font-bold text-gray-800 md:text-4xl">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="pb-5 pt-10 text-2xl font-bold text-gray-800 md:text-3xl">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="pb-5 pt-10 text-xl font-bold text-gray-800 md:text-2xl">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="pb-5 pt-10 text-lg font-bold text-gray-800 md:text-xl">
          {children}
        </h6>
      ),
      normal: ({ children }) => (
        <p className="pb-4 text-base font-medium text-gray-500 md:text-lg">
          {children}
        </p>
      ),
    },
    marks: {
      link: ({ value, children }) => (
        <Link
          href={value.href}
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          {children}
        </Link>
      ),
    },
  };

  return <PortableText value={blogText} components={components} />;
}

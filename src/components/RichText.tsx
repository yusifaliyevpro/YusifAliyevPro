import { PortableText, PortableTextComponents } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import CodeBlock from "@/components/CodeBlock";
import { Suspense } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { CodeInputValue } from "@sanity/code-input";

export default function RichText({ blogText }) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }: { value: string }) => {
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
      code: ({ value }: { value: CodeInputValue }) => {
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
        <h1 className="pb-5 pt-10 text-5xl font-bold text-gray-800 dark:text-slate-300 md:text-6xl">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="pb-5 pt-10 text-4xl font-bold text-gray-800 dark:text-slate-300 md:text-5xl">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="pb-5 pt-10 text-3xl font-bold text-gray-800 dark:text-slate-300 md:text-4xl">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="pb-5 pt-10 text-2xl font-bold text-gray-800 dark:text-slate-300 md:text-3xl">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="pb-5 pt-10 text-xl font-bold text-gray-800 dark:text-slate-300 md:text-2xl">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="pb-5 pt-10 text-lg font-bold text-gray-800 dark:text-slate-300 md:text-xl">
          {children}
        </h6>
      ),
      normal: ({ children }) => (
        <p className="pb-4 text-base font-medium text-gray-500 dark:text-slate-400 md:text-lg">
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-6 ml-5 border-3 border-y-white border-l-yellow-400 border-r-white pl-6 text-base text-gray-500 md:text-lg">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({
        value,
        children,
      }: {
        value?: { href: string };
        children: React.ReactNode;
      }) => (
        <a
          href={value.href}
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="my-8 ml-12 text-base md:text-lg">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="my-8 ml-12 text-base md:text-lg">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="mt-3 list-disc text-gray-600">{children}</li>
      ),
      number: ({ children }) => (
        <li className="mt-3 list-decimal text-gray-600">{children}</li>
      ),
    },
  };

  return <PortableText value={blogText} components={components} />;
}

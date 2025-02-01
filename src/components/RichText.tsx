import { PortableText, PortableTextComponents } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import CodeBlock from "@/components/CodeBlock";
import { type ReactNode, Suspense } from "react";
import { CodeInputValue } from "@sanity/code-input";
import { SanityImageAsset } from "@/sanity.types";
import SanityImage from "./SanityImage";

export default function RichText({ blogText }) {
  return <PortableText value={blogText} components={components} />;
}

const components: PortableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: SanityImageAsset & { image: string; alt: string; lqip: string };
    }) => {
      const { width, height, aspectRatio } = getImageDimensions(value);
      return (
        <figure
          className={`flex size-full flex-col py-7 aspect-[${aspectRatio}] items-center justify-center`}
        >
          <SanityImage
            src={value.image}
            width={width}
            height={height}
            alt={value.alt || ""}
            placeholder="blur"
            loading="lazy"
            blurDataURL={value.lqip}
            className="rounded-md object-cover"
          />
          <figcaption className="sr-only">{value.alt}</figcaption>
        </figure>
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
      <h1 className="pb-5 pt-10 text-5xl font-bold text-gray-800 dark:text-slate-200 md:text-6xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="pb-5 pt-10 text-4xl font-bold text-gray-800 dark:text-slate-200 md:text-5xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pb-5 pt-10 text-3xl font-bold text-gray-800 dark:text-slate-200 md:text-4xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pb-5 pt-10 text-2xl font-bold text-gray-800 dark:text-slate-200 md:text-3xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="pb-5 pt-10 text-xl font-bold text-gray-800 dark:text-slate-200 md:text-2xl">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="pb-5 pt-10 text-lg font-bold text-gray-800 dark:text-slate-200 md:text-xl">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="pb-4 text-lg font-medium text-gray-500 dark:text-slate-200">
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
      children: ReactNode;
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
      <ul className="ml-8 text-base md:ml-12 md:text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-8 text-base md:ml-12 md:text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mt-2 list-disc text-gray-600 dark:text-slate-300">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="mt-2 list-decimal text-gray-600 dark:text-slate-300">
        {children}
      </li>
    ),
  },
};

import type { SanityImageAsset } from "@/sanity/types";
import type { CodeInputValue } from "@sanity/code-input";
import type { ReactNode } from "react";

import CodeBlock from "@/components/CodeBlock";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import Image from "next/image";

export default function RichText({ blogText }: { blogText: PortableTextBlock[] }) {
  return <PortableText components={components} value={blogText} />;
}

const components: PortableTextComponents = {
  block: {
    blockquote: ({ children }) => (
      <blockquote className="my-6 ml-5 border-3 border-y-white border-r-white border-l-yellow-400 pl-6 text-base text-gray-500 md:text-lg">
        {children}
      </blockquote>
    ),
    h1: ({ children }) => (
      <h1 className="pt-10 pb-5 text-5xl font-bold text-gray-800 md:text-6xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="pt-10 pb-5 text-4xl font-bold text-gray-800 md:text-5xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-10 pb-5 text-3xl font-bold text-gray-800 md:text-4xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-10 pb-5 text-2xl font-bold text-gray-800 md:text-3xl">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="pt-10 pb-5 text-xl font-bold text-gray-800 md:text-2xl">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="pt-10 pb-5 text-lg font-bold text-gray-800 md:text-xl">{children}</h6>
    ),
    normal: ({ children }) => <p className="pb-4 text-lg font-medium text-gray-500">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="ml-8 text-base md:ml-12 md:text-lg">{children}</ul>,
    number: ({ children }) => <ol className="ml-8 text-base md:ml-12 md:text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2 list-disc text-gray-600">{children}</li>,
    number: ({ children }) => <li className="mt-2 list-decimal text-gray-600">{children}</li>,
  },
  marks: {
    link: ({ children, value }: { children: ReactNode; value?: { href: string } }) => (
      <a
        className="text-blue-500 hover:text-blue-700"
        href={value?.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }: { value: Required<CodeInputValue> }) => (
      <CodeBlock code={value.code} fileName={value.filename} language={value.language} />
    ),
    image: ({ value }: { value: { alt: string; image: string; lqip: string } & SanityImageAsset }) => {
      const { aspectRatio, height, width } = getImageDimensions(value);
      return (
        <figure
          className={`flex size-full flex-col py-7 aspect-[${aspectRatio}] items-center justify-center`}
        >
          <Image
            alt={value.alt || ""}
            blurDataURL={value.lqip}
            className="rounded-md object-cover"
            height={height}
            loading="lazy"
            placeholder="blur"
            src={value.image}
            width={width}
          />
          <figcaption className="sr-only">{value.alt}</figcaption>
        </figure>
      );
    },
  },
};

import type { Metadata } from "next/types";

import FormTerminal from "@/components/FormTerminal";
import { profileOGImage, sharedMetadata, sharedOpenGraph } from "@/src/lib/shared-metadata";
import Link from "next/link";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Contact",
  description: "If you want to create projects together with me, fill out the contact form now!",
  alternates: { canonical: "/contact" },
  openGraph: { ...sharedOpenGraph, images: [profileOGImage] },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-svh w-full flex-col scroll-smooth">
      <section className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40">
        <h1 className="w-fit text-5xl leading-normal text-slate-900 lg:text-7xl">
          Do you have interesting <span className="text-blue-500">Idea</span>?
        </h1>
        <div className="flex flex-row gap-x-7">
          <Link href="#2">
            <button className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80">
              Yes✨
            </button>
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40"
        id="2"
      >
        <h2 className="text-5xl leading-normal text-slate-900 lg:text-7xl">
          Do you need <span className="text-blue-500">a website</span> for your Idea?
        </h2>
        <div className="flex flex-row gap-x-7">
          <Link href="#3">
            <button
              className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80"
              color="primary"
            >
              Of Course🚀
            </button>
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40"
        id="3"
      >
        <h2 className="w-fit text-5xl leading-normal text-slate-900 lg:text-7xl">
          Do you want to do it with <span className="text-blue-500">Me</span>?
        </h2>
        <div className="flex flex-row gap-x-7">
          <Link href="#4">
            <button
              className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80"
              color="primary"
            >
              Sure🤩
            </button>
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-svh flex-col items-center justify-center px-6 text-slate-900 sm:mx-10 md:px-20 lg:px-32 xl:px-64"
        id="4"
      >
        <FormTerminal />
      </section>
    </main>
  );
}

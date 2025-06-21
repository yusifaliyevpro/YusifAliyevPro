import type { Metadata } from "next/types";

import FormTerminal from "@/components/FormTerminal";
import { profileOGImage } from "@/src/lib/shared-metadata";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-svh w-full flex-col scroll-smooth">
      <section className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40">
        <h1 className="w-fit text-5xl leading-normal text-slate-900 lg:text-7xl">Maraqlı layihən var?</h1>
        <div className="flex flex-row gap-x-7">
          <Link href="#2">
            <button className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80">
              Bəli✨
            </button>
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40"
        id="2"
      >
        <h2 className="text-5xl leading-normal text-slate-900 lg:text-7xl">Layihən üçün websayt lazımdır?</h2>
        <div className="flex flex-row gap-x-7">
          <Link href="#3">
            <button
              className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80"
              color="primary"
            >
              Əlbəttə🚀
            </button>
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-5 text-center lg:px-40"
        id="3"
      >
        <h2 className="w-fit text-5xl leading-normal text-slate-900 lg:text-7xl">
          Mənlə birlikdə etmək istəyirsən?
        </h2>
        <div className="flex flex-row gap-x-7">
          <Link href="#4">
            <button
              className="rounded-xl bg-next-blue px-5 py-2 text-2xl font-normal text-white transition-all hover:opacity-80"
              color="primary"
            >
              Olar🤩
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

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  description: "Mənimlə birlikdə layihələr yaratmaq istəyirsənsə, elə indi əlaqə formunu doldur!",
  openGraph: { images: [profileOGImage] },
  title: "Əlaqə",
};

import FormTerminal from "@/components/FormTerminal";
import { Button } from "@nextui-org/react";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  alternates: {
    canonical: `/about`,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
export default function About() {
  return (
    <main className="flex min-h-svh w-full flex-col scroll-smooth">
      <section className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-40 text-center">
        <p className="w-fit text-7xl leading-normal text-slate-900">
          Maraqlı layihən var?
        </p>
        <div className="flex flex-row gap-x-7">
          <Link href="#2">
            <Button color="primary" className="px-5 py-6 text-2xl">
              Bəli🤩
            </Button>
          </Link>
        </div>
      </section>

      <section
        id="2"
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-40 text-center"
      >
        <p className="w-fit text-7xl leading-normal text-slate-900">
          Layihən üçün websayt lazımdır?
        </p>
        <div className="flex flex-row gap-x-7">
          <Link href="#3">
            <Button color="primary" className="px-5 py-6 text-2xl">
              Əlbəttə🤩
            </Button>
          </Link>
        </div>
      </section>

      <section
        id="3"
        className="flex min-h-svh flex-col items-center justify-center gap-y-10 px-40 text-center"
      >
        <p className="w-fit text-7xl leading-normal text-slate-900">
          Mənlə birlikdə etmək istəyirsən?
        </p>
        <div className="flex flex-row gap-x-7">
          <Link href="#4">
            <Button color="primary" className="px-5 py-6 text-2xl">
              Olar🤩
            </Button>
          </Link>
        </div>
      </section>

      <section
        id="4"
        className="flex min-h-svh flex-col items-center justify-center px-64 text-slate-900"
      >
        <FormTerminal />
      </section>
    </main>
  );
}

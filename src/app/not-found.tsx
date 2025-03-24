import Header from "../components/Header";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-svh w-full flex-col items-center justify-center gap-y-7">
        <div className="flex flex-row items-center gap-x-9 text-8xl md:text-9xl lg:text-[16rem]">
          <p>4</p>
          <Link href={"/"}>
            <Image
              priority
              alt="Profile Picture"
              className="rounded-full border-2 shadow-small max-lg:h-36 max-lg:w-36 max-md:h-28 max-md:w-28"
              height={250}
              quality={100}
              src={"/Profile.png"}
              width={250}
            />
          </Link>
          <p>4</p>
        </div>
        <h1 className="px-10 text-center text-2xl lg:px-72 lg:text-3xl">The Page you are looking for was not found!</h1>
      </main>
    </>
  );
}

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The Page you are looking for was not found!",
  openGraph: {
    images: [
      {
        url: "/Not-Found.png",
        width: 1200,
        height: 630,
        alt: "Not Found 404",
      },
    ],
  },
};

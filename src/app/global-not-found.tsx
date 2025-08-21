import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { jua, poppins, source_sans_3 } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import "./globals.css";
export default function NotFound() {
  return (
    <html lang="az">
      <body
        className={cn(
          "font-poppins min-h-svh scroll-smooth bg-white font-semibold",
          poppins.variable,
          jua.variable,
          source_sans_3.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="flex min-h-svh w-full flex-col items-center justify-center gap-y-7">
            <div className="flex flex-row items-center gap-x-9 text-8xl md:text-9xl lg:text-[16rem]">
              <p>4</p>
              <Link href={"/"}>
                <Image
                  priority
                  alt="Profile Picture"
                  className="shadow-small rounded-full border-2 max-lg:h-36 max-lg:w-36 max-md:h-28 max-md:w-28"
                  height={250}
                  quality={100}
                  src={"/Profile.png"}
                  width={250}
                />
              </Link>
              <p>4</p>
            </div>
            <h1 className="px-10 text-center text-2xl lg:px-72 lg:text-3xl">
              The Page you are looking for was not found!
            </h1>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  description: "The Page you are looking for was not found!",
  openGraph: {
    images: [
      {
        alt: "Not Found 404",
        height: 630,
        url: "/Not-Found.png",
        width: 1200,
      },
    ],
  },
  title: "404 Not Found",
};

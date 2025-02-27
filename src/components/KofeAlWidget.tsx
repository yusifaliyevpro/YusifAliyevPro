import { Poppins } from "next/font/google";
import Image from "next/image";
import * as motion from "motion/react-client";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
type TKofeAlWidget = { username: string; isActiveOnMobile?: boolean; isHoverable?: boolean };

export default function KofeAlWidget({ username, isActiveOnMobile = false, isHoverable = false }: TKofeAlWidget) {
  return (
    <div
      className={`group ${poppins.className} ${isActiveOnMobile ? "flex" : "hidden md:flex"} pointer-events-none sticky bottom-0 right-0 z-0 w-full cursor-auto flex-row justify-end pb-5 pr-5 md:pb-7 md:pr-7`}
    >
      <motion.a
        href={`https://kofe.al/@${username}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, type: "spring", stiffness: 80 }}
        className="pointer-events-auto flex w-fit cursor-pointer flex-row items-center rounded-full bg-white p-3 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04),0px_30px_60px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.3)] group-hover:p-0"
      >
        <div
          className={`transition-all duration-200 ${isHoverable && "group-hover:lg:w-auto group-hover:lg:px-4 group-hover:lg:py-2 group-hover:lg:pl-6"}`}
        >
          <p className={`hidden text-lg dark:text-black ${isHoverable && "group-hover:lg:flex"}`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">kofe.al</span>
            /@{username}
          </p>
        </div>
        <motion.div
          animate={{ rotate: [0, -11, 11, -11, 11, 0] }}
          transition={{
            y: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
            rotate: { repeatDelay: 4.5, duration: 1.2, repeat: Infinity, repeatType: "mirror" },
          }}
          className={
            "group-hover:rounded-full group-hover:p-3 group-hover:shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04),0px_30px_60px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.3)]"
          }
        >
          <Image
            // src="/kofeal.webp"
            src="https://kofe.al/assets/images/fav/apple-touch-icon.png"
            width={40}
            height={40}
            alt="Kofe al"
            unoptimized
            className="select-none rounded-full"
          />
        </motion.div>
      </motion.a>
    </div>
  );
}

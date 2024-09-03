"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/cn";
const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function KofeAlWidget({
  username,
  isActiveOnMobile = false,
  isHoverable = false,
}: {
  username: string;
  isActiveOnMobile?: boolean;
  isHoverable?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        "sticky bottom-0 right-0 z-0 w-full cursor-auto flex-row justify-end pb-5 pr-5 md:pb-7 md:pr-7",
        poppins.className,
        { "hidden md:flex": !isActiveOnMobile, flex: isActiveOnMobile },
      )}
    >
      <motion.a
        href={`https://kofe.al/@${username}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
        className={cn(
          "flex w-fit cursor-pointer flex-row items-center rounded-full bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04),0px_30px_60px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.3)]",
          { "p-3": !hovered },
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={cn("transition-all duration-200", {
            "lg:w-auto lg:px-4 lg:py-2 lg:pl-6": hovered && isHoverable,
          })}
        >
          <p
            className={cn("hidden text-lg dark:text-black", {
              "lg:flex": isHoverable && hovered,
            })}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              kofe.al
            </span>
            /@{username}
          </p>
        </div>
        <motion.div
          animate={{
            rotate: [0, -11, 11, -11, 11, 0],
          }}
          transition={{
            y: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
            rotate: {
              repeatDelay: 4.5,
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className={cn({
            "rounded-full p-3 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04),0px_30px_60px_0px_rgba(0,0,0,0.12),0px_0px_1px_0px_rgba(0,0,0,0.3)]":
              hovered,
          })}
        >
          <Image
            src="/kofeal.webp"
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

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@nextui-org/react";

export default function KofeAlWidget({
  username,
  isActiveOnMobile = false,
  isHoverable = false,
}: {
  username: string;
  isActiveOnMobile: boolean;
  isHoverable: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        "sticky bottom-0 right-0 w-full flex-row justify-end pb-5 pr-5 md:pb-7 md:pr-7",
        { "hidden md:flex": !isActiveOnMobile },
        { flex: isActiveOnMobile },
      )}
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
      >
        <a
          rel="noopener noreferrer"
          href={`https://kofe.al/@${username}`}
          target="_blank"
          style={{
            boxShadow:
              "0px 0px 30px 0px rgba(0, 0, 0, 0.04), 0px 30px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
          }}
          className={cn(
            "flex w-fit cursor-pointer flex-row items-center rounded-full bg-white",
            { "p-3": !hovered },
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={cn("text-lg transition-all duration-200", {
              "lg:w-auto lg:px-4 lg:py-2 lg:pl-6": hovered && isHoverable,
            })}
          >
            {hovered && isHoverable && (
              <p className="hidden lg:flex">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  kofe.al
                </span>
                /@{username}
              </p>
            )}
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
            className={`${hovered && "rounded-full p-3"}`}
            style={
              hovered && {
                boxShadow:
                  "0px 0px 30px 0px rgba(0, 0, 0, 0.04), 0px 30px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
              }
            }
          >
            <Image
              src={"/kofeal.webp"}
              width={40}
              alt="Kofe al"
              className="select-none rounded-full"
              unoptimized
              height={40}
            />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}

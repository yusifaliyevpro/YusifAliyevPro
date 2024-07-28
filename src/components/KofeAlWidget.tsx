"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
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
      className={`sticky bottom-0 right-0 w-full flex-row justify-end pb-7 pr-7 ${!isActiveOnMobile ? "hidden md:flex" : "flex"} `}
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
        <Link
          prefetch={false}
          rel="noopener noreferrer"
          href={`https://kofe.al/@${username}`}
          target="_blank"
          style={{
            boxShadow:
              "0px 0px 30px 0px rgba(0, 0, 0, 0.04), 0px 30px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
          }}
          className={`flex w-fit cursor-pointer flex-row items-center rounded-full bg-white ${!hovered && "p-3"}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`text-lg transition-all duration-200 ${hovered && isHoverable && "w-auto px-4 py-2 pl-6"} `}
          >
            {hovered && isHoverable && (
              <p>
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
                repeatDelay: 5,
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
        </Link>
      </motion.div>
    </div>
  );
}

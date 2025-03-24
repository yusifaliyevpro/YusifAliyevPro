"use client";

import SanityImage from "./SanityImage";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Gallery({
  images,
}: {
  images: {
    image: string | null;
    lqip: string | null;
  }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const previewContainerRef = useRef<HTMLDivElement | null>(null);
  const previewRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleBack = () => {
    setDirection(0);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    const currentRef = previewRefs.current[currentIndex];
    if (currentRef) {
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const handleForward = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    const currentRef = previewRefs.current[currentIndex];
    if (currentRef) {
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const handleScroolBar = (i: number) => {
    setDirection(currentIndex < i ? 1 : 0);
    setCurrentIndex(i);
    const currentRef = previewRefs.current[currentIndex];
    if (currentRef) {
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const animationVariants = {
    initial: (custom: number) => ({
      x: custom == 1 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (custom: number) => ({
      x: custom == 1 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="my-2 md:my-10">
      <div className="mb-4 flex min-h-80 w-full flex-row items-center justify-between overflow-hidden">
        <IoIosArrowBack className="cursor-pointer text-5xl text-slate-600 hover:text-blue-600" onClick={handleBack} />
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            animate="animate"
            className="relative flex aspect-square w-fit md:aspect-[13/9]"
            custom={direction}
            exit="exit"
            initial="initial"
            transition={{ duration: 0.4 }}
            variants={animationVariants}
          >
            <Image
              alt="Images"
              className="select-none object-contain"
              height={500}
              src={images[currentIndex].image}
              width={700}
            />
          </motion.div>
        </AnimatePresence>
        <IoIosArrowForward className="cursor-pointer text-5xl text-slate-600 hover:text-blue-600" onClick={handleForward} />
      </div>
      <div
        ref={previewContainerRef}
        className="relative flex w-full flex-row items-center gap-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide"
      >
        {images.map((image, i) => (
          <div
            key={i}
            ref={(el) => {
              previewRefs.current[i] = el;
            }}
            className="relative flex aspect-[13/9] h-24 cursor-pointer"
            onClick={() => handleScroolBar(i)}
          >
            <Image
              alt="Images"
              blurDataURL={image.lqip}
              height={100}
              placeholder="blur"
              src={image.image}
              width={200}
              className={cn("select-none rounded-xl border-2 object-contain", {
                "border-blue-700": i == currentIndex,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

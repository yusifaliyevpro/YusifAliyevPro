"use client";

import sanityLoader from "@/lib/imageLoader";
import Image, { ImageProps } from "next/image";

export default function SanityImage({
  alt,
  width,
  height,
  ...props
}: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      width={width}
      height={height}
      loader={sanityLoader}
    />
  );
}

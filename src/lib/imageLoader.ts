import { imageBuilder } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ImageLoader = {
  src: SanityImageSource;
  width: number;
  quality?: number;
};
export default function sanityLoader({ src, width, quality }: ImageLoader) {
  const image = imageBuilder
    ?.image(src)
    .width(width)
    .auto("format")
    .fit("max")
    .quality(quality || 75)
    .url();
  return image;
}

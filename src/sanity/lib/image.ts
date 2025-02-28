import { dataset, projectId } from "../env";
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// https://www.sanity.io/docs/image-url
export const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

export const blurDataURL = (source: SanityImageSource, blur: number) => {
  return imageBuilder?.image(source).auto("format").fit("max").blur(blur).url();
};

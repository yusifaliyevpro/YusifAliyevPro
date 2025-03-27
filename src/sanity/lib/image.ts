import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
export const imageBuilder = createImageUrlBuilder({ dataset, projectId });

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

export const blurDataURL = (source: SanityImageSource, blur: number) => {
  return imageBuilder?.image(source).auto("format").fit("max").blur(blur).url();
};

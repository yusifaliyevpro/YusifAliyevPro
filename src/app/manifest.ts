import { sharedMetadata } from "@/lib/shared-metadata";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#fff",
    description: sharedMetadata.description,
    display: "standalone",
    icons: [{ sizes: "any", src: "/src/app/favicon.png", type: "image/x-icon" }],
    name: sharedMetadata.creator,
    short_name: sharedMetadata.creator,
    start_url: "/",
    theme_color: "#007bff",
  };
}

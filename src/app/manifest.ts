import type { MetadataRoute } from "next";

import { creator, description } from "../lib/shared-metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#fff",
    description,
    display: "standalone",
    icons: [{ sizes: "any", src: "/src/app/favicon.png", type: "image/x-icon" }],
    name: creator,
    short_name: creator,
    start_url: "/",
    theme_color: "#007bff",
  };
}

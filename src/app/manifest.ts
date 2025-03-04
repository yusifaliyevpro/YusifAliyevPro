import { creator, description } from "../lib/shared-metadata";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: creator,
    short_name: creator,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#007bff",
    icons: [{ src: "/src/app/favicon.png", sizes: "any", type: "image/x-icon" }],
  };
}

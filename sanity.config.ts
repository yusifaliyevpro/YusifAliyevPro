"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { codeInput } from "@sanity/code-input";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { defineConfig } from "sanity";

export default defineConfig({
  title: "Yusif Aliyev",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    codeInput(),
    presentationTool({
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" }, initial: "/preview/blog" },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

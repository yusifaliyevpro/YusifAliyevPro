import blog from "./blog";
import project from "./project";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, project],
};

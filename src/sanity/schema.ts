import { type SchemaTypeDefinition } from "sanity";
import blog from "./schemaTypes/blog";
import project from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blog],
};

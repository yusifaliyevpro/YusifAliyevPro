import blog from "./schemaTypes/blog";
import project from "./schemaTypes/project";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blog],
};

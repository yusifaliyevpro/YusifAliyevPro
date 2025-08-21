import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

const project = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      options: {
        maxLength: 50,
        source: "name",
      },
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      options: {
        hotspot: true,
      },
      title: "Project Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "repo",
      title: "Repository Link",
      type: "url",
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
export default project;

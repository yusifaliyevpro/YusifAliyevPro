import { defineField, defineType } from "sanity";

const project = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
    }),
  ],
});
export default project;

import { defineArrayMember, defineField, defineType } from "sanity";
import PreviewMode from "../lib/Preview";

const blog = defineType({
  name: "blogs",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    }),
    defineField({
      name: "preview",
      title: "Preview",
      type: "string",
      components: {
        field: PreviewMode,
      },
    }),
    defineField({
      name: "isPublished",
      title: "Is published?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "poster",
      title: "Blog Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "text",
      title: "Blog Text",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineArrayMember({
          type: "code",
          options: {
            withFilename: true,
          },
        }),
      ],
    }),
  ],
});

export default blog;

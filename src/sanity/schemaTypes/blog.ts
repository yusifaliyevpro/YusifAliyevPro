import PreviewMode from "../lib/Preview";
import SendEmailComponent from "../lib/SendEmail";
import { defineArrayMember, defineField, defineType } from "sanity";

const blog = defineType({
  name: "blogs",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (rule) => rule.max(50).warning("Shorter titles are usually better for SEO").required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      validation: (rule) => rule.required(),
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: "poster",
      title: "Blog Poster",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
      validation: (rule) => rule.min(1).warning("At least one tag is recommended").required(),
    }),
    defineField({
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [defineArrayMember({ type: "image" })],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "text",
      title: "Blog Text",
      type: "array",
      validation: (rule) => rule.required(),
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
    defineField({
      name: "sendEmail",
      title: "Send Email",
      type: "text",
      components: {
        field: SendEmailComponent,
      },
    }),
  ],
});

export default blog;

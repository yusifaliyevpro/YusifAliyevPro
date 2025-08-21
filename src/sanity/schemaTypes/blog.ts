import { defineArrayMember, defineField, defineType } from "sanity";

import PreviewMode from "../components/Preview";
import SendEmailComponent from "../components/SendEmail";
import { EditIcon } from "@sanity/icons";

const blog = defineType({
  name: "blogs",
  title: "Blog",
  type: "document",
  icon: EditIcon,
  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (rule) => rule.max(50).warning("Shorter titles are usually better for SEO").required(),
    }),
    defineField({
      name: "slug",
      options: {
        maxLength: 50,
        source: "title",
      },
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
    }),
    defineField({
      components: {
        field: PreviewMode,
      },
      name: "preview",
      title: "Preview",
      type: "string",
    }),
    defineField({
      initialValue: new Date().toISOString(),
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "poster",
      options: {
        hotspot: true,
      },
      title: "Blog Poster",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
      title: "Tags",
      type: "array",
      validation: (rule) => rule.min(1).warning("At least one tag is recommended").required(),
    }),
    defineField({
      name: "gallery",
      of: [defineArrayMember({ type: "image" })],
      options: {
        layout: "grid",
      },
      title: "Gallery",
      type: "array",
    }),
    defineField({
      name: "text",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
            }),
          ],
          options: { hotspot: true },
          type: "image",
        }),
        defineArrayMember({
          options: {
            withFilename: true,
          },
          type: "code",
        }),
      ],
      title: "Blog Text",
      type: "array",
      validation: (rule) => rule.required(),
    }),
    defineField({
      components: {
        field: SendEmailComponent,
      },
      name: "sendEmail",
      title: "Send Email",
      type: "text",
    }),
  ],
});

export default blog;

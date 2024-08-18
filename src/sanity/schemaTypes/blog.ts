import PreviewMode from "../lib/Preview";

const project = {
  name: "blogs",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Blog Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
    },
    {
      name: "preview",
      title: "Preview",
      type: "string",
      components: {
        field: PreviewMode,
      },
    },
    {
      name: "isPublished",
      title: "Is published?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
    {
      name: "poster",
      title: "Blog Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "text",
      title: "Blog Text",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
        {
          type: "code",
          options: {
            withFilename: true,
          },
        },
      ],
    },
  ],
};

export default project;

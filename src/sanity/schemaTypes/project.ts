const blog = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "repo",
      title: "Repository Link",
      type: "url",
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
    },
    {
      name: "description",
      title: "Short Description",
      type: "string",
    },
  ],
};
export default blog;

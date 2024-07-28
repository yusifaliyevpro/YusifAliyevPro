export default {
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
    // {
    //   name: "genre",
    //   title: "Genre",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     list: [
    //       { title: "Aksiyon", value: "Action" },
    //       { title: "Macəra", value: "Adventure" },
    //       { title: "Dram", value: "Drama" },
    //       { title: "Triller", value: "Thriller" },
    //       { title: "Animasiya", value: "Animation" },
    //       { title: "Komediya", value: "Comedy" },
    //       { title: "Ailə", value: "Family" },
    //       { title: "Sci-Fi", value: "Sci-Fi" },
    //       { title: "Fantaziya", value: "Fantasy" },
    //       { title: "Qorxu", value: "Horror" },
    //       { title: "Sirli", value: "Mystery" },
    //       { title: "Belgesel", value: "Documentary" },
    //       { title: "Müharibə", value: "War" },
    //       { title: "Cinayət", value: "Crime" },
    //       { title: "Tarixi", value: "Historical" },
    //     ],
    //     layout: "grid",
    //   },
    // },
  ],
};

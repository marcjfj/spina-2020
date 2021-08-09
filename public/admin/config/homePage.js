import Blocks from './blocks/index.js';

export default {
  name: "HomePage",
  label: "Home Page",
  folder: "content/homepage/",
  extension: "mdx",
  format: "frontmatter",
  fields: [
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: false,
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {...Blocks}
  ],
}
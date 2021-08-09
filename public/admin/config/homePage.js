import Blocks from './blocks';

export default {
  name: "HomePage",
  label: "Home Page",
  folder: "content/pages/",
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
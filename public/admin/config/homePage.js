import Blocks from './blocks/index.js';

export default {
  name: "HomePage",
  label: "Home Page",
  files: [{
    name: "general",
    label: "Settings",
    file: "content/homepage/index.mdx",
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
  }]
}
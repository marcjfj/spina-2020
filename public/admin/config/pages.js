import Blocks from './blocks';

export default {
  name: "pages",
  label: "Pages",
  folder: "content/pages/",
  extension: "mdx",
  format: "frontmatter",
  create: true,
  slug: "{{slug}}",
  identifier_field: "slug",
  summary: "{{title}}",
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
};

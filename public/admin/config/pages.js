import Blocks from './blocks/index.js';

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
      pattern: ["/^[a-z0-9_]+(-[a-z0-9_]+)*$/gm", "Slug must be lowercase with no special characters other than - and _"],
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Meta Description",
      name: "metaDescription",
      widget: "string",
    },
    {...Blocks}
  ],
};
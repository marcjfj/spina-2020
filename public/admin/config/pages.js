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
      pattern: ['\/([-_]*[a-zA-Z0-9]+([-_]*[a-zA-Z0-9]+)*)\/gm', "Slug must be lowercase with no special characters other than - and _"],
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
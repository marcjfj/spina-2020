import HeroBanner from './blocks/heroBanner.js';
import Paragraph from './Paragraph.js';

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
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Sections",
      name: "sections",
      widget: "list",
      types: [
        HeroBanner,
        Paragraph,
      ]
    }
  ],
};

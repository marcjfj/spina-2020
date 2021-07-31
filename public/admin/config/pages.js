export default {
  name: "pages",
  label: "Pages",
  folder: "content/pages/",
  extension: "mdx",
  format: "frontmatter",
  create: true,
  slug: "{{slug}}",
  identifier_field: "slug",
  summary: "{{headline}}",
  fields: [
    {
      label: "Slug",
      name: "slug",
      widget: "string",
    },
    {
      label: "Headline",
      name: "headline",
      widget: "string",
    },
    {
      label: "Hero Image",
      name: "hero_image",
      widget: "image",
    },
    {
      label: "Content",
      name: "bo",
      widget: "markdown",
    },
  ],
};

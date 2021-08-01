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
      label: "Sections",
      name: "sections",
      widget: "list",
      types: [
        {
          label: "Hero Banner",
          name: "heroBanner",
          widget: "object",
          summary: "",
          fields: [
            {
              label: "Headline",
              name: "headline",
              widget: "string",
            },
            {
              label: "Image",
              name: "image",
              widget: "image",
              allow_multiple: false,
              hint: "Use JPG files only"
            }
          ]
        }
      ]
    }
  ],
};

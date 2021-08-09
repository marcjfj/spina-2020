export default {
  label: "Image with Content",
  name: "SecondaryImage",
  widget: "object",
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      allow_multiple: false,
      hint: "Use JPG files only",
    },
    {
      label: "Bullet Points",
      name: "bullets",
      widget: "list",
      summary: "{{fields.item}}",
      field: {
        label: "Item",
        name: "item",
        widget: "string",
      }
    },
  ],
}

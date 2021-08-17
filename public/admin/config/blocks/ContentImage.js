export default {
  label: "Content with Image",
  name: "ContentImage",
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
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
    },
    {
      label: "Layout",
      name: "layout",
      widget: "select",
      default: "image-right",
      options: [
        {
          label: "Image Right",
          value: "image-right",
        },
        {
          label: "Image Left",
          value: "image-left",
        },
        
    ]
    }
  ],
}
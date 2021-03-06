export default {
  label: "Hero Banner",
  name: "HeroBanner",
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
      hint: "Use JPG files only",
    },
  ],
};

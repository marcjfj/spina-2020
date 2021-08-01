export default {
  label: "Home Hero Banner",
  name: "HomeHero",
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
      label: "Top Text",
      name: "topText",
      widget: "string",
    },
    {
      label: "Bottom Text",
      name: "bottomText",
      widget: "string",
    },
  ],
}
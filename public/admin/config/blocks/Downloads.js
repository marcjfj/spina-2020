export default {
  label: "Downloads",
  name: "Downloads",
  widget: "object",
  fields: [
    {
      label: "Files",
      name: "files",
      type: "list",
      fields: [
        {
          label: "File",
          name: "file",
          widget: "file",
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
        }
      ]
    }
  ]
}
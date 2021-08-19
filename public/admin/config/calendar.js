export default {
  name: "calendar",
  label: "Calendar",
  widget: "object",
  allow_add: true,
  file: "content/calendar.json",
  fields: [
    {
      label: "Type",
      name: "type",
      widget: "hidden",
      default: "main",
    }
  ]
}
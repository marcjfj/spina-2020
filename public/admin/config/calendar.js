export default {
  name: "calendar",
  label: "Calendar",
  widget: "object",
  allow_add: true,
  file: "content/calendar.json",
  fields: [
    {
      name: "days",
      title: "Days",
      widget: "list",
      fields: [
        {
          label: "Date",
          name: "Date",
          widget: "datetime",
          date_format: "dddd, MMMM Do",
          time_format: false,
          format: "dddd, MMMM Do",
          picker_utc: false,
        },
        {
          label: "Hours",
          name: "hours",
          widget: "string",
        }
      ]
    }
  ]
}
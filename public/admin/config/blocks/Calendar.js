export default {
  label: "Calendar",
  name: "Calendar",
  widget: "object",
  allow_add: true,
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

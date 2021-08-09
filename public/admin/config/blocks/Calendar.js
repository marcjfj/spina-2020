export default {
  label: "Calendar",
  name: "Calendar",
  widget: "list",
  field: {
    name: "day",
    title: "Day",
    widget: "object",
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
}

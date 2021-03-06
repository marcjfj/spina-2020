export default {
  label: "Form",
  name: "Form",
  widget: "object",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Inputs",
      name: "inputs",
      widget: "list",
      fields: [
        {
          label: "Input Type",
          name: "type",
          widget: "select",
          options: [
            {
              label: "Text",
              value: "text",
            },
            {
              label: "Email",
              value: "email",
            },
            {
              label: "Tel",
              value: "tel",
            },
            {
              label: "Date",
              value: "date",
            },
            {
              label: "Time",
              value: "time",
            },
            {
              label: "Text Area",
              value: "textarea",
            },
          ]
        },
        {
          label: "label",
          name: "Label",
          widget: "string",
        }
      ]
    }
  ]
}

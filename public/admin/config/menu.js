export default {
  name: "menu",
  label: "Menu",
  widget: "object",
  allow_add: true,
  file: "content/menu.json",
  fields: [
    {
      name: "pages",
      title: "Pages",
      widget: "list",
      fields: [
        {
          label: "Page",
          name: "page",
          widget: "relation",
          collection: 'pages',
          value_field: 'slug',
          display_fields: ['slug', 'title'],
          search_fields: ['slug', 'title'],
        }
      ]
    }
  ]
}
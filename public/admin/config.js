const config = {
  backend: {
    name: "git-gateway",
    branch: "master",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "config",
      label: "Config",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "general",
          label: "Site Config",
          file: "config.json",
          description: "General Site Settings",
          fields: [
            {
              label: "URL",
              name: "base_url",
              widget: "string",
              hint: "Do not enter the trailing slash of the URL",
            },
            {
              label: "Site title",
              name: "site_title",
              widget: "string",
            },
            {
              label: "Site description",
              name: "site_description",
              widget: "string",
            },
            {
              label: "Site keywords",
              name: "site_keywords",
              widget: "list",
              summary: "{{fields.keyword.keyword}}",
              field: {
                label: "Keyword",
                name: "keyword",
                widget: "string",
              },
            },
            {
              label: "Twitter account",
              name: "twitter_account",
              widget: "string",
            },
            {
              label: "GitHub account",
              name: "github_account",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      name: "pages",
      label: "Pages",
      folder: "content/pages/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{slug}}",
      identifier_field: "slug",
      summary: "{{headline}}",
      fields: [
        {
          label: "Slug",
          name: "slug",
          widget: "string",
        },
        {
          label: "Headline",
          name: "headline",
          widget: "string",
        },
        {
          label: "Hero Image",
          name: "hero_image",
          widget: "image",
        },
        {
          label: "Content",
          name: "bo",
          widget: "markdown",
        }
      ],
    },
  ],
};

window.CMS_CONFIGURATION = config;
CMS.init({ config })
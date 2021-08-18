import Pages from "./pages.js";
import HomePage from "./homePage.js";
import Calendar from './calendar.js';
import Menu from './menu.js';
const config = {
  backend: {
    name: "git-gateway",
    branch: "master",
    local_backend: {
      // # when using a custom proxy server port
      url: 'http://localhost:8082/api/v1',
      // # when accessing the local site from a host other than 'localhost' or '127.0.0.1'
      allowed_hosts: ['192.168.0.1'],
    }
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
              label: "Home Page",
              name: "homepage",
              widget: "relation",
              collection: "pages",
              value_field: "slug",
              display_fields: ["title"],
              search_fields: ["slug", "title"],

            },
            {
              label: "Facebook account",
              name: "facebook_account",
              widget: "string",
            },
            {
              label: "Yelp account",
              name: "github_account",
              widget: "string",
            },
            {
              label: "Main Email",
              name: "main_email",
              widget: "string",
            },
            {
              label: "Phone Number",
              name: "phone",
              widget: "string",
            }
          ],
        },
        Menu,
        Calendar,
      ],
    },
    Pages,
    HomePage,
  ],
};

window.CMS_CONFIGURATION = config;
CMS.init({ config })
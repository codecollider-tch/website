import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "service",
        label: "Services",
        path: "content/services",
        format: "json",
        ui: {
          router: ({ document }) => {
            return `/services/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
          },
          {
            type: "string",
            name: "iconHover",
            label: "Icon Hover State",
          },
          {
            type: "string",
            name: "href",
            label: "Link",
          },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
            required: true,
          },
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true,
          },
          {
            type: "string",
            name: "content",
            label: "Testimonial Content",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Photo",
          },
          {
            type: "number",
            name: "rating",
            label: "Rating",
            required: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
              },
              {
                type: "image",
                name: "image",
                label: "Hero Image",
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
              },
              {
                type: "string",
                name: "address",
                label: "Address",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
            ],
          },
          {
            type: "object",
            name: "contactPage",
            label: "Contact Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  {
                    type: "string",
                    name: "badge",
                    label: "Badge Text",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Hero Image",
                  },
                ],
              },
              {
                type: "object",
                name: "hours",
                label: "Opening Hours",
                fields: [
                  {
                    type: "string",
                    name: "weekdays",
                    label: "Weekdays Hours",
                  },
                  {
                    type: "string",
                    name: "weekend",
                    label: "Weekend Hours",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "aboutPage",
            label: "About Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  {
                    type: "string",
                    name: "badge",
                    label: "Badge Text",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Hero Image",
                  },
                ],
              },
              {
                type: "string",
                name: "expertiseTitle",
                label: "Expertise Section Title",
              },
              {
                type: "object",
                name: "expertise",
                label: "Expertise Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Path",
                  },
                ],
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "percentage",
                    label: "Percentage",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "cuttingEdge",
                label: "Cutting-Edge Solutions Section",
                fields: [
                  {
                    type: "string",
                    name: "badge",
                    label: "Badge Text",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Section Image",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "office",
        label: "Office Locations",
        path: "content/offices",
        format: "json",
        fields: [
          {
            type: "string",
            name: "country",
            label: "Country",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Phone",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Office Image",
          },
        ],
      },
      {
        name: "sector",
        label: "Sectors",
        path: "content/sectors",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Sector Image",
            required: true,
          },
        ],
      },
      {
        name: "team",
        label: "Team Members",
        path: "content/team",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Photo",
            required: true,
          },
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "answer",
            label: "Answer",
            required: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});

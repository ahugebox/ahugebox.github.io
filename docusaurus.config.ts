import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tristan Perona",
  tagline: "Technical Writer II and Tech Journalist",
  favicon: "img/me.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/me.png",
    navbar: {
      title: "Tristan Perona",
      logo: {
        alt: "My Site Logo",
        src: "img/me.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "My Overview",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "My Links",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/tristan-perona/",
            },
            {
              label: "Jon Peddie Research",
              href: "https://gfxspeak.com/author/tristanjonpeddie-com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/ahugebox",
            },
          ],
        },
      ],
    },

    copyright: `Copyright © ${new Date().getFullYear()} Tristan Perona. Built with Docusaurus.`,
  },
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zapoteco",
  tagline: "Learn Zapoteco San Francisco Cajonos (Ljxill) variation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://edwinruizr.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/zapoteco/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "edwinruizr", // Usually your GitHub org/user name.
  projectName: "zapoteco", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/edwinruizr/zapoteco/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ERKC49M9VM",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.6,
          ignorePatterns: [],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      metadata: [
        {
          name: "keywords",
          content: "learn, zapoteco, san francisco cajonos, ljxill, oaxaca",
        },
      ],
      navbar: {
        title: "Zapoteco",
        logo: {
          alt: "Zapoteco Logo",
          src: "img/zapoteco.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            sidebarId: "locale",
            position: "right",
          },
          {
            href: "https://github.com/edwinruizr/zapoteco",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Alphabet",
                to: "/docs/basics/alphabet",
              },
              {
                label: "Numbers",
                to: "/docs/basics/numbers",
              },
              {
                label: "Flashcards",
                to: "/docs/basics/flashcards",
              },
              {
                label: "Healing Herbs",
                to: "/docs/herbs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/sanfranciscocajonosla/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/edwinruizr/zapoteco",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

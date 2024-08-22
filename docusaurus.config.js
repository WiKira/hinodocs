// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hino Docs',
  tagline: 'Hino Sistemas Documentos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hinosistemas.docs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hinosistemas', // Usually your GitHub org/user name.
  projectName: 'hino-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'hinodocs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/WiKira/hinodocs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({algolia: {
        // The application ID provided by Algolia
        appId: 'R2IYF7ETH7',
        // Public API key: it is safe to commit it
        apiKey: '599cec31baffa4868cae4e79f180729b',
        indexName: 'docsearch',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hino Sistemas',
        logo: {
          alt: 'Hino Sistemas Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Versões', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Versões',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/WiKira/hinodocs',
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/hinosistemas/',
              },
              {
                label: 'Site',
                href: 'https://www.hinosistemas.com.br',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/hinosistemasdegestao/',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hino Sistemas. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Osstech Wiki',
  tagline: 'Tài liệu nội bộ Osstech Team',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

  // Plugins configuration
  // plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Osstech',
        logo: {
          alt: 'Osstech Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tài liệu',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // Announcement Bar - Thanh thông báo trên cùng
      announcementBar: {
        id: 'announcement-bar',
        content:
          '🎉 Chào mừng đến với Osstech Wiki! Tài liệu nội bộ được cập nhật thường xuyên.',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: true,
      },
      // Algolia DocSearch configuration
      // Uncomment và điền thông tin sau khi đăng ký tại https://docsearch.algolia.com/
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Bắt đầu',
                to: '/docs/intro',
              },
              {
                label: 'Setup Môi trường',
                to: '/docs/setup-env',
              },
              {
                label: 'Ví dụ Mermaid',
                to: '/docs/mermaid-examples',
              },
            ],
          },
          {
            title: 'Hỗ trợ',
            items: [
              {
                label: '📧 Email IT Support',
                href: 'mailto:it-support@osstech.com',
              },
              {
                label: '💬 Slack Channel',
                href: 'https://osstech.slack.com/channels/docs-support',
              },
              {
                label: '📋 Jira Project',
                href: 'https://jira.osstech.com/projects/DOCS',
              },
              {
                label: '📝 Báo lỗi tài liệu',
                href: 'https://gitlab.com/osstech/internal-portal/-/issues',
              },
            ],
          },
          {
            title: 'Liên kết nội bộ',
            items: [
              {
                label: '🏠 Trang chủ công ty',
                href: 'https://intranet.osstech.com',
              },
              {
                label: '📚 Wiki khác',
                href: 'https://wiki.osstech.com',
              },
              {
                label: '🔐 VPN Access',
                href: 'https://vpn.osstech.com',
              },
            ],
          },
        ],
        copyright: `Bản quyền © ${new Date().getFullYear()} Osstech Team. Tài liệu lưu hành nội bộ.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Cải thiện Table of Contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;

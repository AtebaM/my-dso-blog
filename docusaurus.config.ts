import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig}  from "dotenv";

dotenvconfig();

/* TODO: change to read configuration from environment */
const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')
const gitRepositoryUrl = process.env.GIT_REPOSITORY_URL || 'https://github.com/AtebaM/my-dso-blog';

const config: Config = {
  title: 'Portfolio',
  tagline: 'Benoit Mbole Ateba - DevSecOps Enthusiast with a passion for details and efficiency',
  favicon: 'img/favicon.ico',

  url: process.env.DEPLOYMENT_URL ?? "https://atebam.github.io",
  baseUrl: process.env.BASE_URL ?? "/",

  organizationName: process.env.GITHUB_ORG, 
  projectName: process.env.GITHUB_PROJECT, 

  deploymentBranch: process.env.DEPLOYMENT_BRANCH,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:`${gitRepositoryUrl}/tree/main/`,
        },
        blog: blogEnabled ? 
          {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            editUrl:`${gitRepositoryUrl}/tree/main/`,
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          }
          : false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Portfolio',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: gitRepositoryUrl, // CORRIGÉ : Utilise ta variable
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Projects',
              to: '/docs/projects',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: gitRepositoryUrl, 
            },
            {
              label: 'Template', 
              href: 'https://github.com/spmse/dev-blog-template',
            }
          ],
        },
      ],
      // CORRIGÉ : Le message strict demandé par l'exercice
      copyright: `Copyright © ${new Date().getFullYear()} Benoit Mbole Ateba - extended from the developer-akademie-starter.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({to: '/blog', label: 'Blog', position: 'left'});
  // CORRIGÉ : links[1] au lieu de links[2] car la colonne Community n'existe plus
  (config.themeConfig.footer as any).links[1].items.push({to: '/blog', label: 'Blog'});
}

export default config;
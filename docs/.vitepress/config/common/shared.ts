import { defineConfig } from 'vitepress'
import { MarkdownPlugin } from '../../plugins'
import { GITHUB_URL, WEBSITE_URL } from './constants'

export const shared = defineConfig({
  title: 'Vue3 Component Library Starter Template',
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  lastUpdated: true,
  metaChunk: true,
  sitemap: {
    hostname: WEBSITE_URL,
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-large.png' }],
    ['meta', { name: 'theme-color', content: '#ced937ff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Vue3 Component Library Starter Template' }],
    ['meta', { property: 'og:site_name', content: 'Vue3 Component Library Starter Template' }],
    ['meta', { property: 'og:image', content: '/logo-large.png' }],
    ['meta', { property: 'og:url', content: WEBSITE_URL }],
  ],
  themeConfig: {
    logo: '/logo-large.png',
    socialLinks: [
      { icon: 'github', link: GITHUB_URL },
    ],
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
    },
  },
  markdown: {
    config: md => MarkdownPlugin(md),
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})

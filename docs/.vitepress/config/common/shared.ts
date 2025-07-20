import { defineConfig } from 'vitepress'
import { MarkdownPlugin } from '../../plugins'
import { GITHUB_URL, WEBSITE_URL } from './constants'

export const shared = defineConfig({
  title: 'ease-reactify',
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  lastUpdated: true, // 显示最后更新时间
  metaChunk: true, // 启用 meta 标签分块
  sitemap: { // 启用站点地图生成
    hostname: WEBSITE_URL, // 站点地图的域名
    transformItems(items) { // 过滤掉迁移指南的链接
      return items.filter(item => !item.url.includes('migration'))
    },
  },
  head: [ // 自定义头部标签
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-large.png' }],
    ['meta', { name: 'theme-color', content: '#ced937ff' }], 
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }], // 自定义头部标签
    // ['meta', { property: 'og:title', content: 'Vue3 Component Library Starter Template' }],
    // ['meta', { property: 'og:site_name', content: 'Vue3 Component Library Starter Template' }],
    // ['meta', { property: 'og:image', content: '/logo-large.png' }],
    // ['meta', { property: 'og:url', content: WEBSITE_URL }],
  ],
  themeConfig: {
    logo: '/logo-large.png', // 自定义头部标签
    socialLinks: [
      { icon: 'github', link: GITHUB_URL }, // 自定义头部标签
    ],
    search: {
      provider: 'local', // 启用本地搜索
    },
    outline: {
      level: [2, 3], // 启用侧边目录
    },
  },
  markdown: { // 启用自定义 Markdown 插件
    config: md => MarkdownPlugin(md),
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})

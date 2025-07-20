import { defineConfig } from 'vitepress'
import { GITHUB_URL } from '../common/constants'
import { nav, searchOptions } from './components/zh-config'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '高效React组件库',
  themeConfig: {
    editLink: {
      pattern: `${GITHUB_URL}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页面',
    },
    nav: nav(), 
    search: {
        provider: 'local',
        options: searchOptions() 
    },
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '什么是 starter-lib-vue3？', link: '/zh/guide/what-is' },
          { text: '立即开始', link: '/zh/guide/getting-started' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          { text: 'SayHello', link: '/zh/components/say-hello' },
        ],
      },
    ],
    lastUpdated: {
      text: '最后更新于',
    },
    footer: {
      message: '基于 MIT 许可证发布',
      copyright: '版权所有 © 2025-2026 ztK63LrD',
    },
  },
})

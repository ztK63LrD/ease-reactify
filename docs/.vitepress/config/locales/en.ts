import { defineConfig } from 'vitepress'
import { GITHUB_URL } from '../common/constants'
import { nav, searchOptions, sidebarGuide, sidebarComponent, sidebarTool } from './components/en-config'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Efficient React component library',
  themeConfig: {
    editLink: { // 编辑链接
      pattern: `${GITHUB_URL}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    search: { provider: 'local', options: searchOptions() },
    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/component/': { base: '/en/component/', items: sidebarComponent() },
      '/en/tool/': { base: '/en/tool/', items: sidebarTool() },
    },
    docFooter: { prev: 'previous page', next: 'next page' }, // 文档页脚配置，自定义上一页和下一页的文本
    outline: { label: 'Navigate' }, // 文档大纲配置，自定义标签文本
    lastUpdated: { text: 'Last updated on' }, // 文档最后更新时间配置，自定义文本
    notFound: {
      title: 'Page not found',
      quote: "But if you don't change direction and keep searching, you may eventually arrive at your destination.",
      linkLabel: 'Go to the homepage',
      linkText: 'Take me back to the homepage'
    },
    langMenuLabel: 'Multilingual',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'menu',
    darkModeSwitchLabel: 'theme',
    lightModeSwitchTitle: 'Switch to light color mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    skipToContentLabel: 'Jump to content',
    footer: { // 文档底部配置，自定义消息和版权信息
      message: 'Based on MIT license release',
      copyright: 'Copyright ©  2025-2026 ztK63LrD',
    },
  },
})

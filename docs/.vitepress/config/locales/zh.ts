import { defineConfig } from 'vitepress'
import { GITHUB_URL } from '../common/constants'
import { nav, searchOptions, sidebarGuide, sidebarComponent, sidebarTool } from './components/zh-config'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '高效React组件库',
  themeConfig: {
    editLink: {
      pattern: `${GITHUB_URL}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页面',
    },
    nav: nav(), // 导航栏配置，使用 nav() 方法生成导航项
    search: { provider: 'local', options: searchOptions() }, // 启用本地搜索功能，并配置搜索选项
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/component/': { base: '/component/', items: sidebarComponent() },
      '/tool/': { base: '/tool/', items: sidebarTool() },
    },
    docFooter: { prev: '上一页', next: '下一页' }, // 文档页脚配置，自定义上一页和下一页的文本
    outline: { label: '页面导航' }, // 文档大纲配置，自定义标签文本
    lastUpdated: { text: '最后更新于' }, // 文档最后更新时间配置，自定义文本
    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    footer: { // 文档底部配置，自定义消息和版权信息
      message: '基于 MIT 许可证发布',
      copyright: '版权所有 © 2025-2026 ztK63LrD',
    },
  },
})

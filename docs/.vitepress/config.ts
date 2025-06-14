import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ease Reactify",
  description: "ease-reactify-ui",
  themeConfig: {
    // 头部导航栏
    nav: [
      { text: '设计', link: '/design', activeMatch: '/design/' },
      { text: '研发', link: '/research', activeMatch: '/research/' },
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components', activeMatch: '/components/' },
      { text: '博客', link: '/blog', activeMatch: '/blog/' },
      { text: '资源', link: '/resources', activeMatch: '/resources/' },
    ],
    // 侧边栏
    sidebar: {
        '/guide/': [
            {
                text: '指南',
                items: [
                    { text: '安装', link: '/guide/installation' },
                    { text: '快速开始', link: '/guide/quickstart' }
                ]
            }
        ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

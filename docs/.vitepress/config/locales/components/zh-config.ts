import { DefaultTheme } from "vitepress";
import pkg from '../../../../../packages/package.json'

// 右侧导航栏配置
export const nav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: '指南',
            link: 'guide/introduce',
            activeMatch: 'guide/'
        },
        {
            text: '组件',
            link: 'component/overview',
            activeMatch: 'component/'
        },
        {
            text: '工具',
            link: 'tool/overview',
            activeMatch: 'tool/'
        },
        {
            text: pkg.version,
            items: [
                {
                    text: '更新日志',
                    link: 'https://github.com/ztK63LrD/ease-reactify/blob/master/packages/CHANGELOG.md'
                },
                {
                    text: '参与贡献',
                    link: 'https://github.com/ztK63LrD/ease-reactify/pulls'
                }
            ]
        }
    ]
}

// 搜索配置
export const searchOptions: () => Partial<DefaultTheme.AlgoliaSearchOptions> = () => {
    return {
        appId: '8J64VVRP8K',
        apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
        indexName: 'vitepress',
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}

// 指南界面设计
export const sidebarGuide: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '基础',
      collapsed: false,
      items: [
        { text: '简介设计', link: 'introduce' },
        { text: '快速上手', link: 'quick-started' },
        { text: '支持平台', link: 'platform' },
        { text: '更新日志', link: 'updatelog' },
      ]
    },
    // {
    //   text: '进阶',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown 扩展', link: 'markdown' },
    //   ]
    // },
  ]
}

// 组件界面设计
export const sidebarComponent: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '组件预览',
      items: [
        { text: '组件预览', link: 'overview' },
      ],
    },
    {
      text: '基础组件',
      collapsed: false,
      items: [
        { text: 'Button 按钮', link: 'button' },
      ],
    },
  ]
}

// 工具界面设计
export const sidebarTool: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '工具预览',
      items: [
        { text: '工具预览', link: 'overview' },
      ],
    },
    {
      text: '基础工具',
      collapsed: false,
      items: [
        { text: '脚手架', link: 'scaffold' },
      ],
    },
  ]
}
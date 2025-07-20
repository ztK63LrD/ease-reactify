import { DefaultTheme } from "vitepress";
import pkg from '../../../../../package.json'

// 右侧导航栏配置
export const nav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: '指南',
            link: 'guide/what-is-vitepress',
            activeMatch: 'guide/'
        },
        {
            text: '参考',
            link: '/zh/reference/site-config',
            activeMatch: '/zh/reference/'
        },
        {
            text: pkg.version,
            items: [
                {
                    text: '更新日志',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: '参与贡献',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
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


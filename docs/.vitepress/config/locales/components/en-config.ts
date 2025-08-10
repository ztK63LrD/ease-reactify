import { DefaultTheme } from "vitepress";
import pkg from '../../../../../packages/package.json'

// 右侧导航栏配置
export const nav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: 'guide',
            link: 'en/guide/introduce',
            activeMatch: 'en/guide/'
        },
        {
            text: 'component',
            link: 'en/component/overview',
            activeMatch: '/en/component/'
        },
        {
            text: 'tool',
            link: 'en/tool/overview',
            activeMatch: 'en/tool/'
        },
        {
            text: pkg.version,
            items: [
                {
                    text: 'update log',
                    link: 'https://github.com/ztK63LrD/ease-reactify/blob/master/packages/CHANGELOG.md'
                },
                {
                    text: 'participate and contribute',
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
        placeholder: 'Search for Documents',
        translations: {
            button: {
                buttonText: 'Search for Documents',
                buttonAriaLabel: 'Search for Documents'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: 'Clear query criteria',
                    resetButtonAriaLabel: 'Clear query criteria',
                    cancelButtonText: 'cancel',
                    cancelButtonAriaLabel: 'cancel'
                },
                startScreen: {
                    recentSearchesTitle: 'Search History',
                    noRecentSearchesText: 'No search history',
                    saveRecentSearchButtonTitle: 'Save to search history',
                    removeRecentSearchButtonTitle: 'Remove from search history',
                    favoriteSearchesTitle: 'collect',
                    removeFavoriteSearchButtonTitle: 'Remove from collection'
                },
                errorScreen: {
                    titleText: 'Unable to obtain results',
                    helpText: 'You may need to check your network connection'
                },
                footer: {
                    selectText: 'select',
                    navigateText: 'switch',
                    closeText: 'close',
                    searchByText: 'Search Provider'
                },
                noResultsScreen: {
                    noResultsText: 'Unable to find relevant results',
                    suggestedQueryText: 'You can try to search',
                    reportMissingResultsText: 'Do you think the query should have results?',
                    reportMissingResultsLinkText: 'Click on feedback'
                }
            }
        }
    }
}

// 指南界面设计
export const sidebarGuide: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: 'base',
      collapsed: false,
      items: [
        { text: 'introduction design', link: 'introduce' },
        { text: 'quick start', link: 'quick-started' },
        { text: 'support platform', link: 'platform' },
        { text: 'update log', link: 'updatelog' },
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
      text: 'component preview',
      items: [
        { text: 'component preview', link: 'overview' },
      ],
    },
    {
      text: 'basic components',
      collapsed: false,
      items: [
        { text: 'Button', link: 'button' },
      ],
    },
  ]
}

// 工具界面设计
export const sidebarTool: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: 'tool preview',
      items: [
        { text: 'tool preview', link: 'overview' },
      ],
    },
    {
      text: 'basic tool',
      collapsed: false,
      items: [
        { text: 'scaffold', link: 'scaffold' },
      ],
    },
  ]
}
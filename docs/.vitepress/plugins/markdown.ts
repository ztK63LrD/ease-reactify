import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'; 
import type MarkdownIt from 'markdown-it'

export async function MarkdownPlugin(md: MarkdownIt): Promise<void> {
  md.use(tabsMarkdownPlugin) // 启用标签插件
  md.use(groupIconMdPlugin) // 启用分组图标插件
  md.use(vitepressDemoPlugin, {  // 启用演示插件
    demoDir: process.cwd() + '/docs/examples', 
  })
}

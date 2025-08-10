import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { createHighlighter } from 'shiki'
import markdownItContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'

interface ContainerOpts {
  marker?: string
  validate?: (params: string) => boolean
  render?: (
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ) => string
}

export async function MarkdownPlugin(md: MarkdownIt): Promise<void> {
  const highlighter = await createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: ['tsx', 'html', 'typescript', 'javascript'],
  })
  md.use(tabsMarkdownPlugin) // 启用标签插件
  md.use(groupIconMdPlugin) // 启用分组图标插件
  md.use(markdownItContainer, 'example', { // 启用代码块插件
    validate(params) {
      return !!params.trim().match(/^example\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        let source = ''
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = readFileSync( resolve(cwd(), 'docs/examples', `${sourceFile}.tsx`), 'utf-8' )
        }
        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`)
        }
        const seikiSource = highlighter.codeToHtml(source, {
          lang: 'tsx',
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        })
        return `<Example source="${encodeURIComponent(seikiSource)}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}">`
      }
      else {
        return '</Example>'
      }
    },
  } as ContainerOpts)
}

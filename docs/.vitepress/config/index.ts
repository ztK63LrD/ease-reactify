import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import react from '@vitejs/plugin-react'
import { shared } from './common/shared'
import { zh } from './locales/zh'
import { en } from './locales/en'

export default defineConfig({
	...shared, // 扩展配置
	locales: {
		root: { label: '中文', ...zh },
		en: { label: 'English', ...en },
	},
    outDir: 'docs-dist/', // 打包输出目录
	vite: { // vite配置项，用于扩展vite插件等配置
		plugins: [
			groupIconVitePlugin() as any,
			react({
				jsxRuntime: 'automatic',
				jsxImportSource: 'react'
			})
		],
		optimizeDeps: {
			include: ['react', 'react-dom']
		},
		ssr: {
			noExternal: ['ease-reactify']
		}
	},
})

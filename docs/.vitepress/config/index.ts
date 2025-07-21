import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { shared } from './common/shared'
import { zh } from './locales/zh'
import { en } from './locales/en'

export default defineConfig({
  ...shared,
  // I18n config.
  // https://vitepress.dev/zh/guide/i18n
  locales: {
    root: { label: '中文', ...zh },
    en: { label: 'English', ...en },
  },
  // Vite config.
  // https://vitejs.dev
  vite: {
    server: {
      host: true,
      port: 9865,
    },
    preview: {
      host: true,
      port: 9865,
    },
    plugins: [
      groupIconVitePlugin() as any,
    ],
  },
})

import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { shared } from './common/shared'
import { zh } from './locales/zh'

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
  },
})

import theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import "ease-reactify/dist/index.css"
import './style.css'
import type { EnhanceAppContext } from 'vitepress'

export default {
  ...theme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    // 处理 GitHub Pages 的 404 重定向
    if (typeof window !== 'undefined') {
      const query = new URLSearchParams(window.location.search);
      const redirect = query.get('p');
      if (redirect) {
        // 移除查询参数并跳转到原始路径
        const url = new URL(window.location.href);
        url.search = '';
        window.history.replaceState(null, '', redirect);
      }
    }
  }
}

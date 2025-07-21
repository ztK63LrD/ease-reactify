# Ease-Reactify 是什么？ {#What is Ease React}

ease-reactify 是一款基于 [React 19](https://react.dev/learn) 开发的高效 UI 组件库，旨在简化开发流程、提升开发者效率。通过精心设计的组件和灵活的配置，ease-reactify 为开发者提供了一套易用、可扩展的 UI 解决方案，帮助快速构建美观且功能丰富的应用界面。无论是从零开始构建项目还是对现有应用进行优化，ease-reactify 都能显著减少开发难度，提升开发速度。

<div class="tip custom-block" style="padding-top: 8px">

只是想尝试一下？跳到[快速上手](./quick-started)。

</div>

## 设计原则 {#design-principles}

- **简洁与高效**

  组件库采用了简洁易懂的 API 和配置，使得开发者能迅速上手并应用到项目中。基于 React 19 和 Vite 开发，确保了性能的优化和开发流程的高效性，支持热更新和快速构建。

- **可扩展性**

  组件库遵循模块化设计，所有组件都可以独立使用并且易于扩展。开发者可以根据需求轻松定制和调整样式，满足各种项目需求。提供可插拔的功能，支持开发者通过插件和自定义配置来增强或修改组件行为。

- **一致性**
  提供统一的设计语言和一致的组件风格，确保项目中的 UI 元素在外观和交互上的统一性，提升用户体验。支持设计系统和主题功能，使得整个应用的界面风格可以根据需要灵活切换。

- **易于测试**
  组件库集成了 Vitest 进行单元测试，保证组件的稳定性和可靠性。所有主要组件都经过严格的单元测试，确保在不同场景下的高效运作。


## 开发体验 {#developer-experience}

VitePress 旨在使用 Markdown 生成内容时提供出色的开发体验。

- **[Vite 驱动](https://cn.vitejs.dev/)**：即时服务器启动，始终立即反映 (<100ms) 编辑变化，无需重新加载页面。

- **[内置 Markdown 扩展](./markdown)**：frontmatter、表格、语法高亮……应有尽有。具体来说，VitePress 提供了许多用于处理代码块的高级功能，使其真正成为技术文档的理想选择。

- **[Vue 增强的 Markdown](./using-vue)**：每个 Markdown 页面都是 Vue [单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html)，这要归功于 Vue 模板与 HTML 的 100% 语法兼容性。可以使用 Vue 模板语法或导入的 Vue 组件在静态内容中嵌入交互性。

## 性能 {#performance}

与许多传统的 SSG 不同，每次导航都会导致页面完全重新加载，VitePress 生成的网站在初次访问时提供静态 HTML，但它变成了[单页应用程序](https://en.wikipedia.org/wiki/Single-page_application)（SPA）进行站点内的后续导航。我们认为，这种模式为性能提供了最佳平衡：

- **快速的初始加载**

  对任何页面的初次访问都将会是静态的、预呈现的 HTML，以实现极快的加载速度和最佳的 SEO。然后页面加载一个 JavaScript bundle，将页面变成 Vue SPA (这被称为“激活”)。与 SPA 激活缓慢的常见假设不同，由于 Vue 3 良好的原始性能和编译优化，这个过程实际上非常快。在 [PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F) 上，典型的 VitePress 站点即使在网络速度较慢的低端移动设备上也能获得近乎完美的性能分数。

- **加载完成后可以快速切换**

  更重要的是，SPA 模型在首次加载后能够提升用户体验。用户在站点内导航时，不会再触发整个页面的刷新。而是通过获取并动态更新页面的内容来实现切换。VitePress 还会自动预加载视口范围内链接对应的页面片段。这样一来，大部分情况下，用户在加载完成后就能立即浏览新页面。

- **高效的交互**

  为了能够嵌入静态 Markdown 中的动态 Vue 部分，每个 Markdown 页面都被处理为 Vue 组件并编译成 JavaScript。这听起来可能效率低下，但 Vue 编译器足够聪明，可以将静态和动态部分分开，从而最大限度地减少激活成本和有效负载大小。对于初始的页面加载，静态部分会自动从 JavaScript 有效负载中删除，并在激活期间跳过。

## VuePress 又是什么？ {#what-about-vuepress}

VitePress 灵感来源于 VuePress。最初的 VuePress 基于 Vue 2 和 webpack。借助 Vue 3 和 Vite，VitePress 提供了更好的开发体验、更好的生产性能、更精美的默认主题和更灵活的自定义 API。

VitePress 和 VuePress 之间的 API 区别主要在于主题和自定义。如果使用的是带有默认主题的 VuePress 1，迁移到 VitePress 应该相对简单。

VuePress 2 我们也投入了精力，它也支持 Vue 3 和 Vite，与 VuePress 1 的兼容性更好。但是，并行维护两个 SSG 是难以持续的，因此 Vue 团队决定将重点放在 VitePress，作为长期的主要 SSG 选择推荐。

---
outline: deep
---

# Ease-Reactify 是什么 {#what-is-ease-react}

ease-reactify是目前基于 [React 19](https://react.dev/learn) 开发的高效UI组件库，旨在、为开发者提供了一套易用、可扩展的 UI 解决方案，帮助快速构建美观且功能丰富的应用界面。其未来主要具备以下特性：

- ✨ 融合现代设计美学与流畅交互体验
- 🚀 即装即用的高性能 React 组件集
- 🔒 基于 TypeScript 构建，类型安全无虞
- 🛠️ 完善的开发工具链与设计资源
- 🌐 支持多语言无缝切换 `(正在开发中...)`
- 🖌️ 精细化主题配置，轻松适配品牌风格

<div class="tip custom-block" style="padding-top: 8px">

想立即尝试一下？跳到[快速上手](./quick-started)。

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

## 示例代码 {#sample-code}

```ts
// main.ts
import React from 'react';
import { EButton } from 'ease-reactify';

const App = () => {
  return <EButton />;
};

export default App;
```
### 组件优势 {#component-advantages}

`ease-reactify` 默认支持基于ES Modules的trer-shaking。

`ease-reactify` 使用TypeScript编写，提供完整的类型定义，无需再引入额外的类型定义文件。

### 组件状态 {#component-status}

目前的UI组件库在样式解决方案上采用了 `Sass` 预处理方案，借助Sass强大的嵌套、变量、混合等特性，作者能够更高效、规范地编写组件样式，大幅提升了样式开发的便捷性与可维护性。

::: warning 样式解决方案
由于样式与组件逻辑分离，在打包后需要用户在入口文件中单独引入样式文件，组件样式才能正常生效，这在一定程度上增加了最终的打包体积。

组件库的样式解决方案将向 `css-in-js` 方向演进，并结合 TypeScript 进行开发。这一转变将带来显著优势：组件样式与逻辑紧密结合，用户无需额外引入样式文件，能极大简化使用流程。但同时也需注意，这种方式会使组件在渲染时产生额外的计算开销，可能在一定程度上影响渲染效率。
:::

总体而言，两种方案各有侧重，当前的 Sass 方案聚焦于开发便捷性，而未来的 css-in-js 方案则更注重使用体验的优化，作者将根据实际场景需求平滑过渡，平衡开发效率与运行性能。

## 如何贡献 {#how-to-contribute}

如果你希望参与贡献，欢迎提交 [Pull Request](https://github.com/ztK63LrD/ease-reactify/pulls)，或者 [联系作者](https://blog.csdn.net/qq_53123067)

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

## 使用许可 {#license}

ease-reactify使用[MIT License](https://opensource.org/license/MIT)许可证书。

如果你觉得 `ease-reactify` 对你有帮助，可以考虑对其进行赞助。这将极大地鼓励作者继续开发和维护该项目。点击 [访问网址](https://blog.csdn.net/qq_53123067) 添加微信。



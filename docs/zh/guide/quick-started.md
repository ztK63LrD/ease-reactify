---
outline: deep
---

# 快速上手 {#quick start}
  本节将介绍如何在项目中使用 `Ease-Reactify`。

  ease-reactify（发音为 "ez reactify"） 是基于 Vite 框架驱动的 React UI 框架，注意：该组件库仅支持React，如果你在使用其他框架请可以去看看别的库。

  你可以在 [简介设计](./introduce.md) 中了解有关该项目背后的基本原理或更多信息。

## 包管理器 {#package manager}
我们建议采用 [npm](https://www.npmjs.com/)、[yarn](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/zh/) 或 [bun](https://bun.sh/) 作为开发工具。这些包管理工具能为开发环境提供便捷的调试体验，也能为生产环境提供稳定的打包部署能力，让您充分享受现代前端工具链和生态系统带来的优势。
然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [Webpack](https://webpack.js.org/)，来构建您的项目

::: code-group

```sh [npm]
npm install ease-reactify --save
```
```sh [pnpm]
pnpm install ease-reactify --save
```
```sh [yarn]
yarn add ease-reactify
```
```sh [bun]
bun add ease-reactify
```
:::

如果您的网络不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm) 或 [npmmirror](https://npmmirror.com/)
```shell
npm config set registry https://registry.npmmirror.com
```

::: tip 注意

ease-reactify提供以下三种打包后模块格式，能够灵活适配各种开发场景，既满足现代工程化项目的优化需求也兼顾传统开发模式的便捷性。

1）`ES(ECMAScript Module)`：基于ES6模块规范(import/export)、支持tree-shaking(按需引入，减小打包体积)、主要用于现代浏览器、Webpack/Rollup等构建工具环境

2）`CJS(CommonJS)`：基于Node.js模块规范(require/module.exports)、适用于Node.js环境或旧版构建工具、不支持tree-shaking通常会加载完整模块

3）`UMD(Universal Module Definition)`：通用模块格式，兼容ES和CJS规范同时支持全局变量引入、可直接在浏览器中通过script标签加载、适用于不使用构建工具的场景或第三方库兼容
:::

### 直接使用

::: code-group

```tsx [main.tsx]
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// 引入样式文件
import "ease-reactify/dist/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```
```tsx [App.tsx]
import React from 'react'
import { EButton } from 'ease-reactify'

const App = () => {
  return (
    <EButton type='primary'>App</EButton>
  )
}

export default App
```
:::


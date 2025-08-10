---
outline: deep
---

# Quick start {#quick start}

  This section will introduce how to use `Ease-Reactify` in a project.

  Easy React (pronounced as "ez React") is a React UI framework driven by the Vite framework. Please note that this component library only supports React. If you are using other frameworks, you can check out other libraries.

  You can learn about the basic principles or more information behind the project in [Introduction Design](./introduce.md).

## Package manager {#package manager}

We suggest adopting [npm](https://www.npmjs.com/)、[yarn](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/zh/) or [bun](https://bun.sh/) As a development tool. 

These package management tools can provide a convenient debugging experience for development environments and stable packaging and deployment capabilities for production environments, allowing you to fully enjoy the advantages brought by modern front-end toolchains and ecosystems. 
Then you can use packaging tools, such as [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/), to build your project.

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

If your network is not good, we recommend using [cnpm](https://github.com/cnpm/cnpm) or [npmmirror](https://npmmirror.com/)
```shell
npm config set registry https://registry.npmmirror.com
```

::: tip attention

ease-reactify provide the following three packaged module formats, which can flexibly adapt to various development scenarios, meeting the optimization needs of modern engineering projects while also taking into account the convenience of traditional development models.

1）`ES(ECMAScript Module)`：Based on the ES6 module specification (import/export), supporting tree shaking (on-demand introduction, reducing packaging size), mainly used for building tool environments such as modern browsers, Webpack/Rollup, etc.

2）`CJS(CommonJS)`：Based on the Node.js module specification (require/module. exports), suitable for the Node.js environment or older build tools, tree shaking is not supported and usually loads the complete module.

3）`UMD(Universal Module Definition)`：Universal module format, compatible with ES and CJS specifications, supports global variable import, can be directly loaded through script tags in the browser, suitable for scenarios without using build tools or compatible with third-party libraries.

:::

### Direct use {#direct-use}

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


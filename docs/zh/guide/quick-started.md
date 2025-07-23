# 快速上手
  本节将介绍如何在项目中使用 `Ease-Reactify`。

  ease-reactify（发音为 "ez reactify"） 是基于 Vite 框架驱动的React UI 框架。

  你可以在 [简介设计](./introduce.md) 中了解有关该项目背后的基本原理的更多信息。

## 使用包管理器
我们建议采用 [npm](https://www.npmjs.com/)、[yarn](https://classic.yarnpkg.com/lang/en/)、[pnpm](https://pnpm.io/zh/) 或 [bun](https://bun.sh/) 作为开发工具。这些包管理工具能为开发环境提供便捷的调试体验，也能为生产环境提供稳定的打包部署能力，让您充分享受现代前端工具链和生态系统带来的优势。

::: code-group

```sh [npm]
$ npm install ease-reactify --save
```
```sh [pnpm]
$ pnpm install ease-reactify --save
```
```sh [yarn]
$ yarn add ease-reactify
```
```sh [bun]
$ bun add ease-reactify
```
:::

::: tip 注意

ease-reactify 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`，或者更改相关文件的文件扩展名，例如 `.vitepress/config.js` 到 `.mjs`/`.mts`。更多详情请参考 [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用 `await import('vitepress')` 代替。

:::

### 完整导入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import StarterLibVue3 from 'starter-lib-vue3'
import { createApp } from 'vue'
import App from './App.vue'
import 'starter-lib-vue3/style'

const app = createApp(App)

app.use(StarterLibVue3)
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <StSayHello name="Kieran" />
</template>
```

### 按需自动导入

通过安装 `unplugin-vue-components` 和 `unplugin-auto-import` 插件，实现组件按需自动导入。

::: code-group

```sh [pnpm]
pnpm add unplugin-vue-components unplugin-auto-import -D
```

```sh [yarn]
yarn add unplugin-vue-components unplugin-auto-import -D
```

```sh [npm]
npm install unplugin-vue-components unplugin-auto-import -D
```

:::

然后把下列代码插入到你的 `Vite` 配置文件中：

```ts
// vite.config.ts
import { StarterLibVue3Resolver } from 'starter-lib-vue3'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [StarterLibVue3Resolver()],
    }),
    Components({
      resolvers: [StarterLibVue3Resolver()],
    }),
  ],
})
```

现在你可以在 SFC 文件中直接使用 starter-lib-vue3 的组件，并且其样式也是自动化的导入。

```vue
<script>
// 无需手动引入 :P
// import { StSayHello } from 'starter-lib-vue3'
// import 'starter-lib-vue3/dist/es/say-hello/style.css'
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

### 按需手动导入

你可已手动导入你需要的组件（组件由逻辑文件和样式文件组成）：

```vue
<script>
import { StSayHello } from 'starter-lib-vue3'
import 'starter-lib-vue3/dist/es/say-hello/style.css'

export default {
  components: { StSayHello },
}
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

## 浏览器直接导入

直接通过浏览器的 HTML `script` 标签导入就可以使用全局变量 `StarterLibVue3` 了。

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

根据不同的 CDN 提供商有不同的导入方式， 我们在这里以 unpkg 举例。 你也可以使用其它的 CDN 供应商。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>starter-lib-vue3</title>
</head>

<body>
  <div id="app"></div>

  <script src="https://unpkg.com/starter-lib-vue3"></script>
  <script>
    const app = Vue.createApp({
      template: '<StSayHello name="Kieran" />'
    })
    app.use(StarterLibVue3).mount('#app')
  </script>
</body>

</html>
```

## Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["starter-lib-vue3/volar"]
  }
}
```

现在，你可以通过 Volar 获得组件的类型提示了。

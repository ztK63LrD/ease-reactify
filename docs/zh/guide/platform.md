---
outline: deep
---

# 支持平台 {#support-platform}
ease-reactify目前基于`React19`框架开发，其引入了几个新特性和改进，其中包括对`React 18`特性的扩展和优化，同时也考虑到了向后兼容性。

值得注意的是，并非所有浏览器都能立即支持所有最新的JavaScript特性，特别是那些使用了诸如React 18引入的并发特性（如`startTransition`和`useId`）的React 19应用。

## 兼容性 {#compatibility}
为了确保旧版浏览器也能运行你的React应用，你可以使用`Babel`来转译代码。Babel可以将现代JavaScript代码转换为更兼容的旧版代码。例如你可以使用 `@babel/preset-env` 预设来自动处理这一转换过程，确保你的代码可以在旧版浏览器上运行，以下是浏览器支持情况的简单参考：

| version   | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
|-----------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| < 2.5.0   | Chrome ≥ 64                                                                              | Edge ≥ 79                                                                      | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                              |
| 2.5.0 +   | Chrome ≥ 85                                                                              | Edge ≥ 85                                                                      | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                            |

如果你使用Create React App（CRA），它已经内置了对Babel的支持，你可以通过修改或添加`.babelrc`文件或通过babel.config.js文件来配置Babel，例如：
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
当然你也可以通过查询 [caniuse](https://caniuse.com/) 平台来查询具体一些特性在不同浏览器上的支持情况。

## Sass {#sass}
ease-reactify目前版本对样式的解决方案是使用 [Sass](https://github.com/sass)，这对于大多数现代浏览器来说是支持的。然而，如果你的目标用户群体中包括了旧版浏览器（例如IE），你可能需要额外的polyfills或工具来确保样式也能在这些老旧的浏览器上正常工作。

在 `2.8.5` 及以后的版本, Sass的最低支持版本为 `1.79.0`，如果您的终端提示 `legacy JS API Deprecation Warning`，如在vite框架中，您可以配置以下代码在 [vite.config.ts](https://vite.dev/config/shared-options.html#css-preprocessoroptions) 来解决这个问题：
```ts
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```
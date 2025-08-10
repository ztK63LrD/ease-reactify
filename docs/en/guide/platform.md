---
outline: deep
---

# Support platform {#support-platform}

ease-reactify is currently developed based on the `React19` framework, which introduces several new features and improvements, including extensions and optimizations to `React 18` features, while also considering backward compatibility.

It is worth noting that not all browsers can immediately support all the latest JavaScript features, especially those React 19 applications that use concurrency features such as `startTransition` and `useId` introduced by React 18.

## Compatibility {#compatibility}

To ensure that older browsers can also run your React application, you can use `Babel` to translate the code. Babel can convert modern JavaScript code into older versions that are more compatible. For example, you can use the `@babel/preset-env` preset to automatically handle this conversion process, ensuring that your code can run on older browsers. Here is a brief reference on browser support:

| version   | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
|-----------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| < 2.5.0   | Chrome ≥ 64                                                                              | Edge ≥ 79                                                                      | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                              |
| 2.5.0 +   | Chrome ≥ 85                                                                              | Edge ≥ 85                                                                      | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                            |

If you use Create React App (CRA), which already has built-in support for Babel, you can configure Babel by modifying or adding the `.babelrc` file or by using the babel.cnfig.js file, for example:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
Of course, you can also search through it [caniuse](https://caniuse.com/) the platform is used to query the support status of specific features on different browsers.

## Sass {#sass}

The current version of ease-reactify solution for styles is to use [Sass]（ https://github.com/sass ）This is supported by most modern browsers. However, if your target user group includes older browsers (such as IE), you may need additional polyfills or tools to ensure that styles also work properly on these older browsers.

In versions `2.8.5` and later, the minimum supported version of Sass is `1.79.0`. If your terminal prompts `legacy JS API Deprecation Warning`, such as in the Vite framework, you can configure the following code in  [vite.config.ts](https://vite.dev/config/shared-options.html#css-preprocessoroptions) are used to solve this problem:

```ts
css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}
```
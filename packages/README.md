<div align="center"><a name="readme-top"></a>

<img height="120" style="border-radius: 50px;" src="https://profile-avatar.csdnimg.cn/e4c40d19d85e4616a8c593d7b76e98fd_qq_53123067.jpg!1">

<h1>Ease Reactify</h1>

一套个人开放 UI 设计语言和 React 组件库。

![npm version](https://img.shields.io/npm/v/ease-reactify)
![downloads](https://img.shields.io/npm/dt/ease-reactify)
![license](https://img.shields.io/npm/l/ease-reactify)

· 中文 · [English](./README-en.md)

</div>

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 应用开发框架和设计工具配套。
- 🎨 基于 CSS-in-JS 的主题定制能力。

## 🖥 兼容环境

支持范围：https://browsersl.ist/#q=defaults

- 现代浏览器。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm install ease-reactify --save
```

```bash
yarn add ease-reactify
```

```bash
pnpm add ease-reactify
```

```bash
bun add ease-reactify
```

## 🔨 示例

```tsx
import React from 'react';
import { EButton } from 'ease-reactify';

const App = () => (
  <>
    <EButton type="primary">PRESS ME</EButton>
  </>
);

export default App;
```

## ⌨️ 本地开发

推荐使用 [opensumi.run](https://opensumi.run) 进行在线开发：

或者克隆到本地开发:

```bash
$ git clone git@github.com:ztK63LrD/ease-reactify.git
$ cd ease-reactify
$ npm install
$ npm start
```

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](https://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

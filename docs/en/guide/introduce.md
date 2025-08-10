---
outline: deep
---

# What is Ease-Reactify {#what-is-ease-react}

Easy React is currently based on [React 19](https://react.dev/learn) The efficient UI component library developed aims to provide developers with an easy-to-use and scalable UI solution, helping to quickly build beautiful and feature rich application interfaces. Its future mainly has the following characteristics:

- ✨ Integrating modern design aesthetics with smooth interactive experience
- 🚀 Ready to use high-performance React component set
- 🔒 Built on TypeScript, type safe and worry free
- 🛠️ Complete development toolchain and design resources
- 🌐 Support seamless switching between multiple languages `(currently under development...)`
- 🖌️ Refined theme configuration, easily adapted to brand style

<div class="tip custom-block" style="padding-top: 8px">

Do you want to give it a try immediately? Jump to [Quick Get Started](./quick-started)。

</div>

## Design Principles {#design-principles}

- **Simplicity and efficiency**

  The component library adopts concise and easy to understand APIs and configurations, enabling developers to quickly get started and apply them to projects. Developed based on React 19 and Vite, ensuring performance optimization and efficient development process, supporting hot updates and fast builds.

- **Scalability**

  The component library follows a modular design, where all components can be used independently and are easy to expand. Developers can easily customize and adjust styles according to their needs to meet various project requirements. Provide pluggable functionality that supports developers to enhance or modify component behavior through plugins and custom configurations.

- **Consistency**

  Provide a unified design language and consistent component style to ensure consistency in appearance and interaction of UI elements in the project, enhancing user experience. Support system design and theme functionality, allowing the interface style of the entire application to be flexibly switched as needed.

- **Easy to test**

  The component library integrates Vitest for unit testing to ensure the stability and reliability of components. All major components undergo rigorous unit testing to ensure efficient operation in different scenarios.

## Sample code {#sample-code}

```ts
// main.ts
import React from 'react';
import { EButton } from 'ease-reactify';

const App = () => {
  return <EButton />;
};

export default App;
```
### Component advantages {#component-advantages}

`ease-reactify` By default, tree shooting based on ES Modules is supported.

`ease-reactify` Written in TypeScript, providing complete type definitions without the need to introduce additional type definition files.

### Component status {#component-status}

The current UI component library adopts the `Sass` preprocessing solution in style development. With the powerful nesting, variable, and blending features of Sass, authors can write component styles more efficiently and standardly, greatly improving the convenience and maintainability of style development.

::: warning Style Solution

Due to the separation of styles and component logic, users need to separately import style files in the entrance file after packaging, in order for component styles to take effect properly, which to some extent increases the final packaging volume.

The style solution for component libraries will evolve towards the direction of `css-in-js` and be developed in conjunction with TypeScript. This transformation will bring significant advantages: component styles are closely integrated with logic, and users do not need to introduce additional style files, greatly simplifying the usage process. However, it should also be noted that this approach may result in additional computational costs for components during rendering, which may affect rendering efficiency to some extent.

:::

Overall, both solutions have their own focuses. The current Sass solution focuses on development convenience, while the future css-in-js solution places more emphasis on optimizing user experience. The author will smoothly transition according to actual scenario requirements, balancing development efficiency and operational performance.

## How to contribute {#how-to-contribute}

If you wish to contribute, please feel free to submit [Pull Request](https://github.com/ztK63LrD/ease-reactify/pulls), or [Contact Author](https://blog.csdn.net/qq_53123067)

> Highly recommended reading [《The Wisdom of Questioning》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《How to ask questions to the open source community》](https://github.com/seajs/seajs/issues/545) 和 [《How to effectively report bugs》](https://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《How to submit unanswerable questions to open source projects》](https://zhuanlan.zhihu.com/p/25795393), Better questions are easier to get help with.

## License {#license}

ease-reactify use [MIT License](https://opensource.org/license/MIT) license certificate.

If you think `ease-reactify` it's helpful to you, you can consider sponsoring it. This will greatly encourage the author to continue developing and maintaining the project. click [visit website](https://blog.csdn.net/qq_53123067) add wechat.



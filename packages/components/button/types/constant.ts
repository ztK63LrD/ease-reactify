// #region 规范按钮组件的常量类型
// 定义包含五种按钮类型的元组
const _ButtonTypes = ['default', 'primary', 'info', 'success', 'warning', 'danger'] as const;
export type ButtonType = (typeof _ButtonTypes)[number]; // 限制组件属性的取值范围

// 定义包含三种按钮形状的元组
const _ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof _ButtonShapes)[number];

// 定义包含三种按钮HTML类型的元组
const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];

// 定义包含三种按钮尺寸的元组
const _ButtonSizes = ['large', 'middle', 'small'] as const;
export type ButtonSize = (typeof _ButtonSizes)[number];

// 定义包含四种按钮格式的元组
const _ButtonFormats = ['default', 'dashed', 'text', 'link'] as const;
export type ButtonFormat = (typeof _ButtonFormats)[number];

// 定义包含三种按钮反馈的元组
const _ButtonFeedbacks = ['ripple', 'wavelet', 'none'] as const;
export type ButtonFeedback = (typeof _ButtonFeedbacks)[number];
// #endregion

import React from 'react'

// 定义包含五种按钮类型的元组
const _ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
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

export interface BaseButtonProps {
  type?: ButtonType; // 按钮类型，默认为 'default'
  shape?: ButtonShape; // 按钮形状，默认为 'default'
  htmlType?: ButtonHTMLType; // 按钮的 HTML 类型，默认为 'button'
  size?: ButtonSize; // 按钮尺寸，默认为 'middle'
  plain?: boolean; 
  disabled?: boolean;
  color?: string;
  children?: React.ReactNode;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type' | 'color'
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string;
  autoInsertSpace?: boolean;
}
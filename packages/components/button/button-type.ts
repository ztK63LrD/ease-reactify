import React from 'react'

// 创建了一个包含五种按钮类型的元组
const _ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
export type ButtonType = (typeof _ButtonTypes)[number]; // 限制组件属性的取值范围

const _ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof _ButtonShapes)[number];

const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];

export interface BaseButtonProps {
  type?: ButtonType;
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
  htmlType?: ButtonHTMLType;
  autoInsertSpace?: boolean;
}
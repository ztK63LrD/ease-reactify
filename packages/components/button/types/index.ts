import React from 'react'
import { ButtonHTMLType, ButtonSize, ButtonShape, ButtonType, ButtonFormat, ButtonFeedback } from './constant'

// 基础按钮属性
interface BaseButtonProps {
    type: ButtonType; // 按钮类型，默认为 'default'
    format: ButtonFormat; // 按钮格式，默认为 'default'
    feedback: ButtonFeedback; // 按钮反馈，默认为 'ripple'
    shape: ButtonShape; // 按钮形状，默认为 'default'
    htmlType: ButtonHTMLType; // 按钮的 HTML 类型，默认为 'button'
    size: ButtonSize; // 按钮尺寸，默认为 'middle'
    plain: boolean; // 是否为朴素按钮，默认为 false
    disabled: boolean; // 是否禁用状态，默认为 false
    loading: boolean; // 是否为加载中状态，默认为 false
    color: string; // 按钮颜色
    children: React.ReactNode; // 按钮内容，默认为 null
}

// icon属性
interface IconProps {
    icon: React.ReactNode; // 图标，默认为 null
    iconPlacement: 'left' | 'right'; // 图标位置，默认为 'left'
    iconSize: number | string; // 图标大小，默认为 16
    iconColor: string; // 图标颜色，默认为 '#000'
    iconStyle: React.CSSProperties; // 图标样式，默认为 {}
    iconClassName: string; // 图标类名，默认为 ''
}

// 合并HTMLAttributes和 ButtonHTMLAttributes的属性，但不包括type、color、disabled、children属性
type MergedHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type' | 'color' | 'disabled' | 'children'
>;

export interface inheritProps extends BaseButtonProps, IconProps, MergedHTMLAttributes {
    href: string;
    autoInsertSpace: boolean;
}

// 使所有属性可选(Partial)且只读(Readonly)
export type ButtonProps = Readonly<Partial<inheritProps>>;
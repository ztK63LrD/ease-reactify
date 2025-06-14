import React from 'react'
import { ButtonHTMLType, ButtonSize, ButtonShape, ButtonType } from './constant'

interface BaseButtonProps {
    type: ButtonType; // 按钮类型，默认为 'default'
    shape: ButtonShape; // 按钮形状，默认为 'default'
    htmlType: ButtonHTMLType; // 按钮的 HTML 类型，默认为 'button'
    size: ButtonSize; // 按钮尺寸，默认为 'middle'
    plain: boolean; // 是否为朴素按钮，默认为 false
    disabled: boolean; // 是否禁用状态，默认为 false
    loading: boolean; // 是否为加载中状态，默认为 false
    color: string; // 按钮颜色
    children: React.ReactNode; // 按钮内容，默认为 null
}

// 合并HTMLAttributes和 ButtonHTMLAttributes的属性，但不包括type、color、disabled、children属性
type MergedHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type' | 'color' | 'disabled' | 'children'
>;

interface inheritProps extends BaseButtonProps, MergedHTMLAttributes {
    href: string;
    autoInsertSpace: boolean;
}

// 使所有属性可选且只读
export type ButtonProps = Readonly<Partial<inheritProps>>;
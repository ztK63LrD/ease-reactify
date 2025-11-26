import React, { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import { createNameSpace } from "../utils/create"
import Wave from '../utils/wave';
import type { ButtonProps } from './types';
import "./styles/index.scss"

// 将一个 ref 转发到子组件的 DOM 元素或者子组件内部的某个元素
const EButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { type, format, feedback, shape, htmlType = 'button', size, plain, disabled, loading, color, children, className, ...rest } = props;
    const bem = createNameSpace('button'); // 组件变量声明

    const classes = clsx( // 使用 clsx 动态构建类名
        bem.block(), // 基础类名
        bem.modifier(type || 'default'), // type 修改器
        bem.modifier(format), // format 修改器
        bem.modifier(shape), // shape 修改器
        bem.modifier(size), // size 修改器
        bem.is('plain', plain), // plain 朴素状态
        bem.is('disabled', disabled), // disabled 状态
        bem.is('loading', loading), // loading 状态
        className, // 用户自定义类名
    );

    // 组件事件处理
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        props.onClick?.(
            'href' in props
                ? (e as React.MouseEvent<HTMLAnchorElement, MouseEvent>)
                : (e as React.MouseEvent<HTMLButtonElement, MouseEvent>),
        );
    }, [props.onClick, disabled]);
    return (
        <Wave feedback={feedback}>
            <button
                className={classes} // 直接应用动态类名
                type={htmlType}
                disabled={disabled || loading}
                onClick={handleClick}
                ref={ref}
                {...rest}
            >
                {children}
            </button>
        </Wave>
    );
});

export default EButton;

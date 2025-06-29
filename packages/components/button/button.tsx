import React, { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import { createNameSpace } from "@ztk63lrd/utils/create"
import type { ButtonProps } from './types';
import "./styles/index.scss"

// 将一个 ref 转发到子组件的 DOM 元素或者子组件内部的某个元素
const EButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    // #region 组件变量声明
    const bem = createNameSpace('button');
    const { type, shape, htmlType = 'button',  size, disabled, loading, color, children, ...rest } = props;
    // #endregion

    // #region 组件样式构建
    const classes = clsx( // 使用 clsx 动态构建类名
        bem.block(), // 基础类名
        bem.modifier(type || 'default'), // type 修改器
        bem.modifier(shape), // shape 修改器
        bem.modifier(size), // size 修改器
        bem.is('disabled', disabled), // disabled 状态
        bem.is('loading', loading) // loading 状态
    );
    // #endregion

    // #region 组件事件处理
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
    // #endregion
    return (
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
    );
});

export default EButton;

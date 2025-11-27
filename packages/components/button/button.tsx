import React, { forwardRef, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { createNameSpace } from "../utils/create"
import Wave from '../utils/wave';
import type { ButtonProps } from './types';
import "./styles/index.scss"

// 将一个 ref 转发到子组件的 DOM 元素或者子组件内部的某个元素
const EButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { type, format, feedback, shape, htmlType = 'button', size, plain, disabled, 
        loading, block, color, children, icon, iconPlacement = 'left', iconSize = 16, iconColor, 
        iconStyle, iconClassName, className, ...rest 
    } = props;
    const bem = createNameSpace('button'); // 组件变量声明
    const hasText = Boolean(children); // 判断是否有文字内容

    const classes = clsx( // 使用 clsx 动态构建类名
        bem.block(), // 基础类名
        bem.modifier(type || 'default'), // type 修改器
        bem.modifier(format), // format 修改器
        bem.modifier(shape), // shape 修改器
        bem.modifier(size), // size 修改器
        bem.is('plain', plain), // plain 朴素状态
        bem.is('disabled', disabled), // disabled 状态
        bem.is('loading', loading), // loading 状态
        bem.is('block', block), // block 状态
        bem.is('no-text', !hasText), // 无文字状态
        className, // 用户自定义类名
    );

    // 渲染图标
    const renderIcon = useMemo(() => {
        if (!icon) return null;

        const isLeft = iconPlacement === 'left';
        const hasChildren = Boolean(children);
        
        // 图标样式
        const iconStyles: React.CSSProperties = {
            fontSize: typeof iconSize === 'number' ? `${iconSize}px` : iconSize,
            ...(iconColor && { color: iconColor }),
            // 当图标和文字都存在时，添加间距
            ...(hasChildren && {
                ...(isLeft ? { marginRight: '6px' } : { marginLeft: '6px' })
            }),
            ...iconStyle,
        };

        // 如果图标是 React 元素，克隆它并应用样式
        if (React.isValidElement(icon)) {
            const iconElement = icon as React.ReactElement<{ style?: React.CSSProperties; className?: string }>;
            const existingStyle = iconElement.props?.style || {};
            const existingClassName = iconElement.props?.className || '';
            
            return React.cloneElement(iconElement, {
                style: {
                    ...existingStyle,
                    ...iconStyles,
                },
                className: clsx(existingClassName, iconClassName),
            } as Partial<{ style: React.CSSProperties; className: string }>);
        }

        // 如果图标是其他类型（字符串、数字等），包装在 span 中
        return (
            <span
                style={iconStyles}
                className={iconClassName}
            >
                {icon}
            </span>
        );
    }, [icon, iconSize, iconColor, iconStyle, iconClassName, iconPlacement, children]);

    // 根据图标位置决定内容顺序
    const buttonContent = useMemo(() => {
        if (!icon) return children;

        const iconElement = renderIcon;
        const isLeft = iconPlacement === 'left';

        return (
            <>
                {isLeft && iconElement}
                {children}
                {!isLeft && iconElement}
            </>
        );
    }, [icon, iconPlacement, renderIcon, children]);

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
                {buttonContent}
            </button>
        </Wave>
    );
});

export default EButton;

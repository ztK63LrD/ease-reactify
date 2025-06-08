import React, { forwardRef, useCallback } from 'react';
import "./styles/index.css"
import type { ButtonProps } from './button-type';

// 将一个 ref 转发到子组件的 DOM 元素或者子组件内部的某个元素
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { color, children, type, disabled, htmlType = 'button',  ...rest } = props;
    
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
        <button 
            onClick={handleClick}
            type={htmlType} 
            ref={ref}
            disabled={disabled} 
            {...rest} 
        >
            {children}
        </button>
    );
});

export default Button;

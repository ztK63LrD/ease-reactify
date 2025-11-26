import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
 
interface WaveProps {
    children: React.ReactNode;
    feedback?: 'ripple' | 'wavelet' | 'none' | undefined;
}
 
// 定义波纹基础样式
const waveBaseStyles: React.CSSProperties = {
    boxShadow: '0 0 0 5px currentColor',
    position: 'absolute',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    boxSizing: 'border-box',
    opacity: 0.2,
    transition: 'box-shadow 2s ease, opacity 2s ease'
};
 
// 定义波纹隐藏状态样式
const waveHideStyles: React.CSSProperties = {
    ...waveBaseStyles,
    opacity: 0,
    boxShadow: '0 0 0 2px currentColor'
};
 
const WaveEffect: React.FC<{ target: HTMLElement }> = ({ target }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [isHidden, setIsHidden] = useState(false);
 
    // 颜色验证和获取合并
    const getWaveColor = (node: HTMLElement, defaultColor = 'blue') => {
        const { borderColor, backgroundColor } = getComputedStyle(node);
        const isValid = (color: string) => color && !['transparent', 
            '#fff', '#ffffff', 'rgba(255, 255, 255, 1)', 'rgb(255, 255, 255)', // 白色系列
            '#000', '#000000', 'rgba(0, 0, 0, 1)', 'rgb(0, 0, 0)' // 黑色系列
        ].includes(color); 
        return isValid(backgroundColor) ? backgroundColor : isValid(borderColor) ? borderColor : defaultColor;
    };
    // 同步样式信息
    const syncStyle = () => {
        const {
            position, borderTopWidth, borderLeftWidth,
            borderTopLeftRadius, borderTopRightRadius,
            borderBottomRightRadius, borderBottomLeftRadius
        } = getComputedStyle(target);
        
        // 判断是否为静态定位，如果是则使用偏移量作为top和left值
        const isStatic = !position || position === 'static';
        setStyle({
            width: target.offsetWidth,
            height: target.offsetHeight,
            top: isStatic ? target.offsetTop : -parseFloat(borderTopWidth),
            left: isStatic ? target.offsetLeft : -parseFloat(borderLeftWidth),
            color: getWaveColor(target),
            borderRadius: [
                borderTopLeftRadius, borderTopRightRadius,
                borderBottomRightRadius, borderBottomLeftRadius
            ].join(' ')
        });
    };
 
    useEffect(() => {
        // 监听尺寸变化，同步样式信息
        const ob = new ResizeObserver(syncStyle);
        ob.observe(target);
        
        // 延迟执行，确保样式已经同步
        const id = requestAnimationFrame(() => {
            setIsHidden(true);
            syncStyle();
        });
        
        // 清理函数
        return () => {
            ob.disconnect();
            cancelAnimationFrame(id);
        };
    }, [target]);
 
    useEffect(() => {
        // 监听过渡结束，移除波纹元素
        const callback = () => divRef.current?.parentElement?.remove();
        const currentRef = divRef.current;
 
        currentRef?.addEventListener('transitionend', callback);
        return () => currentRef?.removeEventListener('transitionend', callback);
    }, []);
 
    // 合并基础样式、动态样式和隐藏状态样式
    const combinedStyles = {
        ...waveBaseStyles,
        ...style,
        ...(isHidden ? waveHideStyles : {})
    };
 
    return <div style={combinedStyles} ref={divRef} />;
};
 
const Wave: React.FC<WaveProps> = (props) => {
    const { children, feedback } = props;
    const containerRef = useRef<HTMLElement>(null);

    // 验证 children - 必须在所有 Hooks 之前
    if (Array.isArray(children)) {
        throw new Error('Wave component only accepts a single child element');
    }

    // 必须在所有 Hooks 之后才返回
    useEffect(() => {
        const node = containerRef.current;
        if (!node || node.nodeType !== 1 || node.getAttribute('disabled')) return;
        if (feedback === 'none') return;
        if (!React.isValidElement(children)) return;

        const handleClick = (e: MouseEvent) => {
            if (feedback === 'wavelet') {
                // 确保容器样式正确
                node.style.position = node.style.position || 'relative';
                node.style.overflow = 'hidden';

                // 定义小波样式
                const color = 'rgba(255, 255, 255, 0.3)';
                const duration = 1000;
                const rect = node.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('div');

                // 应用内联样式
                Object.assign(ripple.style, {
                    position: 'absolute',
                    width: '2px',
                    height: '2px',
                    left: `${x}px`,
                    top: `${y}px`,
                    borderRadius: '50%',
                    backgroundColor: color,
                    transform: 'scale(0)',
                    opacity: '1',
                    pointerEvents: 'none',
                    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`
                });

                node.appendChild(ripple);

                // 触发动画
                requestAnimationFrame(() => {
                    const maxDim = Math.max(node.offsetWidth, node.offsetHeight);
                    ripple.style.transform = `scale(${maxDim * 2})`;
                    ripple.style.opacity = '0';
                });

                // 动画结束后移除元素
                setTimeout(() => ripple.remove(), duration);
            }
            
            if (feedback === 'ripple' || feedback === undefined) {
                const warpper = document.createElement('div');
                Object.assign(warpper.style, {
                    position: 'absolute',
                    top: '0',
                    left: '0'
                });
                
                node.insertBefore(warpper, node.firstChild);
                const root = createRoot(warpper);
                root.render(<WaveEffect target={node} />);
            }
        };

        node.addEventListener('click', handleClick, true);
        return () => {
            node.removeEventListener('click', handleClick, true);
        };
    }, [feedback, children]);

    // 如果不是有效元素，直接返回
    if (!React.isValidElement(children)) {
        return <>{children}</>;
    }

    // 合并 ref 的函数
    const mergeRefs = (element: HTMLElement | null) => {
        containerRef.current = element;
        // 如果子元素有 ref，也调用它
        // 使用类型断言来访问 ref 属性
        const childRef = (children as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref;
        if (typeof childRef === 'function') {
            childRef(element);
        } else if (childRef && typeof childRef === 'object' && 'current' in childRef) {
            (childRef as React.MutableRefObject<HTMLElement | null>).current = element;
        }
    };

    // 克隆子元素并添加ref
    // ref 是 React 的特殊属性，需要通过特殊方式处理
    const childElement = children as React.ReactElement;
    const clonedProps: Record<string, unknown> = {
        ...(childElement.props as Record<string, unknown>),
        ref: mergeRefs
    };
    return React.cloneElement(childElement, clonedProps);
};
 
export default Wave;
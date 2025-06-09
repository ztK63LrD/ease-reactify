// 设置图标属性
export interface IconBaseProps {
    color: string;
    size: number | string;
}

// 使所有属性可选且只读
export type IconProps = Readonly<Partial<IconBaseProps>>;
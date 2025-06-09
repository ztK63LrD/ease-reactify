import type { IconProps } from '../types'

export const useStyle = (props: IconProps) => {
    return {
        ...(props.size ? { fontSize: props.size + "px"} : {}),
        ...(props.color ? { color: props.color} : {}),
    }
}
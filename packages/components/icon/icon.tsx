import React from 'react'
import { createNameSpace } from '../utils/create'
import type { IconProps } from './types'
import { useStyle } from './styles'

const Icon = (props : IconProps) => {
    const bem = createNameSpace('icon')
    const style = useStyle(props)

    return (
        <i className={bem.block()} style={style}></i>
    )
}

export default Icon
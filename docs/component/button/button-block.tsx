import React from 'react'
import { EButton } from 'ease-reactify'

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton block>default</EButton>
            <EButton type="primary" block>primary</EButton>
            <EButton format="dashed" block>dashed</EButton>
            <EButton block disabled>dashed</EButton>
            <EButton format="text" block>text</EButton>
            <EButton format="link" block>link</EButton>
        </div>
    </div>
  )
}

export default Button
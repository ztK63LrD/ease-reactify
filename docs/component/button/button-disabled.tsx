import React from 'react'
import { EButton } from 'ease-reactify'

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton>default</EButton>
            <EButton disabled>default(disabled)</EButton>
            <EButton type="primary">primary</EButton>
            <EButton type="primary" disabled>primary(disabled)</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton format="dashed">dashed</EButton>
            <EButton format="dashed" disabled>dashed(disabled)</EButton>
            <EButton format="text">text</EButton>
            <EButton format="text" disabled>text(disabled)</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton format="link">link</EButton>
            <EButton format="link" disabled>link(disabled)</EButton>
            <EButton type='primary' format="link">link</EButton>
            <EButton type='primary' format="link" disabled>primary link(disabled)</EButton>
        </div>
    </div>
  )
}

export default Button
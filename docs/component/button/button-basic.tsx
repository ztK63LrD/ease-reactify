import React from 'react'
import { EButton } from 'ease-reactify'

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton>默认按钮</EButton>
            <EButton type="primary">主要按钮</EButton>
            <EButton type="success">成功按钮</EButton>
            <EButton type="info">信息按钮</EButton>
            <EButton type="warning">警告按钮</EButton>
            <EButton type="danger">危险按钮</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton format="link">文本按钮</EButton>
            <EButton type="primary" format="link">文本按钮</EButton>
            <EButton type="success" format="link">文本按钮</EButton>
            <EButton type="info" format="link">文本按钮</EButton>
            <EButton type="warning" format="link">文本按钮</EButton>
            <EButton type="danger" format="link">文本按钮</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton plain>按钮</EButton>
            <EButton type="primary" plain>按钮</EButton>
            <EButton type="success" plain>按钮</EButton>
            <EButton type="info" plain>按钮</EButton>
            <EButton type="warning" plain>按钮</EButton>
            <EButton type="danger" plain className="test">按钮</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton format="default">默认按钮</EButton>
            <EButton format="dashed">虚线按钮</EButton>
            <EButton format="text">文本按钮</EButton>
            <EButton type="primary" format="link">链接按钮</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <EButton type="primary" shape="circle">circle按钮</EButton>
            <EButton type="primary" shape="round">round按钮</EButton>
        </div>
    </div>
  )
}

export default Button
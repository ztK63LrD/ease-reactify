import React from 'react'
import { EButton } from 'ease-reactify'
import { SearchOutlined } from '@ant-design/icons';

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <EButton type="primary" size="large">大尺寸</EButton>
            <EButton size="middle">中尺寸</EButton>
            <EButton size="small">小尺寸</EButton>
            <EButton type="primary" size="large" icon={<SearchOutlined />}>大尺寸</EButton>
            <EButton size="middle" icon={<SearchOutlined />}>中尺寸</EButton>
            <EButton size="small" icon={<SearchOutlined />}>小尺寸</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <EButton type="primary" size="large" shape='circle'>大尺寸</EButton>
            <EButton size="middle" shape='circle'>中尺寸</EButton>
            <EButton size="small" shape='circle'>小尺寸</EButton>
            <EButton type="primary" size="large" icon={<SearchOutlined />} shape='circle'>大尺寸</EButton>
            <EButton size="middle" icon={<SearchOutlined />} shape='circle'>中尺寸</EButton>
            <EButton size="small" icon={<SearchOutlined />} shape='circle'>小尺寸</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <EButton type="primary" size="large" icon={<SearchOutlined />} shape='circle'></EButton>
            <EButton size="middle" icon={<SearchOutlined />} shape='circle'></EButton>
            <EButton size="small" icon={<SearchOutlined />} shape='circle'></EButton>
        </div>
    </div>

  )
}

export default Button
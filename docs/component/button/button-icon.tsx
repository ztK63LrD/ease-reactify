import React from 'react'
import { EButton } from 'ease-reactify'
import { SearchOutlined } from '@ant-design/icons';

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <EButton type="primary" icon={<SearchOutlined />}>左搜索</EButton>
          <EButton type="primary" icon={<SearchOutlined />} iconPlacement="right">右搜索</EButton>
          <EButton icon={<SearchOutlined />} iconSize={30}>放大图标</EButton>
          <EButton icon={<SearchOutlined />} iconColor="#1890ff">改变颜色</EButton>
          <EButton icon={<SearchOutlined />} iconStyle={{ fontSize: '20px' }}>自定义样式</EButton>
          <EButton icon={<SearchOutlined />} iconClassName="test">自定义类名</EButton>
          <EButton type="primary" icon={<SearchOutlined />} shape="circle"></EButton>
        </div>
    </div>
  )
}

export default Button
import React from 'react'
import { EButton } from 'ease-reactify'

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <EButton feedback="ripple">波纹反馈</EButton>
        <EButton type="primary" feedback="wavelet">波浪反馈</EButton>
        <EButton type="warning" feedback="none">无反馈</EButton>
        <EButton type="info" feedback="ripple">波纹反馈</EButton>
        <EButton type="danger" feedback="wavelet">波浪反馈</EButton>
        <EButton feedback="none">无反馈</EButton>
    </div>
  )
}

export default Button
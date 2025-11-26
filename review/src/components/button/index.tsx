import EButton from "@ztk63lrd/components/button"
import BaseContainer from "../../common/base-container";
// import { EButton } from "ease-reactify";

const ButtonView = () => {
  return (
    <div>
        <BaseContainer title="基本样式">
          <EButton>默认按钮</EButton>
          <EButton type="primary">主要按钮</EButton>
          <EButton type="success">成功按钮</EButton>
          <EButton type="info">信息按钮</EButton>
          <EButton type="warning">警告按钮</EButton>
          <EButton type="danger">危险按钮</EButton>
        </BaseContainer>
        <BaseContainer title="格式样式">
          <EButton format="default">默认按钮</EButton>
          <EButton format="dashed">虚线按钮</EButton>
          <EButton format="text">文本按钮</EButton>
          <EButton format="link">链接按钮</EButton>
        </BaseContainer>
        <BaseContainer title="反馈样式">
          <EButton type="primary" feedback="ripple">波纹反馈</EButton>
          <EButton type="primary" feedback="wavelet">波浪反馈</EButton>
          <EButton type="primary" feedback="none">无反馈</EButton>
        </BaseContainer>
        <BaseContainer title="尺寸样式">
            <EButton type="primary" size="large">大尺寸</EButton>
          <EButton size="middle">中尺寸</EButton>
          <EButton size="small">小尺寸</EButton>
        </BaseContainer>
        <BaseContainer title="性状样式">
          <EButton type="primary" shape="circle">circle按钮</EButton>
          <EButton type="primary" shape="round">round按钮</EButton>
        </BaseContainer>
        <BaseContainer title="状态样式">
          <EButton plain>按钮</EButton>
          <EButton type="primary" plain>按钮</EButton>
          <EButton type="success" plain>按钮</EButton>
          <EButton type="info" plain>按钮</EButton>
          <EButton type="warning" plain>按钮</EButton>
          <EButton type="danger" plain className="test">按钮</EButton>
        </BaseContainer>
    </div>
  )
}

export default ButtonView
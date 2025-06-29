import EButton from "@ztk63lrd/components/button"
// import { EButton } from "ease-reactify";

const ButtonView = () => {
  return (
    <div>
        <h2>基本样式</h2>
        <EButton>按钮</EButton>
        <EButton type="primary">按钮</EButton>
        <EButton type="success">按钮</EButton>
        <EButton type="info">按钮</EButton>
        <EButton type="warning">按钮</EButton>
        <EButton type="danger">按钮</EButton>

        <h2>尺寸样式</h2>
        <EButton type="primary" size="large">按钮</EButton>
        <EButton size="middle">按钮</EButton>
        <EButton size="small">按钮</EButton>

        <h2>性状样式</h2>
        <EButton type="primary" shape="circle">circle按钮</EButton>
        <EButton type="primary" shape="round">round按钮</EButton>

        <h2>状态样式</h2>
        <EButton plain>按钮</EButton>
        <EButton type="primary" plain>按钮</EButton>
        <EButton type="success" plain>按钮</EButton>
        <EButton type="info" plain>按钮</EButton>
        <EButton type="warning" plain>按钮</EButton>
        <EButton type="danger" plain>按钮</EButton>
    </div>
  )
}

export default ButtonView
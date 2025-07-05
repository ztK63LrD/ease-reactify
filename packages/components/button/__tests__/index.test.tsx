import { expect, test, describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import EButton, { ButtonProps } from "../index";

const defaultProps = {
    onClick: vi.fn()
}
const testProps: ButtonProps = {
    type: "primary",
    size: 'large',
    className: 'ease-test',
}

describe("test EButton components", () => {
    it("应呈现正确的默认按钮", () => {
        const wrapper = render(<EButton {...defaultProps}>测试按钮</EButton>);
        const element = wrapper.getByText("测试按钮"); // 获取文本为"测试按钮"的元素
        expect(element).toBeInTheDocument(); // 断言该元素存在于文档中
        expect(element.tagName).toBe("BUTTON"); // 断言该元素的标签名为"BUTTON"
        expect(element).toHaveClass("ease-button"); // 断言该元素具有类名"ease-button"
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled(); // 断言onClick函数被调用
    });
    it("应根据不同的props渲染正确的组件", () => {
        const wrapper = render(<EButton {...testProps}>测试按钮</EButton>);
        const element = wrapper.getByText("测试按钮");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("ease-button ease-button--primary ease-button--large ease-test");
    });
    it("当btnType等于link并且提供了href时，应呈现链接", () => {

    })
    it("should render disabled button when disabled set to true", () => {

    })
});
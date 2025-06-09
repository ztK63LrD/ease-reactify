// block代码块 element元素 modifier装饰 state状态
/**
 * 示例：
 * ease-button--primary
 * is-checked
 */

// 创建BEM命名规范
const createBEM = (prefixName: string) => {
    const block = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
    const element = (element: string) => element ? _bem(prefixName, '', element, '') : ''
    const modifier = (modifier: string) => modifier ? _bem(prefixName, '', '', modifier) : ''
    const be = (blockSuffix: string = '', element: string = '') => 
        blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
    const bm = (blockSuffix: string = '', modifier: string = '') => 
        blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
    const em = (element: string = '', modifier: string = '') => 
        element && modifier ? _bem(prefixName, '', element, modifier) : ''
    const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => 
        blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''
    const is = (name: string, state: boolean) => (state ? `is-${name}` : "")

    return { block, element, modifier, be, bm, em, bem, is }
};

// BEM命名规范实现
const _bem = (prefixName: string, blockSuffix: string, element: string, modifier: string) => {
    if (blockSuffix) prefixName += `-${blockSuffix}`;
    if (element) prefixName += `__${element}`;
    if (modifier) prefixName += `--${modifier}`;
    return prefixName;
}

// 创建命名空间
export const createNameSpace = (name: string) => {
    const prefixName = `ease-${name}`
    return createBEM(prefixName)
};

// const bem = createNameSpace('icon')
// console.log(bem.block('block'))
// console.log(bem.element('element'))
// console.log(bem.modifier('modifier'))
// console.log(bem.be('block', 'element'))
// console.log(bem.bm('block', 'modifier'))
// console.log(bem.em('element', 'modifier'))
// console.log(bem.bem('block', 'element', 'modifier'))
// console.log(bem.is('checked', true))
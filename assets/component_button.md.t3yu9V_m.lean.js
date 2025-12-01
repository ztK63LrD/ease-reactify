const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/button-block.D8XaZOkd.js","assets/app.DY6DPDVp.js","assets/chunks/button.cq8UJR_d.js","assets/chunks/button-wave.8yEwD_pj.js","assets/chunks/button-disabled.DzgtW4dE.js","assets/chunks/button-size.u-AYwWlh.js","assets/chunks/button-icon.VTGIdwym.js","assets/chunks/button-basic.B5H4R08u.js"])))=>i.map(i=>d[i]);
import{s as u,e as d,f as c,r as k,g as C,c as g,o as _,a as Z,w as s,h as l,b as a,v as p,u as e,L as m,i as B,N as E,j as f,k as y,d as o}from"./app.DY6DPDVp.js";const R=`import React from 'react'
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
            <EButton type='primary' format="link" block>link</EButton>
        </div>
    </div>
  )
}

export default Button`,Y=`import React from 'react'
import { EButton } from 'ease-reactify'

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <EButton feedback="ripple">波纹反馈</EButton>
        <EButton type="primary" feedback="wavelet">波浪反馈</EButton>
        <EButton type="warning" feedback="none">无反馈</EButton>
        <EButton type="info" feedback="ripple">波纹反馈</EButton>
        <EButton type="danger" feedback="wavelet">波浪反馈</EButton>
        <EButton feedback="none">无反馈</EButton>
    </div>
  )
}

export default Button`,D=`import React from 'react'
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

export default Button`,A=`import React from 'react'
import { EButton } from 'ease-reactify'
import { SearchOutlined } from '@ant-design/icons';

const Button = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <EButton type="primary" size="large">大尺寸</EButton>
            <EButton size="middle">中尺寸</EButton>
            <EButton size="small">小尺寸</EButton>
            <EButton type="primary" size="large" icon={<SearchOutlined />}>大尺寸</EButton>
            <EButton size="middle" icon={<SearchOutlined />}>中尺寸</EButton>
            <EButton size="small" icon={<SearchOutlined />}>小尺寸</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <EButton type="primary" size="large" shape='circle'>大尺寸</EButton>
            <EButton size="middle" shape='circle'>中尺寸</EButton>
            <EButton size="small" shape='circle'>小尺寸</EButton>
            <EButton type="primary" size="large" icon={<SearchOutlined />} shape='circle'>大尺寸</EButton>
            <EButton size="middle" icon={<SearchOutlined />} shape='circle'>中尺寸</EButton>
            <EButton size="small" icon={<SearchOutlined />} shape='circle'>小尺寸</EButton>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <EButton type="primary" size="large" icon={<SearchOutlined />} shape='circle'></EButton>
            <EButton size="middle" icon={<SearchOutlined />} shape='circle'></EButton>
            <EButton size="small" icon={<SearchOutlined />} shape='circle'></EButton>
        </div>
    </div>

  )
}

export default Button`,V=`import React from 'react'
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

export default Button`,L=`import React from 'react'
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

export default Button`,G=JSON.parse('{"title":"Button按钮","description":"按钮用于开始一个即时操作。","frontmatter":{"category":"Components","title":"Button按钮","subtitle":"按钮","description":"按钮用于开始一个即时操作。","outline":"deep","demo":{"cols":3},"group":{"title":"通用","order":1}},"headers":[],"relativePath":"component/button.md","filePath":"zh/component/button.md","lastUpdated":1764600002000}'),X={name:"component/button.md"},N=Object.assign(X,{setup(T){const b=u();d(async()=>{b.value=(await c(async()=>{const{default:r}=await import("./chunks/button-block.D8XaZOkd.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const h=u();d(async()=>{h.value=(await c(async()=>{const{default:r}=await import("./chunks/button-wave.8yEwD_pj.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const v=u();d(async()=>{v.value=(await c(async()=>{const{default:r}=await import("./chunks/button-disabled.DzgtW4dE.js");return{default:r}},__vite__mapDeps([4,1,2]))).default});const x=u();d(async()=>{x.value=(await c(async()=>{const{default:r}=await import("./chunks/button-size.u-AYwWlh.js");return{default:r}},__vite__mapDeps([5,1,2]))).default});const W=u();d(async()=>{W.value=(await c(async()=>{const{default:r}=await import("./chunks/button-icon.VTGIdwym.js");return{default:r}},__vite__mapDeps([6,1,2]))).default});const n=k(!0),w=u();return d(async()=>{w.value=(await c(async()=>{const{default:r}=await import("./chunks/button-basic.B5H4R08u.js");return{default:r}},__vite__mapDeps([7,1,2]))).default}),(r,t)=>{const i=C("ClientOnly");return _(),g("div",null,[t[6]||(t[6]=Z("",8)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),reactCode:e(L),reactComponent:w.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[7]||(t[7]=a("h3",{id:"button-icon",tabindex:"-1"},[o("按钮图标 "),a("a",{class:"header-anchor",href:"#button-icon","aria-label":'Permalink to "按钮图标 {#button-icon}"'},"​")],-1)),t[8]||(t[8]=a("p",null,[o("使用 "),a("code",null,"icon"),o(" 为按钮添加图标设置更多的含义，可以使用不同图标定义参数来控制按钮显示。")],-1)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),reactCode:e(V),reactComponent:W.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[9]||(t[9]=a("h3",{id:"button-size",tabindex:"-1"},[o("按钮尺寸 "),a("a",{class:"header-anchor",href:"#button-size","aria-label":'Permalink to "按钮尺寸 {#button-size}"'},"​")],-1)),t[10]||(t[10]=a("p",null,[o("使用 "),a("code",null,"size"),o(" 为按钮添加不同的尺寸去选择，以便适配不同的场景。")],-1)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),reactCode:e(A),reactComponent:x.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[11]||(t[11]=a("h3",{id:"button-disabled",tabindex:"-1"},[o("按钮禁用 "),a("a",{class:"header-anchor",href:"#button-disabled","aria-label":'Permalink to "按钮禁用 {#button-disabled}"'},"​")],-1)),t[12]||(t[12]=a("p",null,[o("添加 "),a("code",null,"disabled"),o(" 属性即可让按钮处于不可用状态，同时按钮样式也会改变。")],-1)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{n.value=!1}),reactCode:e(D),reactComponent:v.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[13]||(t[13]=a("h3",{id:"button-wave",tabindex:"-1"},[o("按钮反馈 "),a("a",{class:"header-anchor",href:"#button-wave","aria-label":'Permalink to "按钮反馈 {#button-wave}"'},"​")],-1)),t[14]||(t[14]=a("p",null,[o("添加 "),a("code",null,"feedback"),o(" 属性即可改变按钮的反馈效果。")],-1)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[4]||(t[4]=()=>{n.value=!1}),reactCode:e(Y),reactComponent:h.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1}),t[15]||(t[15]=a("h3",{id:"button-block",tabindex:"-1"},[o("按钮宽度 "),a("a",{class:"header-anchor",href:"#button-block","aria-label":'Permalink to "按钮宽度 {#button-block}"'},"​")],-1)),t[16]||(t[16]=a("p",null,[o("添加 "),a("code",null,"block"),o(" 属性即可改变按钮的宽度，自适应父级宽度。")],-1)),s(l(e(m),null,null,512),[[p,n.value]]),l(i,null,{default:B(()=>[l(e(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[5]||(t[5]=()=>{n.value=!1}),reactCode:e(R),reactComponent:b.value,reactCreateRoot:e(y.createRoot),reactCreateElement:e(f.createElement)},null,8,["reactCode","reactComponent","reactCreateRoot","reactCreateElement"])]),_:1})])}}});export{G as __pageData,N as default};

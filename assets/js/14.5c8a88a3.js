(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{539:function(_,v,e){"use strict";e.r(v);var t=e(6),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("我们首先来回顾一下"),e("code",[_._v("渲染流水线")]),_._v("的流程:")]),_._v(" "),e("p",[e("img",{attrs:{src:_.$withBase("/week11/1.jpg"),alt:"project"}})]),_._v(" "),e("p",[_._v("接下来，我们将来以此为依据来介绍重绘和回流，以及让更新视图的另外一种方式——合成。")]),_._v(" "),e("h2",{attrs:{id:"回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[_._v("#")]),_._v(" 回流")]),_._v(" "),e("p",[_._v("首先介绍"),e("code",[_._v("回流")]),_._v("。"),e("code",[_._v("回流")]),_._v("也叫"),e("code",[_._v("重排")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"触发条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[_._v("#")]),_._v(" 触发条件")]),_._v(" "),e("p",[_._v("简单来说，就是当我们对 DOM 结构的修改引发 DOM 几何尺寸变化的时候，会发生"),e("code",[_._v("回流")]),_._v("的过程。")]),_._v(" "),e("p",[_._v("具体一点，有以下的操作会触发回流:")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("一个 DOM 元素的几何属性变化，常见的几何属性有"),e("code",[_._v("width")]),_._v("、"),e("code",[_._v("height")]),_._v("、"),e("code",[_._v("padding")]),_._v("、"),e("code",[_._v("margin")]),_._v("、"),e("code",[_._v("left")]),_._v("、"),e("code",[_._v("top")]),_._v("、"),e("code",[_._v("border")]),_._v(" 等等, 这个很好理解。")])]),_._v(" "),e("li",[e("p",[_._v("使 DOM 节点发生"),e("code",[_._v("增减")]),_._v("或者"),e("code",[_._v("移动")]),_._v("。")])]),_._v(" "),e("li",[e("p",[_._v("读写 "),e("code",[_._v("offset")]),_._v("族、"),e("code",[_._v("scroll")]),_._v("族和"),e("code",[_._v("client")]),_._v("族属性的时候，浏览器为了获取这些值，需要进行回流操作。")])]),_._v(" "),e("li",[e("p",[_._v("调用 "),e("code",[_._v("window.getComputedStyle")]),_._v(" 方法。")])])]),_._v(" "),e("h3",{attrs:{id:"回流过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流过程"}},[_._v("#")]),_._v(" 回流过程")]),_._v(" "),e("p",[_._v("依照上面的渲染流水线，触发回流的时候，如果 DOM 结构发生改变，则重新渲染 DOM 树，然后将后面的流程(包括主线程之外的任务)全部走一遍。")]),_._v(" "),e("p",[e("img",{attrs:{src:_.$withBase("/week11/2.jpg"),alt:"project"}})]),_._v(" "),e("p",[_._v("相当于将解析和合成的过程重新又走了一篇，开销是非常大的。")]),_._v(" "),e("h2",{attrs:{id:"重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[_._v("#")]),_._v(" 重绘")]),_._v(" "),e("h3",{attrs:{id:"触发条件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件-2"}},[_._v("#")]),_._v(" 触发条件")]),_._v(" "),e("p",[_._v("当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致"),e("code",[_._v("重绘")]),_._v("("),e("code",[_._v("repaint")]),_._v(")。")]),_._v(" "),e("h3",{attrs:{id:"重绘过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘过程"}},[_._v("#")]),_._v(" 重绘过程")]),_._v(" "),e("p",[_._v("由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，从而省去布局的过程。流程如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:_.$withBase("/week11/3.jpg"),alt:"project"}})]),_._v(" "),e("p",[_._v("跳过了"),e("code",[_._v("生成布局树")]),_._v("和"),e("code",[_._v("建图层树")]),_._v("的阶段，直接生成绘制列表，然后继续进行分块、生成位图等后面一系列操作。")]),_._v(" "),e("p",[_._v("可以看到，重绘不一定导致回流，但回流一定发生了重绘。")]),_._v(" "),e("h2",{attrs:{id:"合成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[_._v("#")]),_._v(" 合成")]),_._v(" "),e("p",[_._v("还有一种情况，是直接合成。比如利用 CSS3 的"),e("code",[_._v("transform")]),_._v("、"),e("code",[_._v("opacity")]),_._v("、"),e("code",[_._v("filter")]),_._v("这些属性就可以实现合成的效果，也就是大家常说的"),e("strong",[_._v("GPU加速")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"gpu加速的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gpu加速的原因"}},[_._v("#")]),_._v(" GPU加速的原因")]),_._v(" "),e("p",[_._v("在合成的情况下，会直接跳过布局和绘制流程，直接进入"),e("code",[_._v("非主线程")]),_._v("处理的部分，即直接交给"),e("code",[_._v("合成线程")]),_._v("处理。交给它处理有两大好处:")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("能够充分发挥"),e("code",[_._v("GPU")]),_._v("的优势。合成线程生成位图的过程中会调用线程池，并在其中使用"),e("code",[_._v("GPU")]),_._v("进行加速生成，而GPU 是擅长处理位图数据的。")])]),_._v(" "),e("li",[e("p",[_._v("没有占用主线程的资源，即使主线程卡住了，效果依然能够流畅地展示。")])])]),_._v(" "),e("h2",{attrs:{id:"实践意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践意义"}},[_._v("#")]),_._v(" 实践意义")]),_._v(" "),e("p",[_._v("知道上面的原理之后，对于开发过程有什么指导意义呢？")]),_._v(" "),e("ol",[e("li",[_._v("避免频繁使用 style，而是采用修改"),e("code",[_._v("class")]),_._v("的方式。")]),_._v(" "),e("li",[_._v("使用"),e("code",[_._v("createDocumentFragment")]),_._v("进行批量的 DOM 操作。")]),_._v(" "),e("li",[_._v("对于 resize、scroll 等进行防抖/节流处理。")]),_._v(" "),e("li",[_._v("添加 will-change: tranform ，让渲染引擎为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。当然这个变化不限于"),e("code",[_._v("tranform")]),_._v(", 任何可以实现合成效果的 CSS 属性都能用"),e("code",[_._v("will-change")]),_._v("来声明。这里有一个实际的例子，一行"),e("code",[_._v("will-change: tranform")]),_._v("拯救一个项目，"),e("a",{attrs:{href:"https://juejin.im/post/5da52531518825094e373372",target:"_blank",rel:"noopener noreferrer"}},[_._v("点击直达"),e("OutboundLink")],1),_._v("。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);
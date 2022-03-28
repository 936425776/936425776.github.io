(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{600:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("对于"),a("code",[t._v("Accept")]),t._v("系列字段的介绍分为四个部分: "),a("strong",[t._v("数据格式")]),t._v("、"),a("strong",[t._v("压缩方式")]),t._v("、"),a("strong",[t._v("支持语言")]),t._v("和"),a("strong",[t._v("字符集")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"数据格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[t._v("#")]),t._v(" 数据格式")]),t._v(" "),a("p",[t._v("上一节谈到 HTTP 灵活的特性，它支持非常多的数据格式，那么这么多格式的数据一起到达客户端，客户端怎么知道它的格式呢？")]),t._v(" "),a("p",[t._v("当然，最低效的方式是直接猜，有没有更好的方式呢？直接指定可以吗？")]),t._v(" "),a("p",[t._v("答案是肯定的。不过首先需要介绍一个标准——"),a("strong",[t._v("MIME")]),t._v("(Multipurpose Internet Mail Extensions, "),a("strong",[t._v("多用途互联网邮件扩展")]),t._v(")。它首先用在电子邮件系统中，让邮件可以发任意类型的数据，这对于 HTTP 来说也是通用的。")]),t._v(" "),a("p",[t._v("因此，HTTP 从"),a("strong",[t._v("MIME type")]),t._v("取了一部分来标记报文 body 部分的数据类型，这些类型体现在"),a("code",[t._v("Content-Type")]),t._v("这个字段，当然这是针对于发送端而言，接收端想要收到特定类型的数据，也可以用"),a("code",[t._v("Accept")]),t._v("字段。")]),t._v(" "),a("p",[t._v("具体而言，这两个字段的取值可以分为下面几类:")]),t._v(" "),a("ul",[a("li",[t._v("text： text/html, text/plain, text/css 等")]),t._v(" "),a("li",[t._v("image: image/gif, image/jpeg, image/png 等")]),t._v(" "),a("li",[t._v("audio/video: audio/mpeg, video/mp4 等")]),t._v(" "),a("li",[t._v("application: application/json, application/javascript, application/pdf, application/octet-stream")])]),t._v(" "),a("h2",{attrs:{id:"压缩方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),a("p",[t._v("当然一般这些数据都是会进行编码压缩的，采取什么样的压缩方式就体现在了发送方的"),a("code",[t._v("Content-Encoding")]),t._v("字段上， 同样的，接收什么样的压缩方式体现在了接受方的"),a("code",[t._v("Accept-Encoding")]),t._v("字段上。这个字段的取值有下面几种：")]),t._v(" "),a("ul",[a("li",[t._v("gzip: 当今最流行的压缩格式")]),t._v(" "),a("li",[t._v("deflate: 另外一种著名的压缩格式")]),t._v(" "),a("li",[t._v("br: 一种专门为 HTTP 发明的压缩算法")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gizp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"支持语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持语言"}},[t._v("#")]),t._v(" 支持语言")]),t._v(" "),a("p",[t._v("对于发送方而言，还有一个"),a("code",[t._v("Content-Language")]),t._v("字段，在需要实现国际化的方案当中，可以用来指定支持的语言，在接受方对应的字段为"),a("code",[t._v("Accept-Language")]),t._v("。如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[t._v("#")]),t._v(" 字符集")]),t._v(" "),a("p",[t._v("最后是一个比较特殊的字段, 在接收端对应为"),a("code",[t._v("Accept-Charset")]),t._v("，指定可以接受的字符集，而在发送端并没有对应的"),a("code",[t._v("Content-Charset")]),t._v(", 而是直接放在了"),a("code",[t._v("Content-Type")]),t._v("中，以"),a("strong",[t._v("charset")]),t._v("属性指定。如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("最后以一张图来总结一下吧:")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/http/005.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);
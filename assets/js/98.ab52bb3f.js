(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{619:function(v,_,t){"use strict";t.r(_);var s=t(6),n=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("上一节所说的"),t("strong",[v._v("流量控制")]),v._v("发生在发送端跟接收端之间，并没有考虑到整个网络环境的影响，如果说当前网络特别差，特别容易丢包，那么发送端就应该注意一些了。而这，也正是"),t("code",[v._v("拥塞控制")]),v._v("需要处理的问题。")]),v._v(" "),t("p",[v._v("对于拥塞控制来说，TCP 每条连接都需要维护两个核心状态:")]),v._v(" "),t("ul",[t("li",[v._v("拥塞窗口（Congestion Window，cwnd）")]),v._v(" "),t("li",[v._v("慢启动阈值（Slow Start Threshold，ssthresh）")])]),v._v(" "),t("p",[v._v("涉及到的算法有这几个:")]),v._v(" "),t("ul",[t("li",[v._v("慢启动")]),v._v(" "),t("li",[v._v("拥塞避免")]),v._v(" "),t("li",[v._v("快速重传和快速恢复")])]),v._v(" "),t("p",[v._v("接下来，我们就来一一拆解这些状态和算法。首先，从拥塞窗口说起。")]),v._v(" "),t("h2",{attrs:{id:"拥塞窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞窗口"}},[v._v("#")]),v._v(" 拥塞窗口")]),v._v(" "),t("p",[v._v("拥塞窗口（Congestion Window，cwnd）是指目前自己还能传输的数据量大小。")]),v._v(" "),t("p",[v._v("那么之前介绍了接收窗口的概念，两者有什么区别呢？")]),v._v(" "),t("ul",[t("li",[v._v("接收窗口(rwnd)是"),t("code",[v._v("接收端")]),v._v("给的限制")]),v._v(" "),t("li",[v._v("拥塞窗口(cwnd)是"),t("code",[v._v("发送端")]),v._v("的限制")])]),v._v(" "),t("p",[v._v("限制谁呢？")]),v._v(" "),t("p",[v._v("限制的是"),t("code",[v._v("发送窗口")]),v._v("的大小。")]),v._v(" "),t("p",[v._v("有了这两个窗口，如何来计算"),t("code",[v._v("发送窗口")]),v._v("？")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("发送窗口大小 = min(rwnd, cwnd)\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("取两者的较小值。而拥塞控制，就是来控制"),t("code",[v._v("cwnd")]),v._v("的变化。")]),v._v(" "),t("h2",{attrs:{id:"慢启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢启动"}},[v._v("#")]),v._v(" 慢启动")]),v._v(" "),t("p",[v._v("刚开始进入传输数据的时候，你是不知道现在的网路到底是稳定还是拥堵的，如果做的太激进，发包太急，那么疯狂丢包，造成雪崩式的网络灾难。")]),v._v(" "),t("p",[v._v("因此，拥塞控制首先就是要采用一种保守的算法来慢慢地适应整个网路，这种算法叫"),t("code",[v._v("慢启动")]),v._v("。运作过程如下:")]),v._v(" "),t("ul",[t("li",[v._v("首先，三次握手，双方宣告自己的接收窗口大小")]),v._v(" "),t("li",[v._v("双方初始化自己的"),t("strong",[v._v("拥塞窗口")]),v._v("(cwnd)大小")]),v._v(" "),t("li",[v._v("在开始传输的一段时间，发送端每收到一个 ACK，拥塞窗口大小加 1，也就是说，每经过一个 RTT，cwnd 翻倍。如果说初始窗口为 10，那么第一轮 10 个报文传完且发送端收到 ACK 后，cwnd 变为 20，第二轮变为 40，第三轮变为 80，依次类推。")])]),v._v(" "),t("p",[v._v("难道就这么无止境地翻倍下去？当然不可能。它的阈值叫做"),t("strong",[v._v("慢启动阈值")]),v._v("，当 cwnd 到达这个阈值之后，好比踩了下刹车，别涨了那么快了，老铁，先 hold 住！")]),v._v(" "),t("p",[v._v("在到达阈值后，如何来控制 cwnd 的大小呢？")]),v._v(" "),t("p",[v._v("这就是拥塞避免做的事情了。")]),v._v(" "),t("h2",{attrs:{id:"拥塞避免"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[v._v("#")]),v._v(" 拥塞避免")]),v._v(" "),t("p",[v._v("原来每收到一个 ACK，cwnd 加1，现在到达阈值了，cwnd 只能加这么一点: "),t("strong",[v._v("1 / cwnd")]),v._v("。那你仔细算算，一轮 RTT 下来，收到 cwnd 个 ACK, 那最后拥塞窗口的大小 cwnd 总共才增加 1。")]),v._v(" "),t("p",[v._v("也就是说，以前一个 RTT 下来，"),t("code",[v._v("cwnd")]),v._v("翻倍，现在"),t("code",[v._v("cwnd")]),v._v("只是增加 1 而已。")]),v._v(" "),t("p",[v._v("当然，"),t("strong",[v._v("慢启动")]),v._v("和"),t("strong",[v._v("拥塞避免")]),v._v("是一起作用的，是一体的。")]),v._v(" "),t("h2",{attrs:{id:"快速重传和快速恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速重传和快速恢复"}},[v._v("#")]),v._v(" 快速重传和快速恢复")]),v._v(" "),t("h3",{attrs:{id:"快速重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[v._v("#")]),v._v(" 快速重传")]),v._v(" "),t("p",[v._v("在 TCP 传输的过程中，如果发生了丢包，即接收端发现数据段不是按序到达的时候，接收端的处理是重复发送之前的 ACK。")]),v._v(" "),t("p",[v._v("比如第 5 个包丢了，即使第 6、7 个包到达的接收端，接收端也一律返回第 4 个包的 ACK。当发送端收到 3 个重复的 ACK 时，意识到丢包了，于是马上进行重传，不用等到一个 RTO 的时间到了才重传。")]),v._v(" "),t("p",[v._v("这就是"),t("strong",[v._v("快速重传")]),v._v("，它解决的是"),t("strong",[v._v("是否需要重传")]),v._v("的问题。")]),v._v(" "),t("h3",{attrs:{id:"选择性重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择性重传"}},[v._v("#")]),v._v(" 选择性重传")]),v._v(" "),t("p",[v._v("那你可能会问了，既然要重传，那么只重传第 5 个包还是第5、6、7 个包都重传呢？")]),v._v(" "),t("p",[v._v("当然第 6、7 个都已经到达了，TCP 的设计者也不傻，已经传过去干嘛还要传？干脆记录一下哪些包到了，哪些没到，针对性地重传。")]),v._v(" "),t("p",[v._v("在收到发送端的报文后，接收端回复一个 ACK 报文，那么在这个报文首部的可选项中，就可以加上"),t("code",[v._v("SACK")]),v._v("这个属性，通过"),t("code",[v._v("left edge")]),v._v("和"),t("code",[v._v("right edge")]),v._v("告知发送端已经收到了哪些区间的数据报。因此，即使第 5 个包丢包了，当收到第 6、7 个包之后，接收端依然会告诉发送端，这两个包到了。剩下第 5 个包没到，就重传这个包。这个过程也叫做"),t("strong",[v._v("选择性重传(SACK，Selective Acknowledgment)")]),v._v("，它解决的是"),t("strong",[v._v("如何重传")]),v._v("的问题。")]),v._v(" "),t("h3",{attrs:{id:"快速恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速恢复"}},[v._v("#")]),v._v(" 快速恢复")]),v._v(" "),t("p",[v._v("当然，发送端收到三次重复 ACK 之后，发现丢包，觉得现在的网络已经有些拥塞了，自己会进入"),t("strong",[v._v("快速恢复")]),v._v("阶段。")]),v._v(" "),t("p",[v._v("在这个阶段，发送端如下改变：")]),v._v(" "),t("ul",[t("li",[v._v("拥塞阈值降低为 cwnd 的一半")]),v._v(" "),t("li",[v._v("cwnd 的大小变为拥塞阈值")]),v._v(" "),t("li",[v._v("cwnd 线性增加")])]),v._v(" "),t("p",[v._v("以上就是 TCP 拥塞控制的经典算法: "),t("strong",[v._v("慢启动")]),v._v("、"),t("strong",[v._v("拥塞避免")]),v._v("、"),t("strong",[v._v("快速重传和快速恢复")]),v._v("。")])])}),[],!1,null,null,null);_.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{614:function(v,_,t){"use strict";t.r(_);var e=t(6),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"过程拆解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程拆解"}},[v._v("#")]),v._v(" 过程拆解")]),v._v(" "),t("p",[t("img",{attrs:{src:v.$withBase("/tcp/002.jpg")}})]),v._v(" "),t("p",[v._v("刚开始双方处于"),t("code",[v._v("ESTABLISHED")]),v._v("状态。")]),v._v(" "),t("p",[v._v("客户端要断开了，向服务器发送 "),t("code",[v._v("FIN")]),v._v(" 报文，在 TCP 报文中的位置如下图:")]),v._v(" "),t("p",[t("img",{attrs:{src:v.$withBase("/tcp/003.jpg")}})]),v._v(" "),t("p",[v._v("发送后客户端变成了"),t("code",[v._v("FIN-WAIT-1")]),v._v("状态。注意, 这时候客户端同时也变成了"),t("code",[v._v("half-close(半关闭)")]),v._v("状态，即无法向服务端发送报文，只能接收。")]),v._v(" "),t("p",[v._v("服务端接收后向客户端确认，变成了"),t("code",[v._v("CLOSED-WAIT")]),v._v("状态。")]),v._v(" "),t("p",[v._v("客户端接收到了服务端的确认，变成了"),t("code",[v._v("FIN-WAIT2")]),v._v("状态。")]),v._v(" "),t("p",[v._v("随后，服务端向客户端发送"),t("code",[v._v("FIN")]),v._v("，自己进入"),t("code",[v._v("LAST-ACK")]),v._v("状态，")]),v._v(" "),t("p",[v._v("客户端收到服务端发来的"),t("code",[v._v("FIN")]),v._v("后，自己变成了"),t("code",[v._v("TIME-WAIT")]),v._v("状态，然后发送 ACK 给服务端。")]),v._v(" "),t("p",[v._v("注意了，这个时候，客户端需要等待足够长的时间，具体来说，是 2 个 "),t("code",[v._v("MSL")]),v._v("("),t("code",[v._v("Maximum Segment Lifetime，报文最大生存时间")]),v._v("), 在这段时间内如果客户端没有收到服务端的重发请求，那么表示 ACK 成功到达，挥手结束，否则客户端重发 ACK。")]),v._v(" "),t("h2",{attrs:{id:"等待2msl的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等待2msl的意义"}},[v._v("#")]),v._v(" 等待2MSL的意义")]),v._v(" "),t("p",[v._v("如果不等待会怎样？")]),v._v(" "),t("p",[v._v("如果不等待，客户端直接跑路，当服务端还有很多数据包要给客户端发，且还在路上的时候，若客户端的端口此时刚好被新的应用占用，那么就接收到了无用数据包，造成数据包混乱。所以，最保险的做法是等服务器发来的数据包都死翘翘再启动新的应用。")]),v._v(" "),t("p",[v._v("那，照这样说一个 MSL 不就不够了吗，为什么要等待 2 MSL?")]),v._v(" "),t("ul",[t("li",[v._v("1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端")]),v._v(" "),t("li",[v._v("1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达")])]),v._v(" "),t("p",[v._v("这就是等待 2MSL 的意义。")]),v._v(" "),t("h2",{attrs:{id:"为什么是四次挥手而不是三次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么是四次挥手而不是三次"}},[v._v("#")]),v._v(" 为什么是四次挥手而不是三次？")]),v._v(" "),t("p",[v._v("因为服务端在接收到"),t("code",[v._v("FIN")]),v._v(", 往往不会立即返回"),t("code",[v._v("FIN")]),v._v(", 必须等到服务端所有的报文都发送完毕了，才能发"),t("code",[v._v("FIN")]),v._v("。因此先发一个"),t("code",[v._v("ACK")]),v._v("表示已经收到客户端的"),t("code",[v._v("FIN")]),v._v("，延迟一段时间才发"),t("code",[v._v("FIN")]),v._v("。这就造成了四次挥手。")]),v._v(" "),t("p",[v._v("如果是三次挥手会有什么问题？")]),v._v(" "),t("p",[v._v("等于说服务端将"),t("code",[v._v("ACK")]),v._v("和"),t("code",[v._v("FIN")]),v._v("的发送合并为一次挥手，这个时候长时间的延迟可能会导致客户端误以为"),t("code",[v._v("FIN")]),v._v("没有到达客户端，从而让客户端不断的重发"),t("code",[v._v("FIN")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"同时关闭会怎样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同时关闭会怎样"}},[v._v("#")]),v._v(" 同时关闭会怎样？")]),v._v(" "),t("p",[v._v("如果客户端和服务端同时发送 FIN ，状态会如何变化？如图所示:")]),v._v(" "),t("p",[t("img",{attrs:{src:v.$withBase("/tcp/014.jpg")}})])])}),[],!1,null,null,null);_.default=a.exports}}]);
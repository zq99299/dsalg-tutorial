(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{388:function(v,_,t){v.exports=t.p+"assets/img/image-20200627190342488.36d57cc2.png"},389:function(v,_,t){v.exports=t.p+"assets/img/image-20200627191411507.b77985bf.png"},390:function(v,_,t){v.exports=t.p+"assets/img/203947383.22907ea0.gif"},391:function(v,_,t){v.exports=t.p+"assets/img/image-20200627193219662.945b8544.png"},392:function(v,_,t){v.exports=t.p+"assets/img/image-20200627194020031.0fb81db6.png"},565:function(v,_,t){"use strict";t.r(_);var s=t(20),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"内容介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容介绍"}},[v._v("#")]),v._v(" 内容介绍")]),v._v(" "),s("p",[v._v("先来看几个经典的算法面试题，了解下算法大概是个什么东西")]),v._v(" "),s("h2",{attrs:{id:"字符串匹配问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串匹配问题"}},[v._v("#")]),v._v(" 字符串匹配问题")]),v._v(" "),s("p",[v._v("有如下字符串 ，判定 str1 中是否包含 str2，如果出现则返回第一次出现的位置，如果没有则返回 -1")]),v._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[v._v("str1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[v._v('"硅硅谷 尚硅谷你尚硅 尚硅谷你尚硅谷你尚硅你好"')]),v._v("\nstr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[v._v('"尚硅谷你尚硅你"')]),v._v("\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br")])]),s("p",[v._v("要求用最快的速度来完成匹配，你的思路是什么？")]),v._v(" "),s("h3",{attrs:{id:"暴力匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暴力匹配"}},[v._v("#")]),v._v(" 暴力匹配")]),v._v(" "),s("p",[v._v("没有学过算法的一般会想到："),s("strong",[v._v("暴力匹配")])]),v._v(" "),s("p",[s("img",{attrs:{src:t(388),alt:"image-20200627190342488"}})]),v._v(" "),s("p",[v._v("如上图：")]),v._v(" "),s("ol",[s("li",[v._v("先拿第一个「尚」去挨个匹配")]),v._v(" "),s("li",[v._v("匹配成功，则拿第 2 个字去匹配")]),v._v(" "),s("li",[v._v("如果不匹配，则从头开始")])]),v._v(" "),s("p",[v._v("暴力匹配法优缺点：")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("优点：简单，容易理解")])]),v._v(" "),s("li",[s("p",[v._v("缺点：效率低下")]),v._v(" "),s("p",[v._v("可以看到上图的描述，只要有一个不匹配，就从头开始再来，「回溯」次数太多。")])])]),v._v(" "),s("h3",{attrs:{id:"kmp-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kmp-算法"}},[v._v("#")]),v._v(" KMP 算法")]),v._v(" "),s("p",[v._v("这里不深入讲解。会建立一个「部分匹配表」，然后通过表里的搜索词，大大提高效率")]),v._v(" "),s("h2",{attrs:{id:"汉诺塔游戏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汉诺塔游戏"}},[v._v("#")]),v._v(" 汉诺塔游戏")]),v._v(" "),s("p",[s("img",{attrs:{src:t(389),alt:"image-20200627191411507"}})]),v._v(" "),s("p",[v._v("汉诺塔游戏目标：将 A 塔的所有圆盘移动到 C 塔")]),v._v(" "),s("p",[v._v("汉诺塔游戏规则：")]),v._v(" "),s("ul",[s("li",[v._v("A 塔有 5 个圆盘，（最多的时候可有 64 个）")]),v._v(" "),s("li",[v._v("小圆盘上不能放大圆盘")]),v._v(" "),s("li",[v._v("三根柱子之间一次只能移动一个圆盘")])]),v._v(" "),s("p",[v._v("看一个简单的 3 个盘子的移动演示")]),v._v(" "),s("p",[s("img",{attrs:{src:t(390),alt:"img"}})]),v._v(" "),s("p",[v._v("知道咋玩了吧？（建议百度上找一个汉诺塔小游戏玩一玩）")]),v._v(" "),s("ul",[s("li",[v._v("三个的时候还是比较简单，只要了 7 步就移动完成了")]),v._v(" "),s("li",[v._v("4 个盘子的时候，就需要 15 步了")]),v._v(" "),s("li",[v._v("5 个盘子的时候，需要 31 步了")]),v._v(" "),s("li",[v._v("如果是 20 个盘子呢？")])]),v._v(" "),s("p",[v._v("根据经验：移动 n 个盘子需要 2^n - 1 步")]),v._v(" "),s("p",[v._v("如果用算法来解决，就要用到 "),s("strong",[v._v("分治法")])]),v._v(" "),s("h2",{attrs:{id:"八皇后问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八皇后问题"}},[v._v("#")]),v._v(" 八皇后问题")]),v._v(" "),s("p",[v._v("八皇后问题，是一个古老而著名的问题，是 "),s("strong",[v._v("回溯算法")]),v._v(" 的典型案例。")]),v._v(" "),s("p",[v._v("该问题是国际西洋棋棋手马克斯·贝瑟尔于 1848 年提出：在 8×8 格的国际象棋上摆放八个皇后，使其不能互相攻击，即：任意两个皇后都不能处于同一行、同一列或同一斜线上，问有多少种摆法。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(391),alt:"image-20200627193219662"}})]),v._v(" "),s("p",[v._v("使用回溯算法，高斯认为有 "),s("strong",[v._v("76 种方案")]),v._v("。1854年在柏林的象棋杂志上不同的作者发表了 40 种不同的解，后来有人用图论的方法解出 "),s("strong",[v._v("92 种结果")]),v._v("。计算机发明后，有多种计算机语言可以解决此问题")]),v._v(" "),s("p",[v._v("可以去百度搜索下这个小游戏，自己玩几下感受下，还是很难的")]),v._v(" "),s("h2",{attrs:{id:"马踏棋盘算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#马踏棋盘算法"}},[v._v("#")]),v._v(" 马踏棋盘算法")]),v._v(" "),s("p",[s("img",{attrs:{src:t(392),alt:"image-20200627194020031"}})]),v._v(" "),s("p",[s("strong",[v._v("马踏棋盘算法")]),v._v(" 也被称为骑士周游问题，将马随机放在国际象棋的 8×8 棋盘 "),s("code",[v._v("Board[0～7][0～7]")]),v._v("的某个方格中，马按走棋规则（马走日字）进行移动。要求每个方格只进入一次，走遍棋盘上全部 64 个方格，如果没有日字可走，那么游戏结束")]),v._v(" "),s("p",[v._v("可玩下这个 "),s("a",{attrs:{href:"http://www.4399.com/flash/146267_2.htm",target:"_blank",rel:"noopener noreferrer"}},[v._v("小游戏"),s("OutboundLink")],1)]),v._v(" "),s("p",[v._v("会使用到 "),s("strong",[v._v("图的深度优化遍历算法（DFS）")]),v._v(" + "),s("strong",[v._v("贪心算法优化")]),v._v("，如果只是图算法，效率很低下，可能需要 30 秒才能走一步")]),v._v(" "),s("p",[v._v("可见算法在不同场景下发挥着不同的作用，"),s("strong",[v._v("算法的基础又是数据结构")])]),v._v(" "),s("p",[v._v("这里展示的 4 个算法面试题是为了告诉你：")]),v._v(" "),s("ul",[s("li",[v._v("算法的重要性")]),v._v(" "),s("li",[v._v("算法很有趣")]),v._v(" "),s("li",[v._v("有一定的难度")])]),v._v(" "),s("p",[v._v("但是：不会算法的程序员，会被逐渐淘汰。")]),v._v(" "),s("h2",{attrs:{id:"数据结构和算法的重要性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构和算法的重要性"}},[v._v("#")]),v._v(" 数据结构和算法的重要性")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("算法是程序的灵魂")]),v._v(" "),s("p",[v._v("优秀的程序可以在 "),s("strong",[v._v("海量数据计算时")]),v._v("，依然 "),s("strong",[v._v("保持高速计算")]),v._v("。")]),v._v(" "),s("p",[v._v("数据结构是基础，学算法前基础必学")])]),v._v(" "),s("li",[s("p",[v._v("一些计算框架、缓存技术的核心功能其实也是算法")]),v._v(" "),s("p",[v._v("比如内存计算框架 Spark、缓存技术 Redis 等。")]),v._v(" "),s("p",[v._v("算法和现实中的工种一样，也分领域的。不一定要学习所有领域的算法，常用的一定要学习了解。")])]),v._v(" "),s("li",[s("p",[v._v("实际工作中也有类似的感受：程序是有灵魂的，就是算法")]),v._v(" "),s("p",[v._v("老师在 Unix 下开发了一个程序，要求支持上千万人同时在线，当时写完，内测后一切 OK，上线之后就不行了，服务器撑不住了。")]),v._v(" "),s("p",[v._v("公司 CTO 阅读了代码之后，发现没有做缓存，针对这些优化了之后，再次上线就可以了。")]),v._v(" "),s("p",[v._v("通过这个经历就感受到了：程序是有灵魂的。")])]),v._v(" "),s("li",[s("p",[v._v("大厂面试会有数据结构和算法的面试题")]),v._v(" "),s("p",[v._v("目前程序员面试的门槛越来越高，大厂在这方面有一定的要求。")])]),v._v(" "),s("li",[s("p",[v._v("如果你不想永远都是代码工人，那么就话时间研究下数据结构和算法")])])]),v._v(" "),s("h2",{attrs:{id:"课程内容介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课程内容介绍"}},[v._v("#")]),v._v(" 课程内容介绍")]),v._v(" "),s("p",[v._v("课程内容很多，学完后或许会回来补上，或许会专门有一个导航入口。")]),v._v(" "),s("h2",{attrs:{id:"课程亮点和授课方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课程亮点和授课方式"}},[v._v("#")]),v._v(" 课程亮点和授课方式")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("课程深入，非蜻蜓点水")])]),v._v(" "),s("li",[s("p",[v._v("课程成体系，非星星点灯")])]),v._v(" "),s("li",[s("p",[v._v("高效而愉快的学习")]),v._v(" "),s("p",[v._v("数据结构和算法很有用，很好玩")])]),v._v(" "),s("li",[s("p",[v._v("数据结构和算法很重要，但是相对困难，努力做到通俗易懂")])]),v._v(" "),s("li",[s("p",[v._v("采用")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("应用场景 ->  数据结构或算法 -> 剖析原理 -> 分析实现步骤（图解） -> 代码实现 的步骤讲解\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br")])])]),v._v(" "),s("li",[s("p",[v._v("课程目标")]),v._v(" "),s("p",[v._v("让大家掌握本质，达到能在工作中 "),s("strong",[v._v("灵活运用解决实际问题")]),v._v(" 和 **优化程序 **的目的")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
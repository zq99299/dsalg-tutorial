const dsalgJavaHspSC = require('../dsalg-java-hsp')

module.exports = {
  title: '数据结构与算法 系列教程（笔记）',
  description: '数据结构与算法 系列教程学习笔记',
  base: '/dsalg-tutorial/', // gh-page 中是增加了项目名
  dest: 'build/.vuepress/dist',  // build 时构建的文件放在那里？
  host: 'localhost', // dev 的域名
  port: 8080, // dev 的端口
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  markdown: {
    lineNumbers: true
  },
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    // sidebar: 'auto',
    smoothScroll: true, // 页面滚动效果
    sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
    lastUpdated: '上次更新: ', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/zq99299/dsalg-tutorial',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    logo: 'mlogo.svg',
    // 主题级别的配置
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    // 页面顶部的导航栏：可以根据自己的需要制定
    nav: [
      { text: 'Home', link: '/' },
      { text: '图解 Java 数据结构和算法', link: '/dsalg-java-hsp/' },
      { text: '笔记精选汇总', link: 'https://github.com/zq99299/repository-summary' }
    ],
    sidebar: {  // 侧边栏配置，需要展示的侧边栏需要在这里配置
      '/dsalg-java-hsp/': dsalgJavaHspSC()
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容更新啦~',
        buttonText: '立即获取新内容，确定后稍后自动刷新'
      }
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-baidu-autopush', true],
    ['vuepress-plugin-code-copy', true],
    // ['vuepress-plugin-baidu-tongji-analytics', {
    //   key: 'xxx',
    //   dev: false
    // }],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        // moment.locale(lang)
        // return moment(timestamp).fromNow()
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    ],
    ['vuepress-plugin-tags']
  ]
}

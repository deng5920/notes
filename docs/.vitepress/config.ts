export default {
  lang: 'zh-CN',
  title: '筱涵笔记',
  titleTemplate: 'VitePress',
  lastUpdated: true,
  base: 'notes',

  themeConfig: {
    siteTitle: '筱涵学习笔记',
    nav: [
      { text: '学习笔记', link: '/sty/' },
      { text: '随手记', link: '/eassy/' }
    ],
    sidebar: {
      '/': [
        {
          text: '开始阅读',
          collapsible: false,
          items: [
            { text: '阅读须知', link: '/guide' },
            { text: '2022', link: '/2022' }
          ]
        },
        {
          text: '学习笔记',
          collapsible: true,
          items: [
            { text: '导读', link: '/sty/' },
            { text: 'Vue3', link: '/sty/vue3' },
            { text: 'Two', link: '/sty/two' }
          ]
        },
        {
          text: '备忘录',
          collapsible: true,
          items: [{ text: 'Git常用命令', link: '/memo/git' }]
        }
      ],
      '/eassy/': [
        {
          text: '随手记',
          collapsible: true,
          items: [
            { text: 'Index', link: '/eassy/' },
            { text: 'Three', link: '/eassy/three' },
            { text: 'Four', link: '/eassy/four' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}

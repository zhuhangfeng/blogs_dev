import { defineConfig } from 'vitepress'
// import sidebar from './siderbar.mjs'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { getThemeConfig } from '@sugarat/theme/node'
// https://vitepress.dev/reference/site-config
const blogTheme = getThemeConfig({
  author: '小小甘橘',
  search:false,
  comment: {
    type: 'giscus',
    options: {
      repo: 'zhuhangfeng/blogs',
      repoId: 'R_kgDOL27o_A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOL27o_M4CfJcg',
      inputPosition: 'top',
      mapping:'title',
      strict:'0',
      reactionsEnabled:"1",
      emitMetadata:"0",
      theme:"preferred_color_scheme",
      lang:"zh-CN",
      rossorigin:"anonymous",
    },
    mobileMinify: true
  },
}) 
export default defineConfig({
  lastUpdated: true,
  // 继承博客主题配置
  extends: blogTheme, 
  base: '/blogs/',
  title: "小小甘橘",
  description: "A VitePress Site",
  head:[
    // 改变title的图标
    [
     'link',
     {
       rel: 'icon',
       href: '/blogs/favicon.ico',//图片放在public文件夹下
     },
   ],
 ],
  vite:{
    plugins:[
      // add plugin
      AutoSidebar(),
    ],

  },
 
  themeConfig: {
    algolia:{
      appId: 'EZO4X1FCLY',
      apiKey: 'f4ca9a38ac59c5d44fbda9d024a8822c',
      indexName: 'zhuhangfengio',
      placeholder: '搜索',
  translations: {
    button: {
      buttonText: '搜索',
      buttonAriaLabel: '搜索'
    },
    modal: {
      searchBox: {
        resetButtonTitle: '清除查询条件',
        resetButtonAriaLabel: '清除查询条件',
        cancelButtonText: '取消',
        cancelButtonAriaLabel: '取消'
      },
      startScreen: {
        recentSearchesTitle: '搜索历史',
        noRecentSearchesText: '没有搜索历史',
        saveRecentSearchButtonTitle: '保存至搜索历史',
        removeRecentSearchButtonTitle: '从搜索历史中移除',
        favoriteSearchesTitle: '收藏',
        removeFavoriteSearchButtonTitle: '从收藏中移除'
      },
      errorScreen: {
        titleText: '无法获取结果',
        helpText: '你可能需要检查你的网络连接'
      },
      footer: {
        selectText: '选择',
        navigateText: '切换',
        closeText: '关闭',
        searchByText: '搜索提供者'
      },
      noResultsScreen: {
        noResultsText: '无法找到相关结果',
        suggestedQueryText: '你可以尝试查询',
        reportMissingResultsText: '你认为该查询应该有结果？',
        reportMissingResultsLinkText: '点击反馈'
      }
    }
  }
    },
     /* 访客统计 */
     visitor: {
      /** 统计 id（单独页面的统计会作为前缀使用）*/
      badgeId: 'maomao1996.vitepress-nav-template',
    },
    // search: {
    //   provider: 'local'
    // },
    i18nRouting: true,
    logo:'/avator.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/blogs/navigation/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhuhangfeng' }
    ]
  }
})

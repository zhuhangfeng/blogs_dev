// // https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import DefaultTheme from 'vitepress/theme'
// import './style.css'

// /** @type {import('vitepress').Theme} */
// export default {
//   extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//   },
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// }
import BlogTheme from '@sugarat/theme'
// 自定义样式重载
import './style.scss'
import './style.css'
export default BlogTheme
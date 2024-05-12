---
title: 关闭eslint保存校验
date: 2023-07-03
isShowComments: true    
categories:
 - vue
tags:
 - vue
sidebar: 'auto'
---

---
项目场景: 
---
vue关闭保存语法校验，防止声明的变量未使用导致报错

---
解决方案: 
---

在vue.config.js中添加这句代码  lintOnSave:false ，没有这个文件就在根目录创建一个
```js
/*写法一*/
module.exports ({
  lintOnSave:false
})
/*写法二，用脚手架创建的项目自带vue.config.js文件*/
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})
```

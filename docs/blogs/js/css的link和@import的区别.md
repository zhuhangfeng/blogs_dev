---
title: css的link和@import的区别
date: 2023-11-08
isShowComments: true    
categories:
 - js
tags:
 - js
sidebar: 'auto'
---
# css的link和@import的区别
link：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type = "text/css" href = "styles.css">
</head>
</html>
```

@import:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @import url("styles.css");
  </style>
</head>
<body>
</html>
```


1、加载顺序：link会在页面加载时同时加载，而@import会在页面加载完毕后再加载。这意味着，使用@import会阻塞页面的渲染导致页面加载速度变慢。
---

2、兼容性：link是HTML标签，可以在HTML和XHTML中使用，而@import是css语法，只能在css中使用
---

3、操作DOM：link可以通过JavaScript动态的添加和移除，而@import无法通过JavaScript动态的添加和移除
---

4、权重：link引入的样式表的权重高于@import引入的样式表。这意味着，如果同一个样式在link和@import中都存在，那么link中的样式会覆盖@import中的样式
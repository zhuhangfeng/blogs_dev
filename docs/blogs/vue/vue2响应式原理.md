---
title: vue2响应式原理
date: 2023-07-04
isShowComments: true    
categories:
 - vue
tags:
 - vue
sidebar: 'auto'
---

```js
     // 视图更新
  function updateView() {
   console.log("视图更新");
 }
 

//由于Object.defineProperty无法监听数组，所以数组类型实现响应式，需要重写数组的原型方法
const oldArrayProperty = Array.prototype
const arrProto = Object.create(oldArrayProperty);
["push","pop","shift","unshift","splice"].forEach(item=>(arrProto[item]=function(){
        updateView()
        oldArrayProperty[item].call(this,...arguments)
    })
)



//将传入的data属性进行深度监听,判断是对象还是数组
function observer(target){
    if(typeof target !== 'object' || target === null) return target;
    //如果是数组就重写数组原型方法
    if(Array.isArray(target)){
        target.__proto__ == arrProto
    }
    //如果是对象,遍历所有属性使用Object.defineProperty转化为getter/setter
    for(let key in target){
        defineReactive(target,key,target[key])
    }
}
    //使用Object.definePropert把属性转化为getter/setter
    function defineReactive(target,key,value){
    //多层级使用递归
    observer(value)
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newValue){
            observer(value)
            if(newValue !== value){
                value = newValue
                //更新视图
                updateView()
            }
        }
    })
}
// 声明要响应式的对象
const data = {
   name: "zhangsan",
   age: 20,
   info: {
     address: "北京" // 需要深度监听
   },
   nums: [10, 20, 30]
 };
 
 // 执行响应式
 observer(data);
//  修改触发响应响应式
data.name ='zhf'
```
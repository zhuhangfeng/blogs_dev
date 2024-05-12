---
title: arguments
date: 2023-07-07
isShowComments: true    
categories:
 - js
tags:
 - js
sidebar: 'auto'

---
# arguments
概念: 
---
在Javascript中，arguments是一个特殊的对象，它代表了函数调用时传递的参数列表。它不是一个真正的数组，属于类数组对象，虽然有length和索引访问，但是不能使用数组的方法比如push。

```js
function func(a,b,c){
    console.log(arguments.length)//2
    console.log(arguments[0])//1
    console.log(arguments[1])//2
    console.log(arguments[3])//undefined
    arguments.push(4)// arguments.push is not a function
}

func(1,2)
```
---
严格模式和非严格模式下修改arguments: 
---
```js
//严格模式
 "use strict"
function func(a,b,c){
    console.log(a)//1
    arguments[0] = 10
    console.log(arguments[0])//10
    console.log(a)//1
}
func(1,2,3)
```
```js
//非严格模式
function func(a,b,c){
    console.log(a)//1
    arguments[0] = 10
    console.log(arguments[0])//10
    console.log(a)//10
}
func(1,2,3)
```
---
在不确定实参数量时，形参可以填空使用arguments获取: 
---
```js
function func(){
    console.log(arguments)//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
func(1,2,3)
```

---
arguments转数组: 
---
```js
function func(a,b,c){
    // 可以直接使用call来调用数组方法
    Array.prototype.push.call(arguments,3)
    console.log(arguments)//Arguments(4) [1, 2, Array(2), 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    // 转数组
    // 方法一
    let d = Array.prototype.slice.call(arguments)
    console.log(d)//[1, 2, Array(2), 3]
    d.push(4)
    console.log(d)//[1, 2, Array(2), 3, 4]

    // 方法二 该方法参数为数组会被合并
    let f = Array.prototype.concat.apply([],arguments)
    console.log(f)// [1, 2, 7, 8, 3]
    f.push(4)
    console.log(f)//[1, 2, 7, 8, 3, 4]

    // 方法三
    let g = Array.from(arguments)
    console.log(g)//[1, 2, Array(2), 3]
    g.push(4)
    console.log(g)//[1, 2, Array(2), 3, 4]

     // 方法四
    // 放最后 因为spalic会改变arguments对象
    let e = Array.prototype.splice.call(arguments,0)
    console.log(e)//[1, 2, Array(2), 3]
    e.push(4)
    console.log(e)//[1, 2, Array(2), 3, 4]
    console.log('e',arguments) //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
//箭头函数没有arguments
let fun1 = (a)=>{
    console.log('箭头',arguments)//arguments is not defined
}
func(1,2,[7,8])
fun1(1)
```
---
arguments对象的callee属性: 
---
使用callee可以调用函数自身可以实现递归

```js
function func(num){
    if(num<=1){
        return 1
    }else{
        return num * arguments.callee(num-1)
    }
}
func(5)
```
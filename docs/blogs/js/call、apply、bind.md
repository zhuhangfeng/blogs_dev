---
title: call、apply、bind
date: 2023-07-06
isShowComments: true    
categories:
 - js
tags:
 - js
---

# call、apply、bind

概念：
---
1、三种方法都是函数特有的，只有函数可以调用

2、改变函数执行时的上下文，或者是改变函数运行时的<font color=red >this</font>指向

3、可以实现借用方法、减少重复代码、节省内存


call: 
---

func.call(目标对象, 参数1, 参数2, 参数3)，函数会立即执行。参数确定时使用apply

```js
  let a = {
        name:'zzz'
    }
    function func(age,age1){
        console.log(this.name,age,age1)
    }
    func.call(a,12,13) // zzz , 12,13
```


apply: 
---

func.apply(目标对象, [参数1, 参数2, 参数3])，函数会立即执行。 注意apply传第二个到第n个参数要用数组，不确定参数时可以使用apply

```js
      let a = {
        name:'zzz'
    }
    function func(age,age1,age2){
        console.log(this.name,age,age1,age2)
    }
    func.apply(a,[123,22,33]) // zzz , 123,22,33
```



bind: 
---

func.bind(目标对象, 参数1, 参数2, 参数3)，函数不会立即执行，返回一个方法，需要调用一次。

```js
      let a = {
        name:'zzz'
    }
    function func(age,age1,age2){
        console.log(this.name,age,age1,age2)
    }
   let b = func.bind(a,123,22,33) // zzz , 123,22,33
   console.log(b)//ƒ func(age,age1,age2){console.log(this.name,age,age1,age2)}
   b()//zzz 123 22 33
```


箭头函数: 
---

ES6中的箭头函数没有this指向，箭头函数的 this 始终指向函数定义时的 this，而非执行时的this。<font color=red >箭头函数中没有this绑定。需通过查找作用域链来决定其值，如果箭头函数被非箭头函数包裹，则this绑定的是最近一层非箭头函数的this，否则this为undefined</font>

```js
    var a = '1'
    let b = {
        c:'2',
        func1(){
            console.log(this.c)
        },
        func2(){
            setTimeout(()=>{console.log(this.a)},10)
        },
        d:{
            c:'23',
            func3(){
                setTimeout(()=>{
                    let e = ()=>{
                        console.log(this.c)
                    }
                    e()
                },10)
            }
        },
    }
    b.func1()//2
    b.func2()//undefined
    b.d.func3()//23
```

# **-----this 永远指向最后调用它的那个对象-----**
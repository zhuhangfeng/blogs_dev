---
title: interview-(javascript)
date: 2024-3-5
isShowComments: true    
categories:
 - interview
tags:
 - interview
sidebar: 'auto'
---
# interview-(javascript)
## js数据类型有哪些

   基本数据类型：
   - undefined、null、boolean、number、string、symbol、bigint

   引用数据类型：
   - object、array、function

   堆：存放引用数据类型，但是在栈中存放了引用数据类型的指针
   堆：存放基本数据类型

## null和undefined的区别

   - 都是基本数据类型
   - undefined表示变量声明了但是未定义
   - null表示空对象

## instanceof 运算符的实现原理及实现
   - instanceof 运算符适用于检测构造函数的prototype属性上是否出现在某个实例对象的原型链上
   - instanceof 运算符的原理是基于原型链的查找。
   - instanceof 运算符只能用于检查某个对象是否是某个构造函数的实例，不能用于基本数据类型的检查。
   ```js
   function myInstanceof(obj1,obj2){
      if(typeOf obj1 !== 'object' || obj1 === null)return false
      let proto = Object.getPrototypeOf(obj1)
      while(proto !== null){
         if(proto === obj2.prototype)return true
         proto = Object.getPrototypeOf(proto)
      }
      return false
   }
   ```
## typeof 和 instanceof 区别

   - typeof 会返回一个运算数的基本类型，可以判断原始数据类型（null除外），无法判断引用数据类型（function除外）
   - instanceof 会返回布尔值，可以准确判断引用数据类型，但是不能判断原始数据类型

## 为什么typeof判断null为object？

   这是Javascript语言的历史遗留问题

## 为什么0.1+0.2 ！== 0.3，如何让其相等

   因为浮点数运算的精度问题。在计算机运行过程中，需要将数据转化为二进制计算，因为浮点数自身小数位数的限制而截断的二进制在转化为十进制就会产生误差

   解决方案：
   - 先转换为整数再相加之后转回小数
   ```js
   let x = (0.1*10+0.2*10)/10
   ```
   - 使用number对象的toFixed方法，只保留一位小数
   ```js
   (n1+n2).toFixed(2)
   ```

## 判断数组的方式有哪些

   - 通过Object.prototype.toString.call(arr).slice(8,-1) === 'Array'
   - 通过原型链做判断obj.__proto__ === Array.prototype
   - 通过ES6的Array.isArray()做判断
   - 通过instanceof判断 arr instanceof Array

## 对类数组对象的理解，如歌转化为数组

   类数组也叫伪数组，类数组和数组类似，但不能调用数组的方法，具有length属性。常见的类数组有arguments，通过document.getElements获取到的内容等。
   - 通过call调用数组的slice方法来实现转换
      ```js
      Array.prototype.slice.call(arrLike)
      ```
   - 通过call调用数组的splice方法
      ```js
      Array.prototype.splice.call(arrLike,0)
      ```
   - 通过apply调用数组的concat方法来实现转换
      ```js
      Array.prototype.concat.apply([],arrayLike)
      ```
   - 通过Array.from 方法来实现转换

## 数组的原生方法有哪些

   - 改变原数组的方法：
      - fill(a,b,c) a填充值，b开始索引默认0，c结束索引默认数组长度
      - pop() 删除末尾元素
      - push() 在末尾加入元素
      - shift() 删除第一个元素
      - unshift() 在第一个位置加入一个或多个元素
      - splice(a,b,c) 删除数组中下标为a开始数b个元素，再插入c个元素，b默认为数组长度，c默认为空
      - reverse() 颠倒数组中的顺序
      - sort() 数组排序
   
   - 不会改变原数组的方法：
      - concat() 拼接数组
      - every() 如果数组所有元素都符合要求就返回true，否者false
      - filter() 返回一个符合要求的新数组
      - find() 返回第一个符合要求的元素
      - findIndex() 返回第一个符合要求的元素索引
      - forEach() 
      - indexOf() 返回数组中指定元素的第一个索引
      - join() 把数组变为字符串
      - lastIndexOf() 返回指定元素的最后一个索引
      - map() 
      - reduce() 对数组元素进行累计计算
      - reduceRight() 从数组尾开始累计计算
      - slice(a,b) 截取数组 a开始索引，b结束索引不包含b
      - some() 检测数组中如果有一个符合条件就返回true，否则false

## substring 和 substr 的区别

   - substring(startIndex,ednIndex),截取字符串，startIndex 开始索引、endIndex 结束索引，不包含结束索引
   - substr(startIndex,number),截取字符串，startIndex开始索引、number从开始索引数截取多少个

## object.assign 和扩展运算法是深拷贝还是浅拷贝，两者区别

   - 都是浅拷贝
   - Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数都是源对象，把所有源对象合并到目标对象中
   - 扩展运算符（...）使用时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象

## new操作符的实现原理

   - 创建一个空对象
   - 设置原型，将构造函数的原型指向空对象的prototype属性
   - 将this指向这个对象，通过apply执行构造函数
   - 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

   ```js
   function myNew(obj,...args){
      let newObj  = Object.create(obj.prototype);
      let result  =  obj.apply(newObj,args)
      if(result && (typeof result === 'object' || typeof result === 'function')){
         return result
      }
      return newObj;
   }
   ```

## for...in 和 for...of 的区别

   - for in 用于遍历对象、数组
   - for of 可以遍历字符串、数组，不能遍历普通对象

## 对ajax的理解，实现一个ajax请求

   通过JavaScript的异步通信，从服务器端获取xml文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页

   - 创建一个XMLHttpRequest对象
   - 在这个对象上使用open方法创建一个http请求，open方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息
   - 在发起请求前，可以使用setRequsetHeader添加请求头，还有XMLHttpRequest对象有5个状态，当它状态变化时触发onreadyStatechage事件，可以通过设置监听函数，来处理请求成功后的结果。当readyState变为4时，代表服务器返回的数据接收完成，状态为2xx或304代表返回正常
   - 调用send方法发起请求

   ```js
      const SERVER_URL = "/server"
      let xhr = new XMLHttpRequest()
      //创建http请求
      xhr.open("GET",url,true)
      //设置状态监听函数
      xhr.onreadystatechange = function(){
         if(this.readyState !== 4)return
         //当请求成功时
         if(this.status === 200){
            handle(this.response)
         }else{
            console.error(this.statusText)
         }
      }
      //设置请求失败时的监听函数
      xhr.onerror = function(){
         console.error(this.statusText)
      }
      //设置请求投信息
      xhr.responseType = "json"
      xhr.setRequestHeader("Accept","spplication/json")
      //发送http请求
      xhr.send(null)
   ```

## ajax、axios、fetch的区别

   - ajax
      - 基于原生XHR开发，XHR本身架构不清晰
      - 针对MVC编成，不符合现在前端MVVM的浪潮
      - 多个请求之间如果有先后关系的话，就会出现回调地狱
      - 配置和调用方式非常混乱，而且基于事件的异步模型不友好
   
   - axios
      - 支持PromiseAPI
      - 从浏览器中创建XMLHttpRequest
      - 从 node.js 创建http请求
      - 支持请求拦截和响应拦截
      - 自动转换JSON数据
      - 客服端支持防止CSRE/XSRF
   
   - fetch
      - 浏览器原生实现的请求方式，ajax的替代品
      - 基于标准promise实现，支持 async/await
      - fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
      - 默认不会带cookie，需要添加配置项
      - fetch没有办法原生监测请求的进度，而XHR可以

## forEach 和 map 方法有什么区别

   两个方法都是用来遍历循环数组，区别如下：
   - forEach() 对数据的操作会改变原数组，该方法没有返回值
   - map() 方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值

## 什么是尾调用，使用尾调用有什么好处？

   尾调用就是在函数的最后一步调用函数，在一个函数里调用另一个函数会保留当前执行的上下文。如果在函数尾部调用，因为已经是最后一步了，所以这个时候不用保留当前的执行上下文，从而节省内存，但在ES6中只能在严格模式下开启，正常模式无效。"use strict"可以开启严格模式。

## 浅拷贝和深拷贝
   
   - 浅拷贝指创建新的数据，这个数据有着原始数据属性值的一份精确拷贝，如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址。即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
   ```js
      function clone(obj){
         const newObj  = {}
         for(let item in obj){
            if(obj.hasOwnProperty(item)){
               newObj[item] = obj[item]
            }
         }
         return newObj
      }
   ```
   在Javascript中，浅拷贝还可以由以下几种方法实现：
      - Object.assign
      - Array.prototype.slice()
      - Array.prototype.concat()
      - 使用拓展运算符

   - 深拷贝开辟一个新的栈，两个对象属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性
   ```js
      function deepClone(obj,hash = new WeakMap()){
         if(obj === null) return obj
         if(obj instanceof Date) return new Date(obj)
         if(obj instanceof RegExp) return new RegExp(obj)
         //普通值或者函数不需要拷贝
         if(typeof obj !== "object") return  obj
         if(hash.get(obj)) return hash.get(obj)
         let cloneObj = new obj.constructor()
         hash.set(obj,cloneObj)
         for(let key in obj){
            if(obj.hasOwnProperty(key)){
               cloneObj[key] = deepClone(obj[key],hash)
            }
         }
         return cloneObj
      }
   ```
   常见的深拷贝的方式有：
   - 函数库里的cloneDeep()
   - JSON.stringify(),再通过JSON.parse


## let、const、var的区别

   var
   - 使用var声明的变量存在变量提升，即在声明之前就可以访问到变量，但其值为undefined
   - var声明的变量作用是函数作用域，不是块级作用域
   - 可以重复声明同一个变量

   let 
   - let声明的变量存在块级作用域，只能在声明的内部块中使用
   - 不允许重复声明同一个变量
   - 不存在变量提升，必须在声明后才能访问

   const
   - const声明的常量其值在声明后不能被修改
   - const声明的变量也存在块级作用域
   - 必须在声明时赋初始值，且不能再重新赋值
   - 声明的变量存储的时引用地址，因此可以修改对象或数组的属性，但是不能重新赋值整个对象或数组

## 箭头函数与普通函数的区别

   - 箭头函数是匿名函数，不能作为构造函数
   - 箭头函数没有arguments
   - 箭头函数没有自己的this
   - call、applay、bind方法不能改变箭头函数中的this指向
   - 箭头函数没有原型prototype

## call、apply、bind的区别

   - call：立即执行函数，逐个传参
   ```js
   Function.prototype.myCall = function(context,...args){
      context = context || window
      const fn = Symbol()
      context[fn] = this
      const result = context[fn](...args)
      delete context[fn]
      return result
   }
   ```
   - apply：立即执行函数，以数组的形式传参
   ```js
   Function.prototype.myApply = function(context,args){
      context = context || window
      const fn = Symbol()
      context[fn] = this
      const result = context[fn](...args)
      delete context[fn]
      return result
   }
   ```
   - bind：返回一个函数
   ```js
   Function.prototype.myBind = function(context,...args){
      const fn = this
      return function(...innerArgs){
         return fn.apply(context,args.concat(innerArgs))
      }
   }
   ```

## Set、Map的区别
   set
   - 创建：new Set([1,2,3,4,5])
   - add(value)：添加值
   - delete(value): 删除值
   - has(value): 查看是否有该成员
   - clear(): 清除所有成员，没有返回值

   map
   - set(key,value): 添加新元素
   - get(key)：通过键来查找值
   - has(key): 判断是否有key对应的值
   - delete(key): 删除
   - clear(): 删除所有元素

   区别
   - Map是一种键值对的集合，和对象不同的是，键可以是任意值
   - Set是类似数组的一种数据结构，类似数组的一种集合，但是里面没有重复值

## Promise 的理解

   promise是JavaScript中处理异步操作的一种机制，通过其特点和链式调用可以更好的管理和处理异步代码。提高可读性、可维护性、避免回调地狱问题
   - 三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）。状态一旦改变就不可逆转
   - 链式调用，可以通过.then方法处理异步操作的成功和失败情况
   - 使用.catch()方法捕获链中的任何错误
   - 可以使用Promise.all()方法实现多个promise并行执行，所有结果已数组形式返回
   -可以避免回调地狱

## 对async/await的理解

   async/await是Generator的语法糖。它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。通过async关键字声明一个异步函数，await用于等待一个异步方法执行完成，并且阻塞执行。

## async/await对比Promise的优势

   - 代码可读性高，Promise虽然摆脱了回调地狱，但自身的链式调用会影响可读性
   - 相对于Promise更优雅，传值更方便
   - 对错误处理友好，可以通过try/catch捕获

## 谈谈你对ES6的理解

   - let和const声明变量
   - 扩展运算符 ...
   - 结构赋值 let[a,b] = [1,2]
   - 模板字符串 `hello,${name}`
   - 箭头函数
   - 新增class类
   - Promise
   - Generator
   - Map/Set
   - 模块化，import和export导入、导出
   - proxy监听拦截函数，比Object.defineProperty更强

## ES6模块和CommonJS模块有什么区别

   - 语法不同，ES6使用import和export关键字来导入和导出模块，而CommonJS模块使用require和exports来导入哈导出模块
   - ES6支持异步加载。CommonJS模块不支持异步

## 原型 和原型链

   - 原型是每个对象都具有的属性，其中有显示原型prototype，隐式原型__proto__
   - 原型链：当在一个对象上查找某个属性时，对象本身不存在该属性方法时，就会沿着原型链__proto__向上查找，直到找到null为止

## 闭包

   - 官方说法：一个函数和对其周围状态的引用捆绑在一起，这样的组合就是闭包
   - 一个内层函数访问外层函数的作用域

   - 优点：创建全局私有变量，避免变量全局污染
   - 缺点：创建的变量不能被回收，容易消耗内存，使用不当会导致内存溢出，解决：在不使用的时候把变量设为null

   - 使用场景：
      - 用于创建全局私有变量
      - 封装类和模块
      - 实现函数柯里化

## 闭包一定会造成内存泄漏吗?

   闭包并不一定会造成内存泄漏，如果在使用闭包后变量没有及时销毁，可能造成内存泄漏的风险，只要合理的使用闭包就不会造成内存泄漏。

## 对作用域、作用域链的理解

   - 全局作用域：可以全局访问
   - 函数作用域：只能在函数中访问
   - 块级作用域：ES6中新增的let、const都是块级作用域，只能在代码块中使用

   - 作用域链：变量在指定作用域中没有找到，会依次向上一层作用域中查找，直到全局作用域，这个查找过程被称为作用域链。

## V8垃圾回收

   - 自动管理内存，防止内存泄漏，提高程序的性能和开发效率
   - 使用了分代式回收策略，分为新生代和老生代
   - 新生代
      使用scavenge（半空间）算法，把新生代内存划分为激活状态的From空间和未激活的to空间。程序中声明的对象会被分配到From空间，当进行垃圾回收时，如果From空间中有存货的对象，则会复制到To空间进行保存、非存活对象会自动回收，复制完成后，From空间和to空间进行交换，原来的From空间变为To空间，To空间变为From空间，当To空间内存超过25%时就会进入老生代，对象经历过一次Scavenge算法就会移到老生代
   - 老生代
      使用Mark-Sweep（标记清除）和Mark-Compact（标记整理）算法进行管理
      - 标记清除分为标记和清除两个阶段，标记阶段垃圾回收器会在内部构建一个根节点。从根节点出发遍历其可以访问到的子节点并标记为活动的，根节点不能访问到的地方即为非活动的，清除阶段垃圾回收器将释放所有非活动的内存块，以下几种可以作为跟几点
         - 全局对象
         - 本地函数的局部变量和参数
         - 当嵌套调用链上的其他函数的变量和参数
      - 使用mark-compact标记整理算法是因为使用mark-sweep标记清除算法会导致对象内存地址不连续，出现内存碎片问题。Mark-Compact算法是为了解决内存碎片问题，在标记算法标记完成后使用标记整理算法把标记过的对象移到栈内存的一端，再清理掉边界外的全部内存。

## 避免内存泄漏的方法 

   - 尽量少使用全局变量，使用完全局变量后设置为null触发垃圾回收机制
   - 及时清除定时器
   - 合理使用闭包，使用完后释放对这些变量的引用
   - 释放不在使用的对象，手动设置为null触发垃圾回收机制
   - 避免循环引用，循环引用就是两个或多个对象之间互相引用，导致他们无法被垃圾回收
   - 注意DOM对象的引用：及时清除对DOM对象的引用

## 字符串方法

   - concat:拼接字符串
   - slice:截取字符串
   - substring：截取字符串
   - trim：去除空格
   - trimStart:从左边去除空格
   - trimEnd:从右边去除空格
   - repeat:接收一个参数n，代表复制多少次，返回新的字符串
   - chatAt:方法从一个字符串中返回指定下标的字符。
   - indexOf：从字符串开头去搜索传入的字符串，并返回位置。
   - lastIndexOf：方法是从后面往前面找。
   - includes：判断一个字符串是否包含另一个字符串，返回true、false
   - startsWith：判断一个字符串是否以另外一个字符串开始，返回true、false
   - endWith:判断一个字符串是否以另外一个给定的字符串结尾
   - split:将字符串按照指定的分割符，拆分成数组中的每一项

## 正则表达式方法

   - match():找出符合正则表达的字符,返回数组
   - search():找到符合要求的字符的索引
   - replace():找到符合要求的字符进行替换

## 对类数组对象的理解，如何转化为数组
   
   类数组也称为伪数组，不能使用数组的方法，但是具有length属性
   - 使用call调用数组原型上的方法slice来转换
      Array.prototype.slice.call()
   - 使用call调用splice
      Array.prototype.slice.call(array,0)
   - 使用apply调用数组的concat方法
      Array.prototype.concat.apply([],array)
   - 使用Array.from

## for in 和 for of 的区别

   - for in 可以遍历对象、数组，但是会遍历到原型链上找属性，对象遍历的是键名，数组遍历的是索引
   - for of 可以遍历数组，遍历的是值

## 用户在浏览输入地址到页面渲染完成的过程

   - DNS解析：浏览器向DNS服务器发送请求，获取输入域名对应的IP地址。
   - 建立连接发送请求：浏览器使用HTTP协议向服务器发送请求，并建立于服务器的TCP连接。请求页面的HTML、CSS、Javascript等资源。
   - 服务器处理请求：服务器收到请求后，根据请求的路径和参数返回相应的数据，包括页面的HTML内容、CSS样式表、Javascript脚本等。
   - 浏览器渲染：浏览器收到响应后，解析HTML内容，并根据HTML结构构建DOM树，解析CSS样式并生成渲染树（Render Tree），最后将渲染树绘制到页面上。

## DNS域名解析的过程

   - 本地DNS缓存查询：浏览器首先会检查本地DNS缓存中是否有该域名对应的IP地址，如果有，则直接返回该IP,不需要进行后续的查询
   - 递归查询：如果DNS缓存中没有对应的记录，本地DNS服务器会向根域名服务器发起递归查询。根域名服务器负责返回顶级域名服务器的地址，如.com、.org、.net等
   - 顶级域名服务器查询：本地DNS服务器收到根域名服务器返回的顶级域名服务器地址后，会向顶级域名服务器发送查询请求。顶级域名服务器负责返回二级域名服务器的地址，如baidu.com的域名服务器。
   - 权限域名服务器查询：本地DNS服务器收到顶级域名服务器返回的域名服务器地址后，会向权限域名服务器发送查询请求。权限域名服务器返回该域名对应的IP地址。

## HTTP和HTTPS

   - HTTP属于明文传输协议，不安全，使用的是80端口
   - HTTPS使用的是SSL/TLS协议加密传输，是HTTP的安全版本，使用的是443端口。HTTPS还会使用数据完整性校验，一旦数据被篡改就会拒绝接收
   - 加密过程：客户端向服务器发送请求，服务器收到以后返回证书和公钥给客户端，客户端根据双方确定的加密等级使用公钥加密会话密钥传给服务器，服务器利用自己的私钥解密出会话密钥，服务器靠会话密钥加密与客服端之间的通信。

## 事件循环

   - 由于JavaScript是一门单线程语言，会出现阻塞问题，所以出现了事件循环机制。JavaScript中的任务分为同步任务和异步任务，异步任务又分为微任务和宏任务，循环过程先执行同步任务，再执行异步任务，异步任务中会先执行一个宏任务再执行完所有微任务，接着再执行宏任务

   - 宏任务：script标签中的代码、定时器、I/O操作和UI渲染、DOM事件回调函数、AJAX请求回调函数
   - 微任务：promise.then方法、awati后面的代码、MutationObsever监听器的回调函数

## 实现instanceOf
   
   用于判断一个对象属于什么类型比如object、array、function。原理就是通过原型链进行查找
   - 通过Object.getPrototypeOf获取obj的原型
   - 循环判断obj的原型是否和constructor的原型相等，相等返回true否则false

   ```js
   function myInstanceof(obj,constructor){
      if(typeof obj !== 'object' || obj === null) return false
      let objProto = Object.getPrototypeOf(obj)
      while(objProto){
         if(objProto === constructor.prototype){
            return true
         }
         objProto = Object.getPrototypeOf(objProto)
      }
      return false
   }

   ```

## 防抖和节流

   - 防抖：多次触发变为一次触发，最后一次在规定时间间隔以后再触发
      ```js
      function  debounce(func, wait,immediate){
         let timer;
         return function(){
            let context = this
            let  args = arguments
            if(timer)clearTimeout(timer)
            if(immediate){
               let callNow = !timer
               timer = setTimeout(()=>{
                  timer = null
               },wait)
               if(callNow)fn.apply(context,args)
            }else{
               timer = setTimeout(()=>{
                  fn.apply(context,args)
               },wait)
            }
         }
      }

      ```
   
   - 节流：多次触发变为少量触发，在规定时间间隔内只执行一次
      ```js
      //定时器版本
      function throttle(fn,wait){
         let timer
         return function(){
            let context = this
            let args = arguments
            if( !timer ) {
               timer = setTimeout(()=>{
                  fn.apply(context,args)
                  timer = null
               })
            }
         }
      }

      //时间戳版本
      function throttleTime(fn,wait){
         let count =0
         return function (){
            let context = this
            let args = arguments
            let nowTime = Date.now()
            if(nowTime-count >=wait){
               fn.apply(context,args)
               count = Date.now()
            }
         }
        
      }
      ```

## 数组扁平化

   - 将多维数组转换为一维数组，arr.flat()

   ```js
      function flatArr(arr){
         let result = []
         return flatten(item){
            item.forEach(element=>{
               if(Array.isArray(element)){
                  flatten(element)
               }else{
                  result.push(element)
               }
            })
         }

         flatten(arr)
         return result
      }
   ```
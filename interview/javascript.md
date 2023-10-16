# JavaScript

## js 中有几种数据类型？

> 参见：[MDN JavaScript 数据类型和数据结构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

1. 基本数据类型（7 种）：Null、Undefined、Boolean、Number、String、Symbol、BigInt

2. 引用数据类型（1 种）：Object（包括数组、函数）。

## 原型的作用？

JavaScript 是一门面向对象的编程语言，而面向对象的语言必须做到一点就是：**能判定一个实例的类型**。原型就是 JS 实现面向对象的核心，JS 通过原型就可以知晓某个对象属于哪个类型，原型的存在就可以避免类型丢失。

简单来说就是，原型的作用就是为了实现面向对象。

> Tips：
>
> 实现面向对象有两种方式：
>
> 1. 类型元数据：java、C# ……
> 2. 原型：Javascript ……

## Promise 解决了什么问题？

异步是 JS 中的常见场景。在传统模式下，通常会使用回调函数的方式来进行异步编程，当嵌套层级过多时，代码很难维护，这也称之为“回调地狱”。而 Promise 可以通过“链式调用”的方式来避免代码的深度嵌套。

总的来说就是，Promise 可以更方便地进行异步编程，统一异步实现。

> Tips：
>
> - **Promise** 无法完全消除回调，如：Promise.then() 仍然是回调。但是回调变得可控了。
> - **async/await** 是 Promise 的语法糖，用这种方式可以消除回调。

## Promise 笔试题

> await 会将后续代码推至微队列，如果没有后续代码，会将该函数的完成推至微队列。

```js
async function asy1() {
  console.log(1)
  await asy2()
  console.log(2)
}

async function asy2() {
  await setTimeout(_ => {
    Promise.resolve().then(_ => {
      console.log(3)
    })
    console.log(4)
  }, 0)
}

async function asy3() {
  Promise.resolve().then(() => {
    console.log(6)
  })
}

asy1()
console.log(7)
asy3()

// => 1 7 6 2 4 3
```

```js
async function asy1() {
  console.log(1)
  await asy2()
  console.log(2)
}

async function asy2() {
  await (async () => {
    await (() => {
      console.log(3)
    })()
    console.log(4)
  })()
}

async function asy3() {
  Promise.resolve().then(() => {
    console.log(6)
  })
}

asy1()
console.log(7)
asy3()

// => 1 3 7 4 6 2
```

## let 和 var 的区别？

> 变量提升：在声明前进行使用则会出现变量提升的情况。

首先，let 和 const 没有本质区别，只是 const 定义的基本数据类型不能更改。

所以，对于 let 和 var 来说，区别如下：

1. 全局污染：

   - var：var 变量会挂载到 window 上。
   - let：let 变量不会挂载到 window 上。

2. 作用域：

   - var：有 2 种作用域：全局作用域、函数作用域。
   - let：有 3 种作用域：全局作用域、函数作用域、块级作用域。

3. 暂时性死区（TDZ）：

    - var：var 变量在变量提升后，访问为 undefined。
    - let：let 也会存在变量提升，但是会在声明之前形成 **暂时性死区**，访问会报 ReferenceError 引用错误。

4. 重复声明：

   - var：var 变量可以重复声明。
   - let：var 变量不可以重复声明。

## 如何动态执行 js ？

> 亦或者，如何将 js 字符串当成 js 代码来执行？

1. `eval`：同步，当前作用域。

    ```js
    function exec(code) {
      eval(code)
    }
    ```

2. `setTimeout`：异步，全局作用域。

    ```js
    function exec(code) {
      setTimeout(code, 0)
    }
    ```

3. `<script> 标签`：同步，全局作用域。

    ```js
    function exec(code) {
      const script = document.createElement('script')
      script.innerHTML = code
      document.body.appendChild(script)
    }
    ```

4. `Function`：同步，全局作用域。

    ```js
    function exec(code) {
      const fn = new Function(code)
      fn()
    }
    ```

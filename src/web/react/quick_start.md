# React

## 介绍

React 是一个用于构建用户界面的 JavaScript 库。

- **声明式**：React 让创建交互式 UI 变得轻而易举。为应用程序中的每个状态设计简单的视图，当数据发生变化时，React 将高效地更新和渲染正确的组件。声明式视图使您的代码更可预测、更易于理解且更易于调试。
- **基于组件**：构建封装的组件来管理自己的状态，然后将它们组合起来以创建复杂的 UI。由于组件逻辑是用 JavaScript 而不是模板编写的，因此您可以轻松地通过应用传递丰富的数据，并将状态保留在 DOM 之外。
- **一次学习，随处编写**：我们不会对您的其余技术堆栈做出假设，因此您可以在 React 中开发新功能而无需重写现有代码。React 还可以使用Node在服务器上进行渲染，并使用React Native为移动应用提供支持。

## Render App

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>
```

```jsx [main.js]
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

```jsx [App.jsx]
export default function App() {
  return <h1>Hello world</h1>
}
```

:::

## 参考资料

- [React（中文）](https://zh-hans.react.dev/)

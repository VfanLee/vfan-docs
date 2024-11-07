# React

## 介绍

...

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

```jsx [App.jsx]
export default function App() {
  return <h1>Hello world</h1>
}
```

```jsx [main.jsx]
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

:::

## 参考资料

- [React 中文官网](https://zh-hans.react.dev/)
- [Redux 中文官网](https://cn.redux.js.org/)
- [React Router 英文官网](https://reactrouter.com/)

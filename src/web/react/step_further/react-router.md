# React Router

## 安装

```sh
npm i react-router-dom
```

## 定义路由

```jsx
import { createBrowserRouter } from 'react-router-dom'

import About from '@/pages/About'
import Article from '@/pages/Article'

const router = createBrowserRouter([
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/article',
    element: <Article />
  }
])

export default router
```

### 路由模式

#### history

- url 表现：`url/login`
- 底层原理：history 对象 + pushState 事件
- 需要后端支持
- 使用 `createBrowserRouter`

#### hash

- url 表现：`url/#/login`
- 底层原理：hashChange 事件
- 不需要后端支持
- 使用 `createHashRouter`

## 使用路由

```jsx
import router from './router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
```

## 路由导航

### 声明式

```jsx
import { Link } from 'react-router-dom'

<Link to="/article">article</Link>
```

### 编程式

```jsx
import { useNavigate } from 'react-router-dom'

<button type="button" onClick={() => navigate('/about')}>
  about
</button>
```

## 路由传参

### searchParams 传参

```jsx
import { useSearchParams } from 'react-router-dom'

const [params] = useSearchParams()
const id = params.get('id')
const name = params.get('name')
```

### params 传参

1. 定义 params 路由

    ```jsx
    {
      path: '/article/:id/:name',
      element: <Article />
    }
    ```

2. 接收参数

    ```jsx
    import { useParams } from 'react-router-dom'

    const params = useParams()
    const id = params.id
    const name = params.name
    ```

## 路由嵌套

1. 定义路由

    ```jsx
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/article',
          element: <Article />
        }
      ]
    }
    ```

2. 使用 `<Outlet />` 渲染位置

## 默认路由

嵌套路由时，指定某个子路由为默认路由，案例如下：

```jsx
{
  path: '/',
  element: <App />,
  children: [
    // 默认路由
    {
      index: true,
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/article/:id/:name',
      element: <Article />
    }
  ]
}
```

## 404 路由配置

```jsx
{
  path: '*',
  element: <NotFound />
}
```

## 参考资料

- [React Router（英文）](https://reactrouter.com/)

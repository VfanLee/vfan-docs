# 响应式

## 声明 State

```jsx
import { useState } from 'react'

function App() {
  const [name] = useState('Tom')

  return <h1>Hello {name}</h1>
}

export default App
```

## 更新 State

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('Tom')

  useEffect(() => {
    setName('Jerry')
  }, [])

  return <h1>Hello {name}</h1>
}

export default App
```

## 计算属性

```jsx
import { useState } from 'react'

function App() {
  const [count] = useState(10)
  const doubleCount = count * 2

  return <div>{doubleCount}</div>
}

export default App
```

## 侦听器

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [count] = useState(10)
  const [doubleCount, setDoubleCount] = useState(count * 2)

  useEffect(() => {
    setDoubleCount(count * 2)
  }, [count])

  return <div>{doubleCount}</div>
}

export default App
```

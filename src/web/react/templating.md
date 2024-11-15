# 模板化

## 最小模板

```jsx
function App() {
  return <h1>Hello world</h1>
}

export default App
```

## 样式化

::: code-group

```jsx [App.jsx]
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 style={{ color: 'red', fontSize: '30px' }}>I'm red</h1>
      <button className="button">I'm a button</button>
    </div>
  )
}

export default App
```

```css [App.css]
.container {
  padding: 20px;
  background-color: lightblue;
}

.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}
```

:::

## 事件处理

```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count => count + 1)
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>+1</button>
    </>
  )
}

export default App
```

## 列表渲染

```jsx
function App() {
  const colors = ['red', 'green', 'blue']

  return (
    <ul>
      {colors.map(color => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  )
}

export default App
```

## 条件渲染

```jsx
import { useState } from 'react'

const TRAFFIC_LIGHTS = ['red', 'orange', 'green']

function App() {
  const [lightIndex, setLightIndex] = useState(0)

  function nextLight() {
    setLightIndex((lightIndex + 1) % TRAFFIC_LIGHTS.length)
  }

  return (
    <>
      <button onClick={nextLight}>Next light</button>
      <p>Light is: {TRAFFIC_LIGHTS[lightIndex]}</p>
      <p>
        {TRAFFIC_LIGHTS[lightIndex] === 'red' && <span>STOP</span>}
        {TRAFFIC_LIGHTS[lightIndex] === 'orange' && <span>SLOW DOWN</span>}
        {TRAFFIC_LIGHTS[lightIndex] === 'green' && <span>GO</span>}
      </p>
    </>
  )
}

export default App
```

## 模板引用

```jsx
import { useEffect, useRef } from 'react'

function App() {
  const inputElement = useRef(null)

  useEffect(() => inputElement.current.focus(), [])

  return <input type="text" ref={inputElement} />
}

export default App
```

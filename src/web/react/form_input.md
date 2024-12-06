# 表单输入绑定

## 单行文本

```jsx
import { useState } from 'react'

function App() {
  const [text, setText] = useState('Hello world')

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={handleChange} />
    </>
  )
}

export default App
```

## 单选按钮

```jsx
import { useState } from 'react'

function App() {
  const [picked, setPicked] = useState('red')

  function handleChange(event) {
    setPicked(event.target.value)
  }

  return (
    <>
      <div>Picked: {picked}</div>

      <input
        id="blue-pill" checked={picked === 'blue'}
        type="radio"
        value="blue"
        onChange={handleChange}
      />
      <label htmlFor="blue-pill">Blue pill</label>

      <input
        id="red-pill" checked={picked === 'red'}
        type="radio"
        value="red"
        onChange={handleChange}
      />
      <label htmlFor="red-pill">Red pill</label>
    </>
  )
}

export default App
```

## 复选框

```jsx
import { useState } from 'react'

function App() {
  const [isAvailable, setIsAvailable] = useState(false)

  function handleChange() {
    setIsAvailable(!isAvailable)
  }

  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        checked={isAvailable}
        onChange={handleChange}
      />
      <label htmlFor="is-available">Is available</label>
    </>
  )
}

export default App
```

## 选择器

```jsx
import { useState } from 'react'

const colors = [
  { id: 1, text: 'red' },
  { id: 2, text: 'blue' },
  { id: 3, text: 'green' },
  { id: 4, text: 'gray', isDisabled: true },
]

function App() {
  const [selectedColorId, setSelectedColorId] = useState(2)

  function handleChange(event) {
    setSelectedColorId(event.target.value)
  }

  return (
    <select value={selectedColorId} onChange={handleChange}>
      {colors.map(color => (
        <option key={color.id} value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  )
}

export default App
```

# 生命周期

## Mount

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return <p>Page title: {pageTitle}</p>
}

export default App
```

## Unmount

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <p>Current time: {time}</p>
}

export default App
```

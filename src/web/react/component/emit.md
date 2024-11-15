
# Emit

::: code-group

```jsx [App.jsx]
import { useState } from 'react'
import AnswerButton from './AnswerButton.jsx'

function App() {
  const [isHappy, setIsHappy] = useState(true)

  function onAnswerNo() {
    setIsHappy(false)
  }

  function onAnswerYes() {
    setIsHappy(true)
  }

  return (
    <>
      <p>Are you happy?</p>
      <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{isHappy ? '😀' : '😥'}</p>
    </>
  )
}

export default App
```

```jsx [AnswerButton.jsx]
import PropTypes from 'prop-types'

function AnswerButton({ onYes, onNo }) {
  return (
    <>
      <button onClick={onYes}>YES</button>
      <button onClick={onNo}>NO</button>
    </>
  )
}

AnswerButton.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func,
}

export default AnswerButton
```

:::

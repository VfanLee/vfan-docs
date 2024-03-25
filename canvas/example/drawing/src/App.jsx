import { useLayoutEffect, useState } from 'react'
import rough from 'roughjs'

const generator = rough.generator()

function createElement(x1, y1, x2, y2, type) {
  let re = type === 'line' ? generator.line(x1, y1, x2, y2) : generator.rectangle(x1, y1, x2 - x1, y2 - y1)
  return { x1, y1, x2, y2, re }
}

function App() {
  const [elements, setElements] = useState([])
  const [drawing, setDrawing] = useState(false)
  const [elementType, setElementType] = useState('line')

  useLayoutEffect(() => {
    const canvas = document.querySelector('#canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const rc = rough.canvas(canvas)

    elements.forEach(({ re }) => rc.draw(re))
  }, [elements])

  const handleMouseDown = e => {
    setDrawing(true)

    const { clientX, clientY } = e

    const element = createElement(clientX, clientY, clientX, clientY, elementType)
    setElements(prevState => [...prevState, element])
  }
  const handleMouseMove = e => {
    if (!drawing) return

    const { clientX, clientY } = e

    const index = elements.length - 1
    const { x1, y1 } = elements[index]
    const updatedElement = createElement(x1, y1, clientX, clientY, elementType)

    const elementsCopy = [...elements]
    elementsCopy[index] = updatedElement
    setElements(elementsCopy)
  }
  const handleMouseUp = e => {
    setDrawing(false)
  }

  return (
    <div>
      <div style={{ position: 'fixed' }}>
        <input type="radio" id="line" checked={elementType === 'line'} onChange={() => setElementType('line')} />
        <label htmlFor="line">line</label>
        <input type="radio" id="rectangle" checked={elementType === 'rectangle'} onChange={() => setElementType('rectangle')} />
        <label htmlFor="rectangle">rectangle</label>
      </div>
      <canvas id="canvas" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        Canvas
      </canvas>
    </div>
  )
}

export default App

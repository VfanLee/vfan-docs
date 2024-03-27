<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import roughjs from 'roughjs'

const canvasRef = ref(null)

const elements = ref([])
const drawing = ref(false)
const elementType = ref('line')

onMounted(() => {})

watch(
  elements,
  () => {
    nextTick(() => {
      const canvas = canvasRef.value
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const rc = roughjs.canvas(canvas)

      elements.value.forEach(({ re }) => rc.draw(re))
    })
  },
  { immediate: true }
)

const handleMouseDown = e => {
  drawing.value = true

  const { clientX, clientY } = e

  const element = createElement(clientX, clientY, clientX, clientY, elementType.value)
  elements.value = [...elements.value, element]
}

const handleMouseMove = e => {
  if (!drawing.value) return
  const { clientX, clientY } = e
  const index = elements.value.length - 1
  const { x1, y1 } = elements.value[index]
  const updatedElement = createElement(x1, y1, clientX, clientY, elementType.value)
  const elementsCopy = [...elements.value]
  elementsCopy[index] = updatedElement
  elements.value = elementsCopy
}

const handleMouseUp = e => {
  drawing.value = false
}

const generator = roughjs.generator()

function createElement(x1, y1, x2, y2, type) {
  let re = type === 'line' ? generator.line(x1, y1, x2, y2) : generator.rectangle(x1, y1, x2 - x1, y2 - y1)
  return { x1, y1, x2, y2, re }
}
</script>

<template>
  <div class="drawing__container" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
    <div class="drawing__tools">
      <input type="radio" id="rectangle" :checked="elementType === 'rectangle'" @change="() => (elementType = 'rectangle')" />
      <label for="rectangle">rectangle</label>
      <input type="radio" id="line" :checked="elementType === 'line'" @change="() => (elementType = 'line')" />
      <label for="line">line</label>
    </div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.drawing__container {
  height: 100vh;
  overflow: hidden;
}
.drawing__tools {
  position: fixed;
  top: 16px;
  left: 50%;
  display: flex;
  gap: 8px;
  padding-inline: 16px;
  padding-block: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.33);
  transform: translateX(-50%);
  user-select: none;
}
</style>

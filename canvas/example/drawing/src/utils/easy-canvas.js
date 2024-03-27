class EasyCanvas {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
  }

  rect(x, y, width, height) {
    this.ctx.strokeRect(x, y, width, height)
  }

  line(x1, y1, x2, y2) {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
  }

  text(text, x, y) {
    this.ctx.fillText(text, x, y)
    this.ctx.strokeText(text, x, y)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export default EasyCanvas

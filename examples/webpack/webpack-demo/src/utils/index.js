export function randomString() {
  return Math.random().toString(36).slice(2)
}

export function randomColor() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
}

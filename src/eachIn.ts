export default (
  object: Record<string, unknown>,
  func: (key: string, value?: unknown, index?: number) => void
) => {
  let index = 0

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      func(key, object[key], index)
      index++
    }
  }
}

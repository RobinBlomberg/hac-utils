export default <T extends Record<string, unknown>>(
  object: T,
  func: (key: string, value: T[keyof T], index: number) => unknown
) => {
  let index = 0

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const returnee = func(key, object[key], index)
      if (returnee !== undefined && !returnee) {
        break
      }

      index++
    }
  }
}

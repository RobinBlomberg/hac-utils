export default <
  O extends Record<string, unknown>,
  V extends unknown = O[keyof O]
>(
  object: O,
  func: <K extends keyof O>(value: O[K], key: K, index: number) => V
) => {
  const output: Partial<Record<keyof O, V>> = {}
  let index = 0

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      output[key] = func(object[key], key, index)
      index++
    }
  }

  return output as Record<keyof O, V>
}

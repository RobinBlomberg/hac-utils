export default <
  O extends Record<string, unknown>,
  V extends unknown = O[keyof O]
>(
  object: O,
  func: <K extends keyof O>(key: K, value: O[K], index: number) => V
) => {
  const output: Partial<Record<keyof O, V>> = {}
  let index = 0

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      output[key] = func(key, object[key], index)
      index++
    }
  }

  return output as Record<keyof O, V>
}

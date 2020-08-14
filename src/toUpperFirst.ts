export default (string: string): string => {
  return string.length >= 1
    ? string[0].toUpperCase() + string.slice(1)
    : string
}

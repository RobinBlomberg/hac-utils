import words from './toWords'

export default (string: string) => {
  return words(string)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

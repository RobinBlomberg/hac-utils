import { eachIn } from '../src'
import { strictEqual } from 'assert'

const output: string[] = []

eachIn({ baz: 'qux', foo: 'bar' }, (key, value) => {
  output.push(`${key}: ${value}`)
})

strictEqual(
  output.includes('baz: qux'),
  true
)
strictEqual(
  output.includes('foo: bar'),
  true
)

// It should support early breaking:
let iterationCount = 0

eachIn({ baz: 'qux', foo: 'bar' }, (key, value) => {
  iterationCount++
  return false
})

strictEqual(
  iterationCount,
  1
)

console.log('\u001b[32m✓ Test "eachIn" passed.\u001b[39m')

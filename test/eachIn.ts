import eachIn from '../src/eachIn'
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

console.log('\u001b[32m✓ Test "eachIn" passed.\u001b[39m')

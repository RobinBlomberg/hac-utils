import { strictEqual } from 'assert'
import toUpperFirst from '../src/toUpperFirst'

strictEqual(
  toUpperFirst('fooBar'),
  'FooBar'
)

console.log('\u001b[32m✓ Test "toUpperFirst" passed.\u001b[39m')

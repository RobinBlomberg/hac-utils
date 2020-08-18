import { deepStrictEqual } from 'assert'
import toWords from '../src/toWords'

deepStrictEqual(
  toWords(' foo bar, bAz.  56  '),
  ['foo', 'bar', 'bAz', '56']
)
deepStrictEqual(
  toWords(true),
  ['true']
)

console.log('\u001b[32m✓ Test "toWords" passed.\u001b[39m')

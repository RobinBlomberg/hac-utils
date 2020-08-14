import { strictEqual } from 'assert'
import escapeRegExp from '../src/escapeRegExp'

strictEqual(
  escapeRegExp('^foo.bar$'),
  '\\^foo\\.bar\\$'
)

console.log('\u001b[32m✓ Test "escapeRegExp" passed.\u001b[39m')

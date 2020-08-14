import { strictEqual } from 'assert'
import toTitleCase from '../src/toTitleCase'

strictEqual(
  toTitleCase(' foo bar, bAz.  56  '),
  'Foo Bar Baz 56'
)

console.log('\u001b[32m✓ Test "toTitleCase" passed.\u001b[39m')

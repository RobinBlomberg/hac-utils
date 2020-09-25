import { strictEqual } from 'assert'
import { toTitleCase } from '../src'

strictEqual(
  toTitleCase(' foo bar, bAz.  56  '),
  'Foo Bar Baz 56'
)
strictEqual(
  toTitleCase(36),
  '36'
)

console.log('\u001b[32m✓ Test "toTitleCase" passed.\u001b[39m')

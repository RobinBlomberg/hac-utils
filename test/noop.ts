import noop from '../src/noop'
import { strictEqual } from 'assert'

strictEqual(
  noop(),
  undefined
)

console.log('\u001b[32m✓ Test "noop" passed.\u001b[39m')

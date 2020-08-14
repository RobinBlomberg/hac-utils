import { strictEqual } from 'assert'
import getUtcIsoString from '../src/getUtcIsoString'

strictEqual(
  getUtcIsoString(new Date('Sun Feb 01 1998 00:05:06 GMT+0200')),
  '1998-01-31T22:05:06.000Z'
)

console.log('\u001b[32m✓ Test "getUtcIsoString" passed.\u001b[39m')

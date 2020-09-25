import mapIn from '../src/mapIn'
import { deepStrictEqual } from 'assert'

deepStrictEqual(
  mapIn({ abc: 100, def: 42 }, (value) => value * 2),
  { abc: 200, def: 84 }
)

console.log('\u001b[32m✓ Test "mapIn" passed.\u001b[39m')

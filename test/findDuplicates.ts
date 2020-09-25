import { deepStrictEqual } from 'assert'
import { findDuplicates } from '../src'

deepStrictEqual(
  findDuplicates(['foo', 'bar', 'baz', 'bar', 'qux', 'foo', 'hej']),
  new Set(['bar', 'foo'])
)

console.log('\u001b[32m✓ Test "findDuplicates" passed.\u001b[39m')

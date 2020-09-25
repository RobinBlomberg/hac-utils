"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const src_1 = require("../src");
assert_1.deepStrictEqual(src_1.findDuplicates(['foo', 'bar', 'baz', 'bar', 'qux', 'foo', 'hej']), new Set(['bar', 'foo']));
console.log('\u001b[32m✓ Test "findDuplicates" passed.\u001b[39m');
//# sourceMappingURL=findDuplicates.js.map
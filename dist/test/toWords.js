"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const src_1 = require("../src");
assert_1.deepStrictEqual(src_1.toWords(' foo bar, bAz.  56  '), ['foo', 'bar', 'bAz', '56']);
assert_1.deepStrictEqual(src_1.toWords(true), ['true']);
console.log('\u001b[32m✓ Test "toWords" passed.\u001b[39m');
//# sourceMappingURL=toWords.js.map
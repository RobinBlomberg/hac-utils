"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const src_1 = require("../src");
assert_1.strictEqual(src_1.toTitleCase(' foo bar, bAz.  56  '), 'Foo Bar Baz 56');
assert_1.strictEqual(src_1.toTitleCase(36), '36');
console.log('\u001b[32m✓ Test "toTitleCase" passed.\u001b[39m');
//# sourceMappingURL=toTitleCase.js.map
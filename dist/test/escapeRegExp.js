"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const assert_1 = require("assert");
assert_1.strictEqual(src_1.escapeRegExp('^foo.bar$'), '\\^foo\\.bar\\$');
console.log('\u001b[32m✓ Test "escapeRegExp" passed.\u001b[39m');
//# sourceMappingURL=escapeRegExp.js.map
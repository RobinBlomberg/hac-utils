"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const assert_1 = require("assert");
const output = [];
src_1.eachIn({ baz: 'qux', foo: 'bar' }, (key, value) => {
    output.push(`${key}: ${value}`);
});
assert_1.strictEqual(output.includes('baz: qux'), true);
assert_1.strictEqual(output.includes('foo: bar'), true);
// It should support early breaking:
let iterationCount = 0;
src_1.eachIn({ baz: 'qux', foo: 'bar' }, (key, value) => {
    iterationCount++;
    return false;
});
assert_1.strictEqual(iterationCount, 1);
console.log('\u001b[32m✓ Test "eachIn" passed.\u001b[39m');
//# sourceMappingURL=eachIn.js.map
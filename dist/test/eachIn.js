"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eachIn_1 = __importDefault(require("../src/eachIn"));
const assert_1 = require("assert");
const output = [];
eachIn_1.default({ baz: 'qux', foo: 'bar' }, (key, value) => {
    output.push(`${key}: ${value}`);
});
assert_1.strictEqual(output.includes('baz: qux'), true);
assert_1.strictEqual(output.includes('foo: bar'), true);
// It should support early breaking:
let iterationCount = 0;
eachIn_1.default({ baz: 'qux', foo: 'bar' }, (key, value) => {
    iterationCount++;
    return false;
});
assert_1.strictEqual(iterationCount, 1);
console.log('\u001b[32m✓ Test "eachIn" passed.\u001b[39m');
//# sourceMappingURL=eachIn.js.map
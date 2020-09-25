"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const toUpperFirst_1 = __importDefault(require("../src/toUpperFirst"));
assert_1.strictEqual(toUpperFirst_1.default('fooBar'), 'FooBar');
console.log('\u001b[32m✓ Test "toUpperFirst" passed.\u001b[39m');
//# sourceMappingURL=toUpperFirst.js.map
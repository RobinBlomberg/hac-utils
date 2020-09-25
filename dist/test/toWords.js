"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const toWords_1 = __importDefault(require("../src/toWords"));
assert_1.deepStrictEqual(toWords_1.default(' foo bar, bAz.  56  '), ['foo', 'bar', 'bAz', '56']);
assert_1.deepStrictEqual(toWords_1.default(true), ['true']);
console.log('\u001b[32m✓ Test "toWords" passed.\u001b[39m');
//# sourceMappingURL=toWords.js.map
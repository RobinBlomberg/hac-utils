"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const toTitleCase_1 = __importDefault(require("../src/toTitleCase"));
assert_1.strictEqual(toTitleCase_1.default(' foo bar, bAz.  56  '), 'Foo Bar Baz 56');
assert_1.strictEqual(toTitleCase_1.default(36), '36');
console.log('\u001b[32m✓ Test "toTitleCase" passed.\u001b[39m');
//# sourceMappingURL=toTitleCase.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const findDuplicates_1 = __importDefault(require("../src/findDuplicates"));
assert_1.deepStrictEqual(findDuplicates_1.default(['foo', 'bar', 'baz', 'bar', 'qux', 'foo', 'hej']), new Set(['bar', 'foo']));
console.log('\u001b[32m✓ Test "findDuplicates" passed.\u001b[39m');
//# sourceMappingURL=findDuplicates.js.map
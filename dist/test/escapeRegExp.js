"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escapeRegExp_1 = __importDefault(require("../src/escapeRegExp"));
const assert_1 = require("assert");
assert_1.strictEqual(escapeRegExp_1.default('^foo.bar$'), '\\^foo\\.bar\\$');
console.log('\u001b[32m✓ Test "escapeRegExp" passed.\u001b[39m');
//# sourceMappingURL=escapeRegExp.js.map
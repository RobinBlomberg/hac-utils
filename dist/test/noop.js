"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../src/noop"));
const assert_1 = require("assert");
assert_1.strictEqual(noop_1.default(), undefined);
console.log('\u001b[32m✓ Test "noop" passed.\u001b[39m');
//# sourceMappingURL=noop.js.map
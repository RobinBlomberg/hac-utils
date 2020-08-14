"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const getUtcIsoString_1 = __importDefault(require("../src/getUtcIsoString"));
assert_1.strictEqual(getUtcIsoString_1.default(new Date('Sun Feb 01 1998 00:05:06 GMT+0200')), '1998-01-31T22:05:06.000Z');
console.log('\u001b[32m✓ Test "getUtcIsoString" passed.\u001b[39m');
//# sourceMappingURL=getUtcIsoString.js.map
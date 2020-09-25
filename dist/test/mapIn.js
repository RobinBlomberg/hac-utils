"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapIn_1 = __importDefault(require("../src/mapIn"));
const assert_1 = require("assert");
assert_1.deepStrictEqual(mapIn_1.default({ abc: 100, def: 42 }, (value) => value * 2), { abc: 200, def: 84 });
console.log('\u001b[32m✓ Test "mapIn" passed.\u001b[39m');
//# sourceMappingURL=mapIn.js.map
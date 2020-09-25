"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const src_1 = require("../src");
assert_1.deepStrictEqual(src_1.mapIn({ abc: 100, def: 42 }, (key, value) => value * 2), { abc: 200, def: 84 });
console.log('\u001b[32m✓ Test "mapIn" passed.\u001b[39m');
//# sourceMappingURL=mapIn.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toWords_1 = __importDefault(require("./toWords"));
exports.default = (string) => {
    return toWords_1.default(string)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
//# sourceMappingURL=toTitleCase.js.map
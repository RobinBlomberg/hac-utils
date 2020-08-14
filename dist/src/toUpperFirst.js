"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (string) => {
    return string.length >= 1
        ? string[0].toUpperCase() + string.slice(1)
        : string;
};
//# sourceMappingURL=toUpperFirst.js.map
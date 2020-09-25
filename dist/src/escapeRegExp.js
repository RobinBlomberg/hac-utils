"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
//# sourceMappingURL=escapeRegExp.js.map
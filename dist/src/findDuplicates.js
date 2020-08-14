"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (values) => {
    const seen = new Set();
    const duplicates = new Set();
    for (const value of values) {
        if (seen.has(value)) {
            duplicates.add(value);
        }
        else {
            seen.add(value);
        }
    }
    return duplicates;
};
//# sourceMappingURL=findDuplicates.js.map
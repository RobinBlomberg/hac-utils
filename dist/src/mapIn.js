"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (object, func) => {
    const output = {};
    let index = 0;
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            output[key] = func(key, object[key], index);
            index++;
        }
    }
    return output;
};
//# sourceMappingURL=mapIn.js.map
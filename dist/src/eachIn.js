"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (object, func) => {
    let index = 0;
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const returnee = func(key, object[key], index);
            if (returnee !== undefined && !returnee) {
                break;
            }
            index++;
        }
    }
};
//# sourceMappingURL=eachIn.js.map
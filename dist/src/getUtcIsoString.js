"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (date = new Date()) => {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())).toISOString();
};
//# sourceMappingURL=getUtcIsoString.js.map
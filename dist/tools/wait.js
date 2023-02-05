"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
function wait(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, ms);
    });
}
exports.wait = wait;
//# sourceMappingURL=wait.js.map
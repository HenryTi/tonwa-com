"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTFunc = void 0;
var tools_1 = require("../tools");
function buildTFunc(res) {
    var langRes = res[tools_1.env.lang];
    return function (str) {
        var _a;
        return (_a = langRes[str]) !== null && _a !== void 0 ? _a : str;
    };
}
exports.buildTFunc = buildTFunc;
//# sourceMappingURL=buildTFunc.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resFuncs = exports.resStrings = void 0;
var tools_1 = require("../tools");
var en_1 = require("./en");
var zh_1 = require("./zh");
var resLang = {
    en: en_1.en,
    zh: zh_1.zh
};
exports.resStrings = en_1.en.strings;
exports.resFuncs = en_1.en.funcs;
__exportStar(require("./useT"), exports);
__exportStar(require("./defs"), exports);
__exportStar(require("./buildTFunc"), exports);
(function setLanguage() {
    var res = resLang[tools_1.env.lang];
    if (res) {
        exports.resStrings = res.strings;
        exports.resFuncs = res.funcs;
    }
})();
//# sourceMappingURL=index.js.map
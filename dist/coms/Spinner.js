"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function Spinner(_a) {
    var size = _a.size, className = _a.className;
    var sz = "".concat((Number(size !== null && size !== void 0 ? size : 2) + 1) * 0.5, "em");
    var style = { width: sz, height: sz, };
    var cn = 'spinner-border ' + (className !== null && className !== void 0 ? className : '');
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn, role: "status", style: style }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "visually-hidden" }, { children: "Loading..." }), void 0) }), void 0);
}
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map
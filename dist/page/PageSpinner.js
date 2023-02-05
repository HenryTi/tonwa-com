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
exports.PageSpinner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var coms_1 = require("../coms");
function PageSpinner() {
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: " tonwa-band-container bg-white d-flex justify-content-center" }, { children: (0, jsx_runtime_1.jsx)(coms_1.Spinner, { className: "m-5 text-center text-info" }, void 0) }), void 0);
}
exports.PageSpinner = PageSpinner;
//# sourceMappingURL=PageSpinner.js.map
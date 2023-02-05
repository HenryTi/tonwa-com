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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sep = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
function Sep(_a) {
    var sep = _a.sep, className = _a.className, children = _a.children;
    if (sep === null)
        return null;
    className = className !== null && className !== void 0 ? className : '';
    if (typeof sep === 'number') {
        className += ' border-top border-' + sep;
    }
    else if (react_1.default.isValidElement(sep) === true) {
        children = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [sep, children] }, void 0);
    }
    if (!children) {
        className += ' border-top border-1';
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: className }, { children: children }), void 0);
}
exports.Sep = Sep;
//# sourceMappingURL=Sep.js.map
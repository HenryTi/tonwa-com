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
exports.StackedFA = exports.FA = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function FA(props) {
    var name = props.name, className = props.className, size = props.size, spin = props.spin, fixWidth = props.fixWidth, border = props.border, pull = props.pull, pulse = props.pulse, rotate = props.rotate, flip = props.flip, inverse = props.inverse;
    var cn = 'fa';
    if (className)
        cn += ' ' + className;
    if (name)
        cn += ' fa-' + name;
    if (size)
        cn += ' fa-' + size;
    if (fixWidth)
        cn += ' fa-fw';
    if (border)
        cn += ' fa-border';
    if (pull)
        cn += ' fa-pull-' + pull;
    if (spin)
        cn += ' fa-spin';
    if (pulse)
        cn += ' fa-pulse';
    if (rotate)
        cn += ' fa-rotate-' + rotate;
    if (flip)
        cn += ' fa-flip-' + flip;
    if (inverse)
        cn += ' fa-inverse';
    return (0, jsx_runtime_1.jsx)("i", { className: cn }, void 0);
}
exports.FA = FA;
function StackedFA(props) {
    var className = props.className, size = props.size, children = props.children;
    var cn = 'fa-stack ';
    if (className)
        cn += className + ' ';
    if (size)
        cn += ' fa-' + size + ' ';
    return (0, jsx_runtime_1.jsx)("span", __assign({ className: cn }, { children: children }), void 0);
}
exports.StackedFA = StackedFA;
//# sourceMappingURL=FA.js.map
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
exports.BandString = exports.String = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var band_1 = require("../band");
var CharInput_1 = require("./CharInput");
function String(props) {
    var placeholder = props.placeholder, maxLength = props.maxLength;
    return (0, jsx_runtime_1.jsx)(CharInput_1.CharInput, __assign({ placeholder: placeholder, maxLength: maxLength }, props), void 0);
}
exports.String = String;
function BandString(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(String, __assign({}, props), void 0) }), void 0);
}
exports.BandString = BandString;
//# sourceMappingURL=String.js.map
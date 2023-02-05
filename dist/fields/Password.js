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
exports.BandPassword = exports.Password = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var band_1 = require("../band");
var CharInput_1 = require("./CharInput");
function Password(props) {
    var placeholder = props.placeholder, maxLength = props.maxLength;
    return (0, jsx_runtime_1.jsx)(CharInput_1.CharInput, __assign({ placeholder: placeholder, maxLength: maxLength }, props, { type: "password" }), void 0);
}
exports.Password = Password;
function BandPassword(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Password, __assign({}, props), void 0) }), void 0);
}
exports.BandPassword = BandPassword;
//# sourceMappingURL=Password.js.map
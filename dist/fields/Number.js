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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandInt = exports.Int = exports.BandDecimal = exports.Decimal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var band_1 = require("../band");
var res_1 = require("../res");
var CharInput_1 = require("./CharInput");
function appendRule(rules) {
    var ruleArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ruleArr[_i - 1] = arguments[_i];
    }
    var ret = __spreadArray([], ruleArr, true);
    if (rules) {
        ret.push.apply(ret, Array.isArray(rules) === true ? rules : [rules]);
    }
    return ret;
}
function isValidNumber(val, excludeChars) {
    val = val.trim();
    if (val.length === 0)
        return;
    var r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    if (val.indexOf('+') > 0 || val.indexOf('-') > 0)
        return false;
    var sr = String(r);
    var len = excludeChars.length;
    for (var i = 0; i < len; i++) {
        var ec = excludeChars[i];
        if (sr.indexOf(ec) >= 0)
            return false;
    }
    return true;
}
function belowMin(val, min) {
    if (min === undefined || min === null)
        return false;
    var r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    return r < min;
}
function overMax(val, max) {
    if (max === undefined || max === null)
        return false;
    var r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    return r > max;
}
var intChars = '01234567890-+';
var decChars = intChars + '.';
function NumberInput(props) {
    var placeholder = props.placeholder, maxLength = props.maxLength, rule = props.rule, min = props.min, max = props.max, chars = props.chars, excludeChars = props.excludeChars;
    function isValidKey(key) {
        return chars.indexOf(key) >= 0;
    }
    function mustBeDecimal(val) {
        if (isValidNumber(val, excludeChars) === false) {
            return res_1.resStrings[res_1.EnumString.rule_mustBeDecimal];
        }
    }
    function ruleMin(val) {
        if (belowMin(val, min) === true) {
            return res_1.resStrings[res_1.EnumString.rule_belowMin] + min;
        }
    }
    function ruleMax(val) {
        if (overMax(val, max) === true) {
            return res_1.resStrings[res_1.EnumString.rule_overMax] + max;
        }
    }
    return (0, jsx_runtime_1.jsx)(CharInput_1.CharInput, __assign({ placeholder: placeholder, maxLength: maxLength, isValidKey: isValidKey, rule: appendRule(rule, mustBeDecimal, ruleMin, ruleMax) }, props), void 0);
}
function Decimal(props) {
    return (0, jsx_runtime_1.jsx)(NumberInput, __assign({}, props, { chars: decChars, excludeChars: "e" }), void 0);
}
exports.Decimal = Decimal;
function BandDecimal(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Decimal, __assign({}, props), void 0) }), void 0);
}
exports.BandDecimal = BandDecimal;
function Int(props) {
    return (0, jsx_runtime_1.jsx)(NumberInput, __assign({}, props, { chars: intChars, excludeChars: ".e" }), void 0);
}
exports.Int = Int;
function BandInt(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Int, __assign({}, props), void 0) }), void 0);
}
exports.BandInt = BandInt;
//# sourceMappingURL=Number.js.map
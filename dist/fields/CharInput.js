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
exports.CharInputBase = exports.CharInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var Rule_1 = require("./Rule");
var jotai_1 = require("jotai");
var CharFieldItem = /** @class */ (function () {
    function CharFieldItem(name, input, initValue) {
        this.name = name;
        this.input = input;
        this.initValue = initValue;
    }
    CharFieldItem.prototype.reset = function () {
        var _a;
        if (!this.input)
            return;
        this.input.value = (_a = this.initValue) !== null && _a !== void 0 ? _a : '';
    };
    return CharFieldItem;
}());
function CharInput(props) {
    var _a;
    var bandContainer = (0, band_1.useBandContainer)();
    var name = props.name;
    var initValue = (_a = bandContainer === null || bandContainer === void 0 ? void 0 : bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name];
    return (0, jsx_runtime_1.jsx)(CharInputBase, __assign({}, props, { initValue: initValue }), void 0);
}
exports.CharInput = CharInput;
function CharInputBase(_a) {
    var _b, _c, _d, _e;
    var name = _a.name, className = _a.className, readOnly = _a.readOnly, placeholder = _a.placeholder, maxLength = _a.maxLength, rule = _a.rule, isValidKey = _a.isValidKey, initValue = _a.initValue, type = _a.type, disabled = _a.disabled;
    var input = (0, react_1.useRef)();
    var _f = (0, react_1.useState)(false), hasError = _f[0], setHasError = _f[1];
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    var props = bandContainer.props, fields = bandContainer.fields, fieldStates = bandContainer.fieldStates;
    var fieldState = (0, jotai_1.useAtomValue)(fieldStates[name]);
    readOnly = (_c = (_b = readOnly !== null && readOnly !== void 0 ? readOnly : (fieldState === null || fieldState === void 0 ? void 0 : fieldState.readOnly)) !== null && _b !== void 0 ? _b : props.readOnly) !== null && _c !== void 0 ? _c : false;
    (0, react_1.useEffect)(function () {
        var _a;
        if (!band)
            return;
        var bandFields = band.fields;
        bandFields[name] = true;
        var props = bandContainer.props, fieldStates = bandContainer.fieldStates;
        fields[name] = new CharFieldItem(name, input.current, (_a = props.values) === null || _a === void 0 ? void 0 : _a[name]);
        Object.assign(fieldStates[name], { readOnly: readOnly, disabled: disabled });
    }, [band, bandContainer, name, fields, disabled, readOnly]);
    var cn = (_e = (_d = className !== null && className !== void 0 ? className : props.stringClassName) !== null && _d !== void 0 ? _d : bandContainer.defaultStringClassName) !== null && _e !== void 0 ? _e : '';
    if (hasError === true)
        cn += ' is-invalid';
    if (readOnly === true) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn + ' bg-light text-muted' }, { children: initValue !== null && initValue !== void 0 ? initValue : bandContainer.defaultNone }), void 0);
    }
    var onFocus = function () {
        bandContainer.clearError(name);
        setHasError(false);
    };
    var onBlur = function () {
        var err = (0, Rule_1.checkRule)(input.current.value, rule);
        bandContainer.setError(name, err);
        var has = !(err === undefined);
        setHasError(has);
    };
    var onChange = function (evt) {
        bandContainer.setValue(name, evt.currentTarget.value);
    };
    var onBeforeInput = function (evt) {
        if (!isValidKey)
            return true;
        if (isValidKey(evt.data) === false) {
            evt.preventDefault();
            return false;
        }
    };
    return (0, jsx_runtime_1.jsx)("input", { ref: input, name: name, type: type !== null && type !== void 0 ? type : 'text', className: cn, disabled: fieldState === null || fieldState === void 0 ? void 0 : fieldState.disabled, readOnly: readOnly, onFocus: onFocus, onBlur: onBlur, onBeforeInput: onBeforeInput, onChange: onChange, placeholder: placeholder, maxLength: maxLength, defaultValue: initValue }, void 0);
}
exports.CharInputBase = CharInputBase;
//# sourceMappingURL=CharInput.js.map
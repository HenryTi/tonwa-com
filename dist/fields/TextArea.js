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
exports.BandTextArea = exports.TextArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var Rule_1 = require("./Rule");
var TextFieldItem = /** @class */ (function () {
    function TextFieldItem(name, input, initValue) {
        this.name = name;
        this.input = input;
        this.initValue = initValue;
    }
    TextFieldItem.prototype.reset = function () {
        var _a;
        if (!this.input)
            return;
        this.input.value = (_a = this.initValue) !== null && _a !== void 0 ? _a : '';
    };
    return TextFieldItem;
}());
function TextArea(_a) {
    var _b, _c, _d;
    var name = _a.name, className = _a.className, readOnly = _a.readOnly, placeholder = _a.placeholder, maxLength = _a.maxLength, rule = _a.rule, rows = _a.rows;
    var input = (0, react_1.useRef)();
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    (0, react_1.useEffect)(function () {
        var _a;
        if (band)
            band.fields[name] = true;
        var fields = bandContainer.fields, props = bandContainer.props;
        fields[name] = new TextFieldItem(name, input.current, (_a = props.values) === null || _a === void 0 ? void 0 : _a[name]);
    }, [band, bandContainer, name]);
    var props = bandContainer.props;
    readOnly = (_b = readOnly !== null && readOnly !== void 0 ? readOnly : props.readOnly) !== null && _b !== void 0 ? _b : false;
    var cn = (_c = className !== null && className !== void 0 ? className : props.stringClassName) !== null && _c !== void 0 ? _c : bandContainer.defaultStringClassName;
    var initValue = (_d = props.values) === null || _d === void 0 ? void 0 : _d[name];
    if (readOnly === true) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: initValue !== null && initValue !== void 0 ? initValue : bandContainer.defaultNone }), void 0);
    }
    var onFocus = function () {
        bandContainer.clearError(name);
    };
    var onBlur = function () {
        var err = (0, Rule_1.checkRule)(input.current.value, rule);
        bandContainer.setError(name, err);
    };
    var onChange = function (evt) {
        bandContainer.setValue(name, evt.currentTarget.value);
    };
    return (0, jsx_runtime_1.jsx)("textarea", { ref: input, name: name, className: cn, readOnly: readOnly, onFocus: onFocus, onBlur: onBlur, onChange: onChange, placeholder: placeholder, maxLength: maxLength, rows: rows !== null && rows !== void 0 ? rows : 4, defaultValue: initValue }, void 0);
}
exports.TextArea = TextArea;
function BandTextArea(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(TextArea, __assign({}, props), void 0) }), void 0);
}
exports.BandTextArea = BandTextArea;
//# sourceMappingURL=TextArea.js.map
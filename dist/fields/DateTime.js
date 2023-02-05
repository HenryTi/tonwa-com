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
exports.BandTimePicker = exports.BandDatePicker = exports.TimePicker = exports.DatePicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var Rule_1 = require("./Rule");
var DTFieldItem = /** @class */ (function () {
    function DTFieldItem(name, input, initValue) {
        this.name = name;
        this.input = input;
        this.initValue = initValue;
    }
    DTFieldItem.prototype.reset = function () {
        if (!this.input)
            return;
        if (!this.initValue) {
            this.input.value = undefined;
        }
        else {
            this.input.value = this.initValue;
        }
    };
    return DTFieldItem;
}());
function Picker(props) {
    var _a, _b, _c, _d;
    var input = (0, react_1.useRef)();
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    var _e = (0, react_1.useState)(false), hasError = _e[0], setHasError = _e[1];
    (0, react_1.useEffect)(function () {
        var _a;
        var fields = bandContainer.fields;
        var name = props.name;
        var fieldItem = new DTFieldItem(name, input.current, (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name]);
        if (band) {
            band.fields[name] = true;
        }
        fields[name] = fieldItem;
    }, [band, bandContainer, input, props]);
    var name = props.name, className = props.className, readOnly = props.readOnly, type = props.type, rule = props.rule;
    var formProps = bandContainer.props;
    readOnly = readOnly !== null && readOnly !== void 0 ? readOnly : formProps.readOnly;
    var initValue = (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name];
    var cn = (_c = (_b = className !== null && className !== void 0 ? className : formProps.stringClassName) !== null && _b !== void 0 ? _b : bandContainer.defaultStringClassName) !== null && _c !== void 0 ? _c : '';
    if (hasError === true)
        cn += ' is-invalid';
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
    function onChange(evt) {
        var val = evt.currentTarget.value;
        bandContainer.setValue(name, val);
    }
    if (readOnly === true) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: className !== null && className !== void 0 ? className : bandContainer.defaultStringClassName }, { children: initValue !== null && initValue !== void 0 ? initValue : bandContainer.defaultNone }), void 0);
    }
    return (0, jsx_runtime_1.jsx)("input", { ref: input, type: type, defaultValue: (_d = bandContainer.props.values) === null || _d === void 0 ? void 0 : _d[name], className: cn, onBlur: onBlur, onFocus: onFocus, onChange: onChange }, void 0);
}
function DatePicker(props) {
    return (0, jsx_runtime_1.jsx)(Picker, __assign({}, props, { type: "date" }), void 0);
}
exports.DatePicker = DatePicker;
function TimePicker(props) {
    return (0, jsx_runtime_1.jsx)(Picker, __assign({}, props, { type: "time" }), void 0);
}
exports.TimePicker = TimePicker;
function BandDatePicker(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(DatePicker, __assign({}, props), void 0) }), void 0);
}
exports.BandDatePicker = BandDatePicker;
function BandTimePicker(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(TimePicker, __assign({}, props), void 0) }), void 0);
}
exports.BandTimePicker = BandTimePicker;
//# sourceMappingURL=DateTime.js.map
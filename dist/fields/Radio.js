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
exports.BandRadio = exports.Radio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var RadioFieldItem = /** @class */ (function () {
    function RadioFieldItem(name, initValue) {
        this.name = name;
        this.inputs = [];
        if (initValue) {
            this.initValue = String(initValue);
        }
    }
    RadioFieldItem.prototype.addInput = function (input) {
        this.inputs.push(input);
    };
    RadioFieldItem.prototype.reset = function () {
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            if (!input)
                continue;
            input.checked = input.value === this.initValue;
        }
    };
    return RadioFieldItem;
}());
function RadioInput(_a) {
    var _b, _c;
    var name = _a.name, className = _a.className, readOnly = _a.readOnly, item = _a.item, itemIndex = _a.itemIndex, defaultChecked = _a.defaultChecked;
    var label = item.label, value = item.value;
    var input = (0, react_1.useRef)();
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    (0, react_1.useEffect)(function () {
        var fieldItem = bandContainer.fields[name];
        fieldItem.addInput(input.current);
    }, [band, bandContainer, name]);
    var props = bandContainer.props;
    function onChange(evt) {
        var t = evt.currentTarget;
        if (t.checked === true) {
            bandContainer.setValue(name, value);
        }
    }
    readOnly = (_b = readOnly !== null && readOnly !== void 0 ? readOnly : props.readOnly) !== null && _b !== void 0 ? _b : false;
    var radioId = "_".concat(name, "_").concat(itemIndex, "_").concat(Date.now());
    return (0, jsx_runtime_1.jsxs)("label", __assign({ className: "form-check form-check-inline py-1 form-check-label" }, { children: [(0, jsx_runtime_1.jsx)("input", { ref: input, name: name, type: "radio", id: radioId, className: (_c = className !== null && className !== void 0 ? className : props.checkClassName) !== null && _c !== void 0 ? _c : bandContainer.defaultCheckClassName, disabled: readOnly, onChange: onChange, value: value, defaultChecked: defaultChecked }, void 0), label] }), void 0);
    // <label className="form-check-label" htmlFor={radioId}>{label}</label> &nbsp;
}
function Radio(props) {
    var _a;
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    var name = props.name, options = props.options;
    var val = bandContainer.getValue(name);
    var fieldItem = (0, react_1.useRef)(new RadioFieldItem(name, (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name])).current;
    if (band)
        band.fields[name] = true;
    bandContainer.fields[name] = fieldItem;
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-1" }, { children: options.map(function (v, index) { return (0, jsx_runtime_1.jsx)(RadioInput, __assign({}, props, { item: v, itemIndex: index, defaultChecked: v.value === val }), index); }) }), void 0);
}
exports.Radio = Radio;
function BandRadio(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Radio, __assign({}, props), void 0) }), void 0);
}
exports.BandRadio = BandRadio;
//# sourceMappingURL=Radio.js.map
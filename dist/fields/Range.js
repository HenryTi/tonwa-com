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
exports.BandRange = exports.Range = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var RangeFieldItem = /** @class */ (function () {
    function RangeFieldItem(name, input, initValue) {
        this.name = name;
        this.input = input;
        this.initValue = initValue;
    }
    RangeFieldItem.prototype.reset = function () {
        if (!this.input)
            return;
        if (!this.initValue) {
            this.input.value = undefined;
        }
        else {
            this.input.value = String(this.initValue);
        }
    };
    return RangeFieldItem;
}());
function Range(props) {
    var _a, _b;
    var input = (0, react_1.useRef)();
    var _c = (0, react_1.useState)(), value = _c[0], setValue = _c[1];
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    (0, react_1.useEffect)(function () {
        var _a;
        var name = props.name;
        var fieldItem = new RangeFieldItem(name, input.current, (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name]);
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = fieldItem;
    }, [band, bandContainer, input, props]);
    var formProps = bandContainer.props;
    var name = props.name, className = props.className, readOnly = props.readOnly, min = props.min, max = props.max, step = props.step;
    readOnly = readOnly !== null && readOnly !== void 0 ? readOnly : formProps.readOnly;
    var initValue = (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name];
    function onChange(evt) {
        var val = evt.currentTarget.value;
        var n = Number(val);
        if (Number.isNaN(n) === false) {
            bandContainer.setValue(name, n);
            setValue(n);
        }
    }
    if (readOnly === true) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: className !== null && className !== void 0 ? className : bandContainer.defaultStringClassName }, { children: initValue !== null && initValue !== void 0 ? initValue : bandContainer.defaultNone }), void 0);
    }
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'd-flex ' + (className !== null && className !== void 0 ? className : bandContainer.defaultStringClassName) }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "me-2 w-min-3c text-center" }, { children: value !== null && value !== void 0 ? value : initValue }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex-grow-1" }, { children: [(0, jsx_runtime_1.jsx)("input", { ref: input, type: "range", defaultValue: (_b = bandContainer.props.values) === null || _b === void 0 ? void 0 : _b[name], className: className !== null && className !== void 0 ? className : bandContainer.defaultRangeClassName, onChange: onChange, min: min, max: max, step: step }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex small text-muted px-1" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "me-3" }, { children: min }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "flex-grow-1" }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ms-3" }, { children: max }), void 0)] }), void 0)] }), void 0)] }), void 0);
}
exports.Range = Range;
function BandRange(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Range, __assign({}, props), void 0) }), void 0);
}
exports.BandRange = BandRange;
//# sourceMappingURL=Range.js.map
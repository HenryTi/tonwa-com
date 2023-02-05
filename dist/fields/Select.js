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
exports.BandSelect = exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var res_1 = require("../res");
var SelectFieldItem = /** @class */ (function () {
    function SelectFieldItem(name, select, initIndex) {
        this.name = name;
        this.select = select;
        this.initIndex = initIndex;
    }
    SelectFieldItem.prototype.reset = function () {
        if (!this.select)
            return;
        this.select.selectedIndex = this.initIndex;
    };
    return SelectFieldItem;
}());
function Select(props) {
    var _a, _b;
    var select = (0, react_1.useRef)();
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    (0, react_1.useEffect)(function () {
        var _a;
        var formProps = bandContainer.props;
        var name = props.name, options = props.options;
        var initValue = (_a = formProps.values) === null || _a === void 0 ? void 0 : _a[name];
        var initIndex = initValue ? options.findIndex(function (v) { return v.value === initValue; }) : 0;
        var fieldItem = new SelectFieldItem(name, select.current, initIndex);
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = fieldItem;
    }, [band, bandContainer, props]);
    var formProps = bandContainer.props;
    var name = props.name, options = props.options, placeholder = props.placeholder, className = props.className, readOnly = props.readOnly;
    readOnly = readOnly !== null && readOnly !== void 0 ? readOnly : formProps.readOnly;
    var initValue = (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name];
    function onChange(evt) {
        bandContainer.setValue(name, evt.currentTarget.value);
    }
    if (readOnly === true) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: className !== null && className !== void 0 ? className : bandContainer.defaultStringClassName }, { children: initValue !== null && initValue !== void 0 ? initValue : bandContainer.defaultNone }), void 0);
    }
    return (0, jsx_runtime_1.jsxs)("select", __assign({ ref: select, defaultValue: (_b = bandContainer.props.values) === null || _b === void 0 ? void 0 : _b[name], className: className !== null && className !== void 0 ? className : bandContainer.defaultSelectClassName, onChange: onChange }, { children: [!initValue &&
                (0, jsx_runtime_1.jsx)("option", __assign({ value: undefined }, { children: placeholder !== null && placeholder !== void 0 ? placeholder : res_1.resStrings[res_1.EnumString.placeholder_select] }), void 0), options.map(function (v, index) { return (0, jsx_runtime_1.jsx)("option", __assign({ value: v.value }, { children: v.label }), index); })] }), void 0);
}
exports.Select = Select;
function BandSelect(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Select, __assign({}, props), void 0) }), void 0);
}
exports.BandSelect = BandSelect;
//# sourceMappingURL=Select.js.map
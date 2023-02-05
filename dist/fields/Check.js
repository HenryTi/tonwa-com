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
exports.BandCheck = exports.Check = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var CheckFieldItem = /** @class */ (function () {
    function CheckFieldItem(name, input, indeterminate, initChecked) {
        this.name = name;
        this.input = input;
        this.indeterminate = indeterminate;
        this.initChecked = initChecked;
    }
    CheckFieldItem.prototype.reset = function () {
        if (!this.input)
            return;
        this.input.indeterminate = this.indeterminate;
        this.input.checked = this.initChecked;
    };
    return CheckFieldItem;
}());
function CheckInput(_a) {
    var _b, _c;
    var name = _a.name, id = _a.id, readOnly = _a.readOnly, indeterminate = _a.indeterminate, checkedValue = _a.checkedValue, uncheckedValue = _a.uncheckedValue;
    var input = (0, react_1.useRef)();
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    var props = bandContainer.props;
    var val = bandContainer.getValue(name);
    var initChecked = val === (checkedValue !== null && checkedValue !== void 0 ? checkedValue : true);
    var onClick;
    var checked;
    if (bandContainer.isDetail === true) {
        checked = initChecked;
        initChecked = undefined;
        onClick = function (evt) {
            evt.preventDefault();
            return false;
        };
    }
    (0, react_1.useEffect)(function () {
        var _a;
        if (indeterminate === true) {
            input.current.indeterminate = true;
        }
        if (band) {
            var bandFields = band.fields;
            bandFields[name] = true;
        }
        var props = bandContainer.props, fields = bandContainer.fields;
        var initChecked = ((_a = props.values) === null || _a === void 0 ? void 0 : _a[name]) === (checkedValue !== null && checkedValue !== void 0 ? checkedValue : true);
        fields[name] = new CheckFieldItem(name, input.current, indeterminate, initChecked);
    }, [band, bandContainer, name, indeterminate, checkedValue]);
    function onChange(evt) {
        var val;
        var t = evt.currentTarget;
        if (t.indeterminate === true)
            val = undefined;
        else {
            val = t.checked ? (checkedValue !== null && checkedValue !== void 0 ? checkedValue : true) : (uncheckedValue !== null && uncheckedValue !== void 0 ? uncheckedValue : false);
        }
        bandContainer.setValue(name, val);
    }
    return (0, jsx_runtime_1.jsx)("input", { ref: input, name: name, type: "checkbox", id: id, className: (_b = props.checkClassName) !== null && _b !== void 0 ? _b : bandContainer.defaultCheckClassName, disabled: (_c = readOnly !== null && readOnly !== void 0 ? readOnly : props.readOnly) !== null && _c !== void 0 ? _c : false, onChange: onChange, onClick: onClick, checked: checked, defaultChecked: initChecked }, void 0);
}
function Check(props) {
    var _a;
    var label = props.label;
    var id = "_".concat(props.name, "_").concat(Date.now());
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: (_a = props.className) !== null && _a !== void 0 ? _a : 'form-check' }, { children: [(0, jsx_runtime_1.jsx)(CheckInput, __assign({}, props, { id: id }), void 0), (0, jsx_runtime_1.jsx)("label", __assign({ className: "form-check-label", htmlFor: id }, { children: label }), void 0)] }), void 0);
}
exports.Check = Check;
function BandCheck(props) {
    var label = props.label;
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { label: undefined, contentType: band_1.BandContentType.check }, { children: (0, jsx_runtime_1.jsx)(Check, __assign({}, props, { label: label }), void 0) }), void 0);
}
exports.BandCheck = BandCheck;
//# sourceMappingURL=Check.js.map
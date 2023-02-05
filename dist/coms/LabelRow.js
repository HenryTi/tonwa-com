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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelRow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var defualtLeftSize = 3;
var defaultLabelClassName = ' py-1 tonwa-bg-gray-1 fw-bold col-form-label border-end';
var defaultMidClassName = ' ';
function DefaultLabelContainer(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
}
function DefaultMidContainer(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
}
function DefaultRightContainer(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
}
function LabelRow(_a) {
    var className = _a.className, labelSize = _a.labelSize, labelAlign = _a.labelAlign, labelClassName = _a.labelClassName, LabelContainer = _a.LabelContainer, midClassName = _a.midClassName, MidContainer = _a.MidContainer, RightContainer = _a.RightContainer, vAlign = _a.vAlign, to = _a.to, children = _a.children;
    labelSize = labelSize !== null && labelSize !== void 0 ? labelSize : defualtLeftSize;
    var cnLabelAlign;
    if (LabelContainer) {
        cnLabelAlign = '';
    }
    else {
        cnLabelAlign = "justify-content-sm-".concat(labelAlign !== null && labelAlign !== void 0 ? labelAlign : 'end');
    }
    labelClassName = labelClassName !== null && labelClassName !== void 0 ? labelClassName : defaultLabelClassName;
    midClassName = midClassName !== null && midClassName !== void 0 ? midClassName : defaultMidClassName;
    var vAlignClassName = 'align-items-' + (vAlign !== null && vAlign !== void 0 ? vAlign : 'center');
    var arr = react_1.default.Children.toArray(children);
    var len = arr.length;
    if (len < 2) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-danger" }, { children: "children count must > 2" }), void 0);
    }
    LabelContainer = LabelContainer !== null && LabelContainer !== void 0 ? LabelContainer : DefaultLabelContainer;
    MidContainer = MidContainer !== null && MidContainer !== void 0 ? MidContainer : DefaultMidContainer;
    RightContainer = RightContainer !== null && RightContainer !== void 0 ? RightContainer : DefaultRightContainer;
    var midArr = arr.slice(1, len - 1);
    var right;
    if (len > 2) {
        right = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-fill" }, void 0), (0, jsx_runtime_1.jsx)(RightContainer, { children: arr[len - 1] }, void 0)] }, void 0);
    }
    var cn = 'row mx-0 ' + (className !== null && className !== void 0 ? className : 'bg-white');
    var content = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "col-sm-".concat(labelSize, " d-flex ").concat(vAlignClassName, " ").concat(cnLabelAlign, " ").concat(labelClassName) }, { children: (0, jsx_runtime_1.jsx)(LabelContainer, { children: arr[0] }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-".concat(12 - labelSize, " gx-0 d-flex ").concat(vAlignClassName, " ").concat(midClassName) }, { children: [(0, jsx_runtime_1.jsx)(MidContainer, { children: midArr.map(function (v, index) { return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: v }, index); }) }, void 0), right] }), void 0)] }, void 0);
    if (to) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ className: cn, to: to }, { children: content }), void 0);
    }
    else {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: content }), void 0);
    }
}
exports.LabelRow = LabelRow;
//# sourceMappingURL=LabelRow.js.map
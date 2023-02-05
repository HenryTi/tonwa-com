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
exports.BandFormErrors = exports.FormErrors = exports.Form = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var FormContext_1 = require("./FormContext");
var band_2 = require("../band");
var jotai_1 = require("jotai");
function DefaultBandTemplate(props) {
    var label = props.label, labelSize = props.labelSize, children = props.children, errors = props.errors, memos = props.memos, contentContainerClassName = props.contentContainerClassName;
    labelSize = labelSize !== null && labelSize !== void 0 ? labelSize : 2;
    var vLabel;
    var cnContent = "col-sm-".concat(12 - labelSize, " ").concat(contentContainerClassName !== null && contentContainerClassName !== void 0 ? contentContainerClassName : '');
    if (label) {
        vLabel = (0, jsx_runtime_1.jsx)("label", __assign({ className: "col-sm-".concat(labelSize, " col-form-label text-sm-end") }, { children: (0, jsx_runtime_1.jsx)("b", { children: label }, void 0) }), void 0);
    }
    else {
        cnContent += ' offset-sm-2';
    }
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "mb-3 row bg-white" }, { children: [vLabel, (0, jsx_runtime_1.jsxs)("div", __assign({ className: cnContent }, { children: [children, (0, jsx_runtime_1.jsx)(band_1.BandFieldErrors, { errors: errors }, void 0), (0, jsx_runtime_1.jsx)(band_1.BandMemos, { memos: memos }, void 0)] }), void 0)] }), void 0);
}
function Form(props) {
    var className = props.className, children = props.children, BandTemplate = props.BandTemplate;
    BandTemplate = BandTemplate !== null && BandTemplate !== void 0 ? BandTemplate : DefaultBandTemplate;
    var formContext = (0, react_1.useRef)(new FormContext_1.FormContext(__assign(__assign({}, props), { BandTemplate: BandTemplate }))).current;
    function onSubmit(evt) {
        evt.preventDefault();
    }
    return (0, jsx_runtime_1.jsx)(FormContext_1.VFormContext.Provider, __assign({ value: formContext }, { children: (0, jsx_runtime_1.jsx)(band_1.VBandContainerContext.Provider, __assign({ value: formContext }, { children: (0, jsx_runtime_1.jsx)("form", __assign({ className: className, onSubmit: onSubmit }, { children: children }), void 0) }), void 0) }), void 0);
}
exports.Form = Form;
function FormErrors() {
    var form = (0, FormContext_1.useForm)();
    var errors = (0, jotai_1.useAtomValue)(form.errorResponse).errors;
    if (!errors)
        return null;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: errors.map(function (v, index) { return (0, jsx_runtime_1.jsx)(band_2.BandFieldError, { error: v }, index); }) }, void 0);
}
exports.FormErrors = FormErrors;
function BandFormErrors() {
    var form = (0, FormContext_1.useForm)();
    var errors = (0, jotai_1.useAtomValue)(form.errorResponse).errors;
    if (!errors)
        return null;
    return (0, jsx_runtime_1.jsx)(band_1.Band, { children: errors.map(function (v, index) { return (0, jsx_runtime_1.jsx)(band_2.BandFieldError, { error: v }, index); }) }, void 0);
}
exports.BandFormErrors = BandFormErrors;
//# sourceMappingURL=Form.js.map
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Link } from "react-router-dom";
const defaultLeftSize = 3;
const defaultLabelClassName = ' py-1 tonwa-bg-gray-1 fw-bold col-form-label border-end';
const defaultMidClassName = ' ';
function DefaultLabelContainer({ children }) {
    return _jsx(_Fragment, { children: children });
}
function DefaultMidContainer({ children }) {
    return _jsx(_Fragment, { children: children });
}
function DefaultRightContainer({ children }) {
    return _jsx(_Fragment, { children: children });
}
export function LabelRow({ className, labelSize, labelAlign, labelClassName, LabelContainer, midClassName, MidContainer, RightContainer, vAlign, to, children }) {
    labelSize = labelSize ?? defaultLeftSize;
    let cnLabelAlign;
    if (LabelContainer) {
        cnLabelAlign = '';
    }
    else {
        cnLabelAlign = `justify-content-sm-${labelAlign ?? 'end'}`;
    }
    labelClassName = labelClassName ?? defaultLabelClassName;
    midClassName = midClassName ?? defaultMidClassName;
    let vAlignClassName = 'align-items-' + (vAlign ?? 'center');
    let arr = React.Children.toArray(children);
    let len = arr.length;
    if (len < 2) {
        return _jsx("div", { className: "text-danger", children: "children count must > 2" });
    }
    LabelContainer = LabelContainer ?? DefaultLabelContainer;
    MidContainer = MidContainer ?? DefaultMidContainer;
    RightContainer = RightContainer ?? DefaultRightContainer;
    let midArr = arr.slice(1, len - 1 + 1);
    let right;
    if (len > 2) {
        right = _jsxs(_Fragment, { children: [_jsx("div", { className: "flex-fill" }), _jsx(RightContainer, { children: arr[len - 1] })] });
    }
    let cn = 'row mx-0 ' + (className ?? 'bg-white');
    let content = _jsxs(_Fragment, { children: [_jsx("div", { className: `col-sm-${labelSize} d-flex ${vAlignClassName} ${cnLabelAlign} ${labelClassName}`, children: _jsx(LabelContainer, { children: arr[0] }) }), _jsxs("div", { className: `col-sm-${12 - labelSize} gx-0 d-flex ${vAlignClassName} ${midClassName}`, children: [_jsx(MidContainer, { children: midArr.map((v, index) => _jsx(React.Fragment, { children: v }, index)) }), right] })] });
    if (to) {
        return _jsx(Link, { className: cn, to: to, children: content });
    }
    else {
        return _jsx("div", { className: cn, children: content });
    }
}
//# sourceMappingURL=LabelRow.js.map
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Sep({ sep, className, children }) {
    if (sep === null)
        return null;
    className = className ?? '';
    if (typeof sep === 'number') {
        className += ' border-top border-' + sep;
    }
    else if (React.isValidElement(sep) === true) {
        children = _jsxs(_Fragment, { children: [sep, children] }, void 0);
    }
    if (!children) {
        className += ' border-top border-1';
    }
    return _jsx("div", { className: className, children: children }, void 0);
}
//# sourceMappingURL=Sep.js.map
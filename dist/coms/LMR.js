import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
export function LMR(props) {
    let { className, children, onClick } = props;
    let cn = (className ?? '');
    if (onClick !== undefined)
        cn += ' cursor-pointer ';
    let arr = React.Children.toArray(children);
    let len = arr.length;
    if (len > 1) {
        arr.splice(len - 1, 0, _jsx("div", { className: "flex-fill" }, void 0));
    }
    return _jsx("div", { className: 'd-flex ' + cn, onClick: onClick, children: arr.map((v, index) => _jsx(React.Fragment, { children: v }, index)) }, void 0);
}
//# sourceMappingURL=LMR.js.map
import { jsx as _jsx } from "react/jsx-runtime";
export function Spinner({ size, className }) {
    let sz = `${(Number(size ?? 2) + 1) * 0.5}em`;
    let style = { width: sz, height: sz, };
    let cn = 'spinner-border ' + (className ?? '');
    return _jsx("div", { className: cn, role: "status", style: style, children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) });
}
//# sourceMappingURL=Spinner.js.map
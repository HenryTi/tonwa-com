import { jsx as _jsx } from "react/jsx-runtime";
export function ComAsync({ isWaiting }) {
    let style = {
        zIndex: 30001,
        background: 'rgba(0, 0, 0, 0.3)',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    };
    if (isWaiting !== true)
        return null;
    return _jsx("div", { className: "d-flex position-absolute align-items-center justify-content-center", style: style, children: _jsx("i", { className: "fa fa-spinner fa-spin" }) });
}
//# sourceMappingURL=ComAsync.js.map
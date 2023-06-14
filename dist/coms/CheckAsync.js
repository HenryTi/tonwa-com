import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FA } from "./FA";
export function CheckAsync(props) {
    let { onCheckChanged, children, labelClassName, inputClassName, gapClassName, name, defaultChecked } = props;
    let [running, setRunning] = useState(false);
    async function onChange(evt) {
        if (onCheckChanged === undefined)
            return;
        setRunning(true);
        let { name, checked } = evt.currentTarget;
        await onCheckChanged(name, checked);
        setRunning(false);
    }
    if (gapClassName === undefined)
        gapClassName = '';
    let vRunning;
    if (running === true) {
        vRunning = _jsx(FA, { name: "spinner", spin: true, className: gapClassName + ' text-info position-absolute ' });
    }
    return _jsxs("label", { className: (labelClassName ?? '') + ' d-inline-block position-relative ', children: [vRunning, _jsx("input", { type: "checkbox", className: (inputClassName ?? '') + gapClassName, name: name, disabled: running, defaultChecked: defaultChecked, onChange: onChange }), children] });
}
//# sourceMappingURL=CheckAsync.js.map
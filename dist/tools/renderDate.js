import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function renderDate(date) {
    if (!date)
        return null;
    let parts = date.split('-');
    let d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return _jsx(_Fragment, { children: d.toDateString() }, void 0);
}
export function renderHourMinute(time) {
    let parts = time.split(':');
    return _jsxs(_Fragment, { children: [parts[0], ":", parts[1]] }, void 0);
}
//# sourceMappingURL=renderDate.js.map
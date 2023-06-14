import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function renderDate(date) {
    if (!date)
        return null;
    let arr = date.split('-');
    let d = new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
    return _jsx(_Fragment, { children: d.toDateString() });
}
export function renderHourMinute(time) {
    let arr = time.split(':');
    return _jsxs(_Fragment, { children: [arr[0], ":", arr[1]] });
}
//# sourceMappingURL=renderDate.js.map
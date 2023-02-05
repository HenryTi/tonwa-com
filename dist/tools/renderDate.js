"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHourMinute = exports.renderDate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function renderDate(date) {
    if (!date)
        return null;
    var parts = date.split('-');
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: d.toDateString() }, void 0);
}
exports.renderDate = renderDate;
function renderHourMinute(time) {
    var parts = time.split(':');
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [parts[0], ":", parts[1]] }, void 0);
}
exports.renderHourMinute = renderHourMinute;
//# sourceMappingURL=renderDate.js.map
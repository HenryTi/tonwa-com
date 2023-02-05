"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromHourId = exports.dateFromMinuteId = exports.minute2020_01_01 = exports.toLocaleDateString = void 0;
var env_1 = require("./env");
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
function toLocaleDateString(date) {
    if (!date)
        return '';
    return date.toLocaleDateString('zh-cn', options);
}
exports.toLocaleDateString = toLocaleDateString;
exports.minute2020_01_01 = 0; // 2020-1-1 到 1970-1-1 的分钟数
function dateFromMinuteId(id, timeZone) {
    var _a;
    // let envTimezone = env.timeZone;
    //let m = (id / Math.pow(2, 20)) + (- envTimezone + (timeZone ?? envTimezone)) * 60;
    //return new Date((m + minute2020_01_01) * 60000);
    var d = new Date(((id / Math.pow(2, 20)) + exports.minute2020_01_01) * 60000);
    d.setHours((_a = d.getHours() + timeZone) !== null && _a !== void 0 ? _a : 0);
    return d;
}
exports.dateFromMinuteId = dateFromMinuteId;
function dateFromHourId(id, timeZone) {
    var envTimezone = env_1.env.timeZone;
    var m = id + (-envTimezone + (timeZone !== null && timeZone !== void 0 ? timeZone : envTimezone));
    return new Date((m + exports.minute2020_01_01) * 60 * 60000);
}
exports.dateFromHourId = dateFromHourId;
//# sourceMappingURL=date.js.map
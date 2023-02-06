import { env } from "./env";
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
export function toLocaleDateString(date) {
    if (!date)
        return '';
    return date.toLocaleDateString('zh-cn', options);
}
export const minute2020_01_01 = 0; // 2020-1-1 到 1970-1-1 的分钟数
export function dateFromMinuteId(id, timeZone) {
    // let envTimezone = env.timeZone;
    //let m = (id / Math.pow(2, 20)) + (- envTimezone + (timeZone ?? envTimezone)) * 60;
    //return new Date((m + minute2020_01_01) * 60000);
    let d = new Date(((id / Math.pow(2, 20)) + minute2020_01_01) * 60000);
    d.setHours(d.getHours() + timeZone ?? 0);
    return d;
}
export function dateFromHourId(id, timeZone) {
    let envTimezone = env.timeZone;
    let m = id + (-envTimezone + (timeZone ?? envTimezone));
    return new Date((m + minute2020_01_01) * 60 * 60000);
}
//# sourceMappingURL=date.js.map
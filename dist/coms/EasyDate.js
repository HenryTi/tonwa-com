import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EnumString, resStrings, resFuncs } from '../res';
//type YMD = (year:number, month:number, date:number) => string;
//type MD = (month:number, date:number) => string;
/*
const timeRes: { [prop: string]: any } = {
    md: (month: number, date: number) => `${month}-${date}`,
    ymd: (year: number, month: number, date: number) => `${year}-${month}-${date}`,
    yesterday: 'Yday',
    today: 'Today',
    tomorrow: 'Tmw',
    $zh: {
        md: (month: number, date: number) => `${month}月${date}日`,
        ymd: (year: number, month: number, date: number) => `${year}年${month}月${date}日`,
        yesterday: '昨天',
        today: '今天',
        tomorrow: '明天',
    },
    $en: {
        md: (month: number, date: number) => `${month}-${date}`,
        ymd: (year: number, month: number, date: number) => `${year}-${month}-${date}`,
        yesterday: 'Yday',
        today: 'Today',
        tomorrow: 'Tmw',
    }
}
*/
//setRes(timeRes, timeRes);
function tt(str) {
    return resStrings[str];
}
function renderDate(vDate, withTime, always = false) {
    if (!vDate)
        return null;
    let date;
    switch (typeof vDate) {
        default:
            date = vDate;
            break;
        case 'string':
            date = new Date(vDate);
            break;
        case 'number':
            date = new Date(vDate * 1000);
            break;
    }
    let now = new Date();
    let tick, nDate, _date, month, year, nowYear;
    let d = date;
    tick = now.getTime() - d.getTime();
    let hour = d.getHours(), minute = d.getMinutes();
    nDate = now.getDate();
    _date = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear();
    nowYear = now.getFullYear();
    let appendTime = false;
    let dPart = (function () {
        if (tick < -24 * 3600 * 1000) {
            if (year === nowYear) {
                appendTime = true;
                return resFuncs.time_md(month, _date);
            }
            else {
                appendTime = true;
                return resFuncs.time_ymd(year, month, _date);
            }
        }
        if (tick < 24 * 3600 * 1000) {
            if (_date !== nDate) {
                appendTime = true;
                return tt(tick < 0 ? EnumString.time_tomorrow : EnumString.time_yesterday);
            }
            if (withTime === true) {
                appendTime = true;
                return '';
            }
            return tt(EnumString.time_today);
        }
        if (year === nowYear) {
            return resFuncs.time_md(month, _date);
        }
        return resFuncs.time_ymd(year, month, _date);
    })();
    if (withTime === true && (appendTime === true || always === true)) {
        let hm = hour + ((minute < 10 ? ':0' : ':') + minute);
        return dPart + ' ' + hm;
    }
    return dPart;
}
export function EasyDate(props) {
    return _jsx(_Fragment, { children: renderDate(props.date, false) });
}
export function EasyTime(props) {
    let { date, always } = props;
    return _jsx(_Fragment, { children: renderDate(date, true, always) });
}
export const VDate = (props) => {
    let { date, hideTime, hideSameYear } = props;
    let year = date.getFullYear();
    let vTime;
    if (hideTime !== true) {
        vTime = _jsxs(_Fragment, { children: [date.getHours(), ":", String(100 + date.getMinutes()).substr(1, 2)] });
    }
    let vDate = _jsxs(_Fragment, { children: [date.getMonth() + 1, "-", date.getDate()] });
    if (hideSameYear === true && year === new Date().getFullYear()) {
    }
    else {
        vDate = _jsxs(_Fragment, { children: [year, "-", vDate] });
    }
    return _jsxs(_Fragment, { children: [vDate, " ", vTime] });
};
//# sourceMappingURL=EasyDate.js.map
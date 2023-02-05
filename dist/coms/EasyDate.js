"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VDate = exports.EasyTime = exports.EasyDate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var res_1 = require("../res");
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
    return res_1.resStrings[str];
}
function renderDate(vDate, withTime, always) {
    if (always === void 0) { always = false; }
    if (!vDate)
        return null;
    var date;
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
    var now = new Date();
    var tick, nDate, _date, month, year, nowYear;
    var d = date;
    tick = now.getTime() - d.getTime();
    var hour = d.getHours(), minute = d.getMinutes();
    nDate = now.getDate();
    _date = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear();
    nowYear = now.getFullYear();
    var appendTime = false;
    var dPart = (function () {
        if (tick < -24 * 3600 * 1000) {
            if (year === nowYear) {
                appendTime = true;
                return res_1.resFuncs.time_md(month, _date);
            }
            else {
                appendTime = true;
                return res_1.resFuncs.time_ymd(year, month, _date);
            }
        }
        if (tick < 24 * 3600 * 1000) {
            if (_date !== nDate) {
                appendTime = true;
                return tt(tick < 0 ? res_1.EnumString.time_tomorrow : res_1.EnumString.time_yesterday);
            }
            if (withTime === true) {
                appendTime = true;
                return '';
            }
            return tt(res_1.EnumString.time_today);
        }
        if (year === nowYear) {
            return res_1.resFuncs.time_md(month, _date);
        }
        return res_1.resFuncs.time_ymd(year, month, _date);
    })();
    var hm = hour + ((minute < 10 ? ':0' : ':') + minute);
    /*
    if (tick < -24*3600*1000) {
        if (year === nowYear)
            return tt('md')(month, _date) + ' ' + hm;
        else
            return tt('ymd')(year, month, _date) + ' ' + hm;
    }
    if (always === true || tick < 24*3600*1000) {
        return _date!==nDate?
            tt(tick < 0? 'tomorrow' : 'yesterday') + ' ' + hm
            : withTime===true? hm : tt('today');
    }
    if (year === nowYear) {
        return tt('md')(month, _date);
    }
    return tt('ymd')(year, month, _date);
    */
    if (appendTime === true || always === true) {
        return dPart + ' ' + hm;
    }
    return dPart;
}
function EasyDate(props) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: renderDate(props.date, false) }, void 0);
}
exports.EasyDate = EasyDate;
function EasyTime(props) {
    var date = props.date, always = props.always;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: renderDate(date, true, always) }, void 0);
}
exports.EasyTime = EasyTime;
var VDate = function (props) {
    var date = props.date, hideTime = props.hideTime, hideSameYear = props.hideSameYear;
    var year = date.getFullYear();
    var vTime;
    if (hideTime !== true) {
        vTime = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [date.getHours(), ":", String(100 + date.getMinutes()).substr(1, 2)] }, void 0);
    }
    var vDate = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [date.getMonth() + 1, "-", date.getDate()] }, void 0);
    if (hideSameYear === true && year === new Date().getFullYear()) {
    }
    else {
        vDate = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [year, "-", vDate] }, void 0);
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [vDate, " ", vTime] }, void 0);
};
exports.VDate = VDate;
//# sourceMappingURL=EasyDate.js.map
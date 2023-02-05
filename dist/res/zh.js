"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.zh = void 0;
var defs_1 = require("./defs");
exports.zh = {
    strings: (_a = {},
        _a[defs_1.EnumString.rule_required] = '请填内容',
        _a[defs_1.EnumString.rule_mustBeInteger] = '必须是整数',
        _a[defs_1.EnumString.rule_mustBeDecimal] = '必须是数字',
        _a[defs_1.EnumString.rule_belowMin] = '最小值',
        _a[defs_1.EnumString.rule_overMax] = '最大值',
        _a[defs_1.EnumString.placeholder_pick] = '请点击选择',
        _a[defs_1.EnumString.placeholder_select] = '请点击选择',
        _a[defs_1.EnumString.string_submit] = '提交',
        _a[defs_1.EnumString.time_yesterday] = '昨天',
        _a[defs_1.EnumString.time_today] = '今天',
        _a[defs_1.EnumString.time_tomorrow] = '明天',
        _a),
    funcs: {
        time_md: function (month, date) { return "".concat(month, "-").concat(date); },
        time_ymd: function (year, month, date) { return "".concat(year, "-").concat(month, "-").concat(date); },
    }
};
//# sourceMappingURL=zh.js.map
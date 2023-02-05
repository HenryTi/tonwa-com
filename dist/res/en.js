"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.en = void 0;
var defs_1 = require("./defs");
exports.en = {
    strings: (_a = {},
        _a[defs_1.EnumString.rule_required] = 'Is required',
        _a[defs_1.EnumString.rule_mustBeInteger] = 'Must be integer',
        _a[defs_1.EnumString.rule_mustBeDecimal] = 'Must be number',
        _a[defs_1.EnumString.rule_belowMin] = 'Min is ',
        _a[defs_1.EnumString.rule_overMax] = 'Max is ',
        _a[defs_1.EnumString.placeholder_pick] = 'Click to pick',
        _a[defs_1.EnumString.placeholder_select] = 'Click to select',
        _a[defs_1.EnumString.string_submit] = 'Submit',
        _a[defs_1.EnumString.time_yesterday] = 'Yday',
        _a[defs_1.EnumString.time_today] = 'Today',
        _a[defs_1.EnumString.time_tomorrow] = 'Tmw',
        _a),
    funcs: {
        time_md: function (month, date) { return "".concat(month, "-").concat(date); },
        time_ymd: function (year, month, date) { return "".concat(year, "-").concat(month, "-").concat(date); },
    }
};
//# sourceMappingURL=en.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleIsRequired = exports.checkRule = void 0;
var res_1 = require("../res");
function checkRule(val, rule) {
    if (!rule)
        return;
    var ret = [];
    function addErr(rule) {
        var err = rule(val);
        if (err) {
            if (Array.isArray(err) === true)
                ret.push.apply(ret, err);
            else
                ret.push(err);
        }
    }
    if (Array.isArray(rule) === true) {
        for (var _i = 0, _a = rule; _i < _a.length; _i++) {
            var r = _a[_i];
            addErr(r);
        }
    }
    else {
        addErr(rule);
    }
    if (ret.length > 0)
        return ret;
    return undefined;
}
exports.checkRule = checkRule;
function ruleIsRequired(val) {
    var s = val.trim();
    if (!s) {
        return res_1.resStrings[res_1.EnumString.rule_required];
    }
}
exports.ruleIsRequired = ruleIsRequired;
//# sourceMappingURL=Rule.js.map
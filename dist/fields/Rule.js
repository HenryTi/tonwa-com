import { EnumString, resStrings } from "../res";
export function checkRule(val, rule) {
    if (!rule)
        return;
    let ret = [];
    function addErr(rule) {
        let err = rule(val);
        if (err) {
            if (Array.isArray(err) === true)
                ret.push(...err);
            else
                ret.push(err);
        }
    }
    if (Array.isArray(rule) === true) {
        for (let r of rule) {
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
export function ruleIsRequired(val) {
    let s = val.trim();
    if (!s) {
        return resStrings[EnumString.rule_required];
    }
}
//# sourceMappingURL=Rule.js.map
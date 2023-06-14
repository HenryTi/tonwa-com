import { jsx as _jsx } from "react/jsx-runtime";
import { Band } from '../band';
import { EnumString, resStrings } from '../res';
import { CharInput } from "./CharInput";
function appendRule(rules, ...ruleArr) {
    let ret = [...ruleArr];
    if (rules) {
        ret.push(...Array.isArray(rules) === true ? rules : [rules]);
    }
    return ret;
}
function isValidNumber(val, excludeChars) {
    val = val.trim();
    if (val.length === 0)
        return;
    let r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    if (val.indexOf('+') > 0 || val.indexOf('-') > 0)
        return false;
    let sr = String(r);
    let len = excludeChars.length;
    for (let i = 0; i < len; i++) {
        let ec = excludeChars[i];
        if (sr.indexOf(ec) >= 0)
            return false;
    }
    return true;
}
function belowMin(val, min) {
    if (min === undefined || min === null)
        return false;
    let r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    return r < min;
}
function overMax(val, max) {
    if (max === undefined || max === null)
        return false;
    let r = Number.parseFloat(val);
    if (isNaN(r) === true)
        return false;
    return r > max;
}
const intChars = '01234567890-+';
const decChars = intChars + '.';
function NumberInput(props) {
    let { placeholder, maxLength, rule, min, max, chars, excludeChars } = props;
    function isValidKey(key) {
        return chars.indexOf(key) >= 0;
    }
    function mustBeDecimal(val) {
        if (isValidNumber(val, excludeChars) === false) {
            return resStrings[EnumString.rule_mustBeDecimal];
        }
    }
    function ruleMin(val) {
        if (belowMin(val, min) === true) {
            return resStrings[EnumString.rule_belowMin] + min;
        }
    }
    function ruleMax(val) {
        if (overMax(val, max) === true) {
            return resStrings[EnumString.rule_overMax] + max;
        }
    }
    return _jsx(CharInput, { placeholder: placeholder, maxLength: maxLength, isValidKey: isValidKey, rule: appendRule(rule, mustBeDecimal, ruleMin, ruleMax), ...props });
}
export function Decimal(props) {
    return _jsx(NumberInput, { ...props, chars: decChars, excludeChars: "e" });
}
export function BandDecimal(props) {
    return _jsx(Band, { ...props, children: _jsx(Decimal, { ...props }) });
}
export function Int(props) {
    return _jsx(NumberInput, { ...props, chars: intChars, excludeChars: ".e" });
}
export function BandInt(props) {
    return _jsx(Band, { ...props, children: _jsx(Int, { ...props }) });
}
//# sourceMappingURL=Number.js.map
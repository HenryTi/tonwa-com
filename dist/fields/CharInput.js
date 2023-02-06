import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useBand, useBandContainer } from '../band';
import { checkRule } from './Rule';
import { useAtomValue } from "jotai";
class CharFieldItem {
    name;
    input;
    initValue;
    constructor(name, input, initValue) {
        this.name = name;
        this.input = input;
        this.initValue = initValue;
    }
    reset() {
        if (!this.input)
            return;
        this.input.value = this.initValue ?? '';
    }
}
export function CharInput(props) {
    let bandContainer = useBandContainer();
    let { name } = props;
    let initValue = bandContainer?.props.values?.[name];
    return _jsx(CharInputBase, { ...props, initValue: initValue }, void 0);
}
export function CharInputBase({ name, className, readOnly, placeholder, maxLength, rule, isValidKey, initValue, type, disabled }) {
    let input = useRef();
    let [hasError, setHasError] = useState(false);
    let band = useBand();
    let bandContainer = useBandContainer();
    let { props, fields, fieldStates } = bandContainer;
    let fieldState = useAtomValue(fieldStates[name]);
    readOnly = readOnly ?? (fieldState?.readOnly) ?? props.readOnly ?? false;
    useEffect(() => {
        if (!band)
            return;
        let { fields: bandFields } = band;
        bandFields[name] = true;
        let { props, fieldStates } = bandContainer;
        fields[name] = new CharFieldItem(name, input.current, props.values?.[name]);
        Object.assign(fieldStates[name], { readOnly, disabled });
    }, [band, bandContainer, name, fields, disabled, readOnly]);
    let cn = className ?? props.stringClassName ?? bandContainer.defaultStringClassName ?? '';
    if (hasError === true)
        cn += ' is-invalid';
    if (readOnly === true) {
        return _jsx("div", { className: cn + ' bg-light text-muted', children: initValue ?? bandContainer.defaultNone }, void 0);
    }
    let onFocus = () => {
        bandContainer.clearError(name);
        setHasError(false);
    };
    let onBlur = () => {
        let err = checkRule(input.current.value, rule);
        bandContainer.setError(name, err);
        let has = !(err === undefined);
        setHasError(has);
    };
    let onChange = (evt) => {
        bandContainer.setValue(name, evt.currentTarget.value);
    };
    let onBeforeInput = (evt) => {
        if (!isValidKey)
            return true;
        if (isValidKey(evt.data) === false) {
            evt.preventDefault();
            return false;
        }
    };
    return _jsx("input", { ref: input, name: name, type: type ?? 'text', className: cn, disabled: fieldState?.disabled, readOnly: readOnly, onFocus: onFocus, onBlur: onBlur, onBeforeInput: onBeforeInput, onChange: onChange, placeholder: placeholder, maxLength: maxLength, defaultValue: initValue }, void 0);
}
//# sourceMappingURL=CharInput.js.map
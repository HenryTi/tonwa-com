import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useBand, Band, useBandContainer } from '../band';
import { checkRule } from './Rule';
class TextFieldItem {
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
export function TextArea({ name, className, readOnly, placeholder, maxLength, rule, rows }) {
    let input = useRef();
    let band = useBand();
    let bandContainer = useBandContainer();
    useEffect(() => {
        if (band)
            band.fields[name] = true;
        let { fields, props } = bandContainer;
        fields[name] = new TextFieldItem(name, input.current, props.values?.[name]);
    }, [band, bandContainer, name]);
    let { props } = bandContainer;
    readOnly = readOnly ?? props.readOnly ?? false;
    let cn = className ?? props.stringClassName ?? bandContainer.defaultStringClassName;
    let initValue = props.values?.[name];
    if (readOnly === true) {
        return _jsx("div", { className: cn, children: initValue ?? bandContainer.defaultNone });
    }
    let onFocus = () => {
        bandContainer.clearError(name);
    };
    let onBlur = () => {
        let err = checkRule(input.current.value, rule);
        bandContainer.setError(name, err);
    };
    let onChange = (evt) => {
        bandContainer.setValue(name, evt.currentTarget.value);
    };
    return _jsx("textarea", { ref: input, name: name, className: cn, readOnly: readOnly, onFocus: onFocus, onBlur: onBlur, onChange: onChange, placeholder: placeholder, maxLength: maxLength, rows: rows ?? 4, defaultValue: initValue });
}
export function BandTextArea(props) {
    return _jsx(Band, { ...props, children: _jsx(TextArea, { ...props }) });
}
//# sourceMappingURL=TextArea.js.map
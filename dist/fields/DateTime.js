import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Band, useBand, useBandContainer } from '../band';
import { checkRule } from "./Rule";
class DTFieldItem {
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
        if (!this.initValue) {
            this.input.value = undefined;
        }
        else {
            this.input.value = this.initValue;
        }
    }
}
function Picker(props) {
    let input = useRef();
    let band = useBand();
    let bandContainer = useBandContainer();
    let [hasError, setHasError] = useState(false);
    useEffect(() => {
        let { fields } = bandContainer;
        let { name } = props;
        let fieldItem = new DTFieldItem(name, input.current, bandContainer.props.values?.[name]);
        if (band) {
            band.fields[name] = true;
        }
        fields[name] = fieldItem;
    }, [band, bandContainer, input, props]);
    let { name, className, readOnly, type, rule } = props;
    let { props: formProps } = bandContainer;
    readOnly = readOnly ?? formProps.readOnly;
    let initValue = bandContainer.props.values?.[name];
    let cn = className ?? formProps.stringClassName ?? bandContainer.defaultStringClassName ?? '';
    if (hasError === true)
        cn += ' is-invalid';
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
    function onChange(evt) {
        let val = evt.currentTarget.value;
        bandContainer.setValue(name, val);
    }
    if (readOnly === true) {
        return _jsx("div", { className: className ?? bandContainer.defaultStringClassName, children: initValue ?? bandContainer.defaultNone });
    }
    return _jsx("input", { ref: input, type: type, defaultValue: bandContainer.props.values?.[name], className: cn, onBlur: onBlur, onFocus: onFocus, onChange: onChange });
}
export function DatePicker(props) {
    return _jsx(Picker, { ...props, type: "date" });
}
export function TimePicker(props) {
    return _jsx(Picker, { ...props, type: "time" });
}
export function BandDatePicker(props) {
    return _jsx(Band, { ...props, children: _jsx(DatePicker, { ...props }) });
}
export function BandTimePicker(props) {
    return _jsx(Band, { ...props, children: _jsx(TimePicker, { ...props }) });
}
//# sourceMappingURL=DateTime.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Band, useBand, useBandContainer } from '../band';
class RangeFieldItem {
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
            this.input.value = String(this.initValue);
        }
    }
}
export function Range(props) {
    let input = useRef();
    let [value, setValue] = useState();
    let band = useBand();
    let bandContainer = useBandContainer();
    useEffect(() => {
        let { name } = props;
        let fieldItem = new RangeFieldItem(name, input.current, bandContainer.props.values?.[name]);
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = fieldItem;
    }, [band, bandContainer, input, props]);
    let { props: formProps } = bandContainer;
    let { name, className, readOnly, min, max, step } = props;
    readOnly = readOnly ?? formProps.readOnly;
    let initValue = bandContainer.props.values?.[name];
    function onChange(evt) {
        let val = evt.currentTarget.value;
        let n = Number(val);
        if (Number.isNaN(n) === false) {
            bandContainer.setValue(name, n);
            setValue(n);
        }
    }
    if (readOnly === true) {
        return _jsx("div", { className: className ?? bandContainer.defaultStringClassName, children: initValue ?? bandContainer.defaultNone }, void 0);
    }
    return _jsxs("div", { className: 'd-flex ' + (className ?? bandContainer.defaultStringClassName), children: [_jsx("div", { className: "me-2 w-min-3c text-center", children: value ?? initValue }, void 0), _jsxs("div", { className: "flex-grow-1", children: [_jsx("input", { ref: input, type: "range", defaultValue: bandContainer.props.values?.[name], className: className ?? bandContainer.defaultRangeClassName, onChange: onChange, min: min, max: max, step: step }, void 0), _jsxs("div", { className: "d-flex small text-muted px-1", children: [_jsx("div", { className: "me-3", children: min }, void 0), _jsx("div", { className: "flex-grow-1" }, void 0), _jsx("div", { className: "ms-3", children: max }, void 0)] }, void 0)] }, void 0)] }, void 0);
}
export function BandRange(props) {
    return _jsx(Band, { ...props, children: _jsx(Range, { ...props }, void 0) }, void 0);
}
//# sourceMappingURL=Range.js.map
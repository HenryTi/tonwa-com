import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Band, useBand, useBandContainer } from '../band';
class RadioFieldItem {
    name;
    inputs;
    initValue;
    constructor(name, initValue) {
        this.name = name;
        this.inputs = [];
        if (initValue) {
            this.initValue = String(initValue);
        }
    }
    addInput(input) {
        this.inputs.push(input);
    }
    reset() {
        for (let input of this.inputs) {
            if (!input)
                continue;
            input.checked = input.value === this.initValue;
        }
    }
}
function RadioInput({ name, className, readOnly, item, itemIndex, defaultChecked }) {
    let { label, value } = item;
    let input = useRef();
    let band = useBand();
    let bandContainer = useBandContainer();
    useEffect(() => {
        let fieldItem = bandContainer.fields[name];
        fieldItem.addInput(input.current);
    }, [band, bandContainer, name]);
    let { props } = bandContainer;
    function onChange(evt) {
        let t = evt.currentTarget;
        if (t.checked === true) {
            bandContainer.setValue(name, value);
        }
    }
    readOnly = readOnly ?? props.readOnly ?? false;
    let radioId = `_${name}_${itemIndex}_${Date.now()}`;
    return _jsxs("label", { className: "form-check form-check-inline py-1 form-check-label", children: [_jsx("input", { ref: input, name: name, type: "radio", id: radioId, className: className ?? props.checkClassName ?? bandContainer.defaultCheckClassName, disabled: readOnly, onChange: onChange, value: value, defaultChecked: defaultChecked }, void 0), label] }, void 0);
    // <label className="form-check-label" htmlFor={radioId}>{label}</label> &nbsp;
}
export function Radio(props) {
    let band = useBand();
    let bandContainer = useBandContainer();
    let { name, options } = props;
    let val = bandContainer.getValue(name);
    let { current: fieldItem } = useRef(new RadioFieldItem(name, bandContainer.props.values?.[name]));
    if (band)
        band.fields[name] = true;
    bandContainer.fields[name] = fieldItem;
    return _jsx("div", { className: "py-1", children: options.map((v, index) => _jsx(RadioInput, { ...props, item: v, itemIndex: index, defaultChecked: v.value === val }, index)) }, void 0);
}
export function BandRadio(props) {
    return _jsx(Band, { ...props, children: _jsx(Radio, { ...props }, void 0) }, void 0);
}
//# sourceMappingURL=Radio.js.map
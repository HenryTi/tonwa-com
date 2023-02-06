import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Band, BandContentType, useBand, useBandContainer } from '../band';
class CheckFieldItem {
    name;
    input;
    indeterminate;
    initChecked;
    constructor(name, input, indeterminate, initChecked) {
        this.name = name;
        this.input = input;
        this.indeterminate = indeterminate;
        this.initChecked = initChecked;
    }
    reset() {
        if (!this.input)
            return;
        this.input.indeterminate = this.indeterminate;
        this.input.checked = this.initChecked;
    }
}
function CheckInput({ name, id, readOnly, indeterminate, checkedValue, uncheckedValue }) {
    let input = useRef();
    let band = useBand();
    let bandContainer = useBandContainer();
    let { props } = bandContainer;
    let val = bandContainer.getValue(name);
    let initChecked = val === (checkedValue ?? true);
    let onClick;
    let checked;
    if (bandContainer.isDetail === true) {
        checked = initChecked;
        initChecked = undefined;
        onClick = (evt) => {
            evt.preventDefault();
            return false;
        };
    }
    useEffect(() => {
        if (indeterminate === true) {
            input.current.indeterminate = true;
        }
        if (band) {
            let { fields: bandFields } = band;
            bandFields[name] = true;
        }
        let { props, fields } = bandContainer;
        let initChecked = props.values?.[name] === (checkedValue ?? true);
        fields[name] = new CheckFieldItem(name, input.current, indeterminate, initChecked);
    }, [band, bandContainer, name, indeterminate, checkedValue]);
    function onChange(evt) {
        let val;
        let t = evt.currentTarget;
        if (t.indeterminate === true)
            val = undefined;
        else {
            val = t.checked ? (checkedValue ?? true) : (uncheckedValue ?? false);
        }
        bandContainer.setValue(name, val);
    }
    return _jsx("input", { ref: input, name: name, type: "checkbox", id: id, className: props.checkClassName ?? bandContainer.defaultCheckClassName, disabled: readOnly ?? props.readOnly ?? false, onChange: onChange, onClick: onClick, checked: checked, defaultChecked: initChecked }, void 0);
}
export function Check(props) {
    let { label } = props;
    let id = `_${props.name}_${Date.now()}`;
    return _jsxs("div", { className: props.className ?? 'form-check', children: [_jsx(CheckInput, { ...props, id: id }, void 0), _jsx("label", { className: "form-check-label", htmlFor: id, children: label }, void 0)] }, void 0);
}
export function BandCheck(props) {
    let { label } = props;
    return _jsx(Band, { ...props, label: undefined, contentType: BandContentType.check, children: _jsx(Check, { ...props, label: label }, void 0) }, void 0);
}
//# sourceMappingURL=Check.js.map
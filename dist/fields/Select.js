import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Band, useBand, useBandContainer } from '../band';
import { EnumString, resStrings } from "../res";
class SelectFieldItem {
    name;
    select;
    initIndex;
    constructor(name, select, initIndex) {
        this.name = name;
        this.select = select;
        this.initIndex = initIndex;
    }
    reset() {
        if (!this.select)
            return;
        this.select.selectedIndex = this.initIndex;
    }
}
export function Select(props) {
    let select = useRef();
    let band = useBand();
    let bandContainer = useBandContainer();
    useEffect(() => {
        let { props: formProps } = bandContainer;
        let { name, options } = props;
        let initValue = formProps.values?.[name];
        let initIndex = initValue ? options.findIndex(v => v.value === initValue) : 0;
        let fieldItem = new SelectFieldItem(name, select.current, initIndex);
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = fieldItem;
    }, [band, bandContainer, props]);
    let { props: formProps } = bandContainer;
    let { name, options, placeholder, className, readOnly } = props;
    readOnly = readOnly ?? formProps.readOnly;
    let initValue = bandContainer.props.values?.[name];
    function onChange(evt) {
        bandContainer.setValue(name, evt.currentTarget.value);
    }
    if (readOnly === true) {
        return _jsx("div", { className: className ?? bandContainer.defaultStringClassName, children: initValue ?? bandContainer.defaultNone }, void 0);
    }
    return _jsxs("select", { ref: select, defaultValue: bandContainer.props.values?.[name], className: className ?? bandContainer.defaultSelectClassName, onChange: onChange, children: [!initValue &&
                _jsx("option", { value: undefined, children: placeholder ?? resStrings[EnumString.placeholder_select] }, void 0), options.map((v, index) => _jsx("option", { value: v.value, children: v.label }, index))] }, void 0);
}
export function BandSelect(props) {
    return _jsx(Band, { ...props, children: _jsx(Select, { ...props }, void 0) }, void 0);
}
//# sourceMappingURL=Select.js.map
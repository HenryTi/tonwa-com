import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FA } from "../coms";
import { Band, useBand, useBandContainer } from '../band';
import { EnumString, resStrings } from "../res";
import { setAtomValue } from "../tools";
class PickFieldItem {
    name;
    constructor(name) {
        this.name = name;
    }
    reset() {
    }
}
export function Pick(props) {
    let band = useBand();
    let bandContainer = useBandContainer();
    let [value, setValue] = useState();
    useEffect(() => {
        let { name } = props;
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = new PickFieldItem(name /*, val*/);
    }, [band, bandContainer, props]);
    let { props: formProps } = bandContainer;
    let { name, className, onPick, placeholder, readOnly, Value } = props;
    readOnly = readOnly ?? formProps.readOnly;
    value = value ?? bandContainer.props.values?.[name];
    let cn = 'd-flex ';
    let vRight;
    let onClick;
    let vValue;
    if (readOnly !== true) {
        cn += ' cursor-pointer ';
        vRight = _jsx("div", { children: _jsx(FA, { name: "angle-right" }) });
        onClick = async function () {
            let ret = await onPick(value);
            setAtomValue(bandContainer.getValue(name), ret);
            setValue(ret);
        };
        if (value === null) {
            vValue = null;
        }
        else if (value !== undefined) {
            vValue = Value === undefined ? JSON.stringify(value) : _jsx(Value, { value: value });
        }
        else {
            vValue = placeholder ?? resStrings[EnumString.placeholder_pick];
        }
    }
    else {
        vValue = value ?? bandContainer.defaultNone;
    }
    cn += (className ?? formProps.pickClassName ?? bandContainer.defaultPickClassName);
    return _jsxs("div", { className: cn, onClick: onClick, children: [_jsx("div", { className: "flex-grow-1", children: vValue }), vRight] });
}
export function BandPick(props) {
    return _jsx(Band, { ...props, children: _jsx(Pick, { ...props }) });
}
//# sourceMappingURL=Pick.js.map
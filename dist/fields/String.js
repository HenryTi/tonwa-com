import { jsx as _jsx } from "react/jsx-runtime";
import { Band } from '../band';
import { CharInput } from "./CharInput";
export function String(props) {
    let { placeholder, maxLength } = props;
    return _jsx(CharInput, { placeholder: placeholder, maxLength: maxLength, ...props }, void 0);
}
export function BandString(props) {
    return _jsx(Band, { ...props, children: _jsx(String, { ...props }, void 0) }, void 0);
}
//# sourceMappingURL=String.js.map
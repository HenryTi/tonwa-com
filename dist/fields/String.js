import { jsx as _jsx } from "react/jsx-runtime";
import { Band } from '../band';
import { CharInput } from "./CharInput";
export function String(props) {
    let { placeholder, maxLength } = props;
    return _jsx(CharInput, { placeholder: placeholder, maxLength: maxLength, ...props });
}
export function BandString(props) {
    return _jsx(Band, { ...props, children: _jsx(String, { ...props }) });
}
//# sourceMappingURL=String.js.map
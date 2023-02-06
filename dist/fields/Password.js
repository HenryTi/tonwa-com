import { jsx as _jsx } from "react/jsx-runtime";
import { Band } from '../band';
import { CharInput } from "./CharInput";
export function Password(props) {
    let { placeholder, maxLength } = props;
    return _jsx(CharInput, { placeholder: placeholder, maxLength: maxLength, ...props, type: "password" }, void 0);
}
export function BandPassword(props) {
    return _jsx(Band, { ...props, children: _jsx(Password, { ...props }, void 0) }, void 0);
}
//# sourceMappingURL=Password.js.map
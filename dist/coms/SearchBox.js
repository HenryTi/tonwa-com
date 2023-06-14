import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { env } from '../tools';
import { ComAsync } from './ComAsync';
export function SearchBox(props) {
    let { className, inputClassName, onFocus, label, placeholder, buttonText, maxLength, size } = props;
    const [isWaiting, setIsWaiting] = React.useState(false);
    let input = React.useRef(null);
    let button = React.useRef(null);
    let key = null;
    function onChange(evt) {
        key = evt.target.value;
        if (key !== undefined) {
            key = key.trim();
            if (key === '')
                key = undefined;
        }
        if (props.allowEmptySearch === true) {
        }
        else {
            button.current.disabled = key === undefined || key.length === 0;
        }
    }
    async function onSubmit(evt) {
        evt.preventDefault();
        if (key === null)
            key = props.initKey || '';
        if (props.allowEmptySearch !== true) {
            if (!key)
                return;
            if (input.current)
                input.current.disabled = true;
            if (button.current)
                button.current.disabled = true;
        }
        setIsWaiting(true);
        await props.onSearch(key);
        if (input.current)
            input.current.disabled = false;
        if (button.current)
            button.current.disabled = false;
        setIsWaiting(false);
    }
    let inputSize;
    switch (size) {
        default:
        case 'sm':
            inputSize = 'input-group-sm';
            break;
        case 'md':
            inputSize = 'input-group-md';
            break;
        case 'lg':
            inputSize = 'input-group-lg';
            break;
    }
    let autoComplete;
    if (env.isMobile === true)
        autoComplete = 'off';
    return _jsx("form", { className: className, onSubmit: onSubmit, autoComplete: autoComplete, children: _jsxs("div", { className: "input-group " + inputSize, children: [label && _jsx("div", { className: "input-group-addon align-self-center me-2", children: label }), _jsx("input", { ref: input, onChange: onChange, type: "text", name: "key", onFocus: onFocus, className: 'form-control ' + (inputClassName ?? 'border-primary'), placeholder: placeholder, defaultValue: props.initKey, maxLength: maxLength }), _jsx("div", { className: "input-group-append", children: _jsxs("button", { ref: button, className: "btn btn-primary position-relative", type: "submit", disabled: props.allowEmptySearch !== true, children: [_jsx("i", { className: 'fa fa-search' }), buttonText, _jsx(ComAsync, { isWaiting: isWaiting })] }) })] }) });
}
//# sourceMappingURL=SearchBox.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { env } from '../tools';
export function SearchBox(props) {
    let { className, inputClassName, onFocus, label, placeholder, buttonText, maxLength, size } = props;
    let input;
    let button;
    let key = null;
    function onChange(evt) {
        key = evt.target.value;
        if (key !== undefined) {
            key = key.trim();
            if (key === '')
                key = undefined;
        }
        console.log('key = ' + key);
        if (props.allowEmptySearch === true) {
        }
        else {
            button.disabled = key === undefined || key.length === 0;
        }
    }
    async function onSubmit(evt) {
        evt.preventDefault();
        if (key === null)
            key = props.initKey || '';
        if (props.allowEmptySearch !== true) {
            if (!key)
                return;
            if (input)
                input.disabled = true;
            if (button)
                button.disabled = true;
        }
        await props.onSearch(key);
        if (input)
            input.disabled = false;
        if (button)
            button.disabled = false;
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
    return _jsx("form", { className: className, onSubmit: onSubmit, autoComplete: autoComplete, children: _jsxs("div", { className: "input-group " + inputSize, children: [label && _jsx("div", { className: "input-group-addon align-self-center me-2", children: label }, void 0), _jsx("input", { ref: v => input = v, onChange: onChange, type: "text", name: "key", onFocus: onFocus, className: 'form-control ' + (inputClassName ?? 'border-primary'), placeholder: placeholder, defaultValue: props.initKey, maxLength: maxLength }, void 0), _jsx("div", { className: "input-group-append", children: _jsxs("button", { ref: v => button = v, className: "btn btn-primary", type: "submit", disabled: props.allowEmptySearch !== true, children: [_jsx("i", { className: 'fa fa-search' }, void 0), _jsx("i", { className: "fa" }, void 0), buttonText] }, void 0) }, void 0)] }, void 0) }, void 0);
}
//# sourceMappingURL=SearchBox.js.map
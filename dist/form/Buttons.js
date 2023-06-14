import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useBandContainer } from '../band';
import { ButtonAsync, FA } from '../coms';
import { EnumString, resStrings } from '../res';
import { checkRule } from '../fields';
import { useForm } from './FormContext';
import { atom, useAtom, useAtomValue } from 'jotai';
class SubmitItem {
    name;
    constructor(name, disabled) {
        this.name = name;
    }
    reset() {
    }
}
//const submitProxy = proxy({ readOnly: false, disabled: false });
export function Submit({ name, className, children, onSubmit, disabled }) {
    let form = useForm();
    let [errorResponse, setErrorResponse] = useAtom(form.errorResponse);
    let bandContainer = useBandContainer();
    let { fields, fieldStates } = bandContainer;
    let { current: atomState } = useRef(atom({ readOnly: false, disabled }));
    let fieldState = useAtomValue(name ? fieldStates[name] : atomState);
    className = className ?? 'btn btn-primary';
    children = children ?? _jsxs(_Fragment, { children: [_jsx(FA, { name: 'share-square-o' }), " ", resStrings[EnumString.string_submit]] });
    useEffect(() => {
        if (name) {
            fields[name] = new SubmitItem(name, disabled);
            Object.assign(fieldStates[name], { readOnly: undefined, disabled });
        }
    }, [fields, fieldStates, name, disabled]);
    async function onClick(evt) {
        evt.preventDefault();
        let { props } = form;
        let { rule } = props;
        let values = form.getValues();
        let errors = [];
        for (let i in values) {
            checkRule(values[i], rule);
        }
        if (errors.length > 0) {
            setErrorResponse({
                errors,
                hasError: true
            });
        }
        else {
            let ret = await onSubmit(form.getValues());
            if (ret) {
                switch (typeof ret) {
                    default:
                        if (Array.isArray(ret) === true) {
                            for (let item of ret) {
                                if (!item) {
                                    form.clearAllErrors();
                                }
                                else if (Array.isArray(item) === true) {
                                    let [name, err] = item;
                                    form.setError(name, err);
                                }
                                else {
                                    form.setError(undefined, ret);
                                }
                            }
                        }
                        break;
                    case 'string':
                        form.setError(undefined, ret);
                        break;
                }
            }
            else {
                form.clearAllErrors();
            }
        }
    }
    return _jsx(ButtonAsync, { onClick: onClick, disabled: (fieldState.disabled ?? false) || errorResponse.hasError, className: className, children: children });
}
export function Clear({ className, children }) {
    let form = useForm();
    function onClick(evt) {
        evt.preventDefault();
        form.clearValues();
    }
    return _jsx("button", { onClick: onClick, className: className, children: children });
}
export function ClearErrorsButton({ className, children }) {
    let form = useForm();
    let { hasError } = useAtomValue(form.errorResponse);
    function onClick(evt) {
        evt.preventDefault();
        form.clearAllErrors();
    }
    return _jsx("button", { onClick: onClick, disabled: !hasError, className: className, children: children });
}
//# sourceMappingURL=Buttons.js.map
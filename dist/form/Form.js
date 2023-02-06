import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { VBandContainerContext, Band, BandFieldErrors, BandMemos } from '../band';
import { FormContext, VFormContext, useForm } from './FormContext';
import { BandFieldError } from '../band';
import { useAtomValue } from 'jotai';
function DefaultBandTemplate(props) {
    let { label, labelSize, children, errors, memos, contentContainerClassName } = props;
    labelSize = labelSize ?? 2;
    let vLabel;
    let cnContent = `col-sm-${12 - labelSize} ${contentContainerClassName ?? ''}`;
    if (label) {
        vLabel = _jsx("label", { className: `col-sm-${labelSize} col-form-label text-sm-end`, children: _jsx("b", { children: label }, void 0) }, void 0);
    }
    else {
        cnContent += ' offset-sm-2';
    }
    return _jsxs("div", { className: "mb-3 row bg-white", children: [vLabel, _jsxs("div", { className: cnContent, children: [children, _jsx(BandFieldErrors, { errors: errors }, void 0), _jsx(BandMemos, { memos: memos }, void 0)] }, void 0)] }, void 0);
}
export function Form(props) {
    let { className, children, BandTemplate } = props;
    BandTemplate = BandTemplate ?? DefaultBandTemplate;
    let { current: formContext } = useRef(new FormContext({ ...props, BandTemplate }));
    function onSubmit(evt) {
        evt.preventDefault();
    }
    return _jsx(VFormContext.Provider, { value: formContext, children: _jsx(VBandContainerContext.Provider, { value: formContext, children: _jsx("form", { className: className, onSubmit: onSubmit, children: children }, void 0) }, void 0) }, void 0);
}
export function FormErrors() {
    let form = useForm();
    let { errors } = useAtomValue(form.errorResponse);
    if (!errors)
        return null;
    return _jsx(_Fragment, { children: errors.map((v, index) => _jsx(BandFieldError, { error: v }, index)) }, void 0);
}
export function BandFormErrors() {
    let form = useForm();
    let { errors } = useAtomValue(form.errorResponse);
    if (!errors)
        return null;
    return _jsx(Band, { children: errors.map((v, index) => _jsx(BandFieldError, { error: v }, index)) }, void 0);
}
//# sourceMappingURL=Form.js.map
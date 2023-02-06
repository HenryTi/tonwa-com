import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useRef } from 'react';
import { BandContext, VBandContext } from './BandContext';
import { FA } from '../coms';
import { useBandContainer } from './BandContainer';
import { useAtomValue } from 'jotai';
export var BandContentType;
(function (BandContentType) {
    BandContentType[BandContentType["check"] = 0] = "check";
    BandContentType[BandContentType["com"] = 1] = "com";
})(BandContentType || (BandContentType = {}));
;
export function BandFieldError({ error }) {
    return _jsxs("div", { className: "px-2 py-1 small", children: [_jsx(FA, { name: "exclamation-circle", className: "me-2 text-danger" }, void 0), _jsx("span", { className: "text-info", children: error }, void 0)] }, void 0);
}
export function BandFieldErrors({ errors }) {
    if (!errors)
        return null;
    if (errors.length === 0)
        return null;
    let arr = [];
    for (let err of errors) {
        let { error } = err;
        let p = arr.findIndex(v => v === error);
        if (p < 0)
            arr.push(error);
    }
    return _jsx(_Fragment, { children: arr.map((v, index) => _jsx(BandFieldError, { error: v }, index)) }, void 0);
}
export function BandMemo({ memo }) {
    if (typeof (memo) === 'string') {
        return _jsxs("div", { className: "px-2 py-1 small text-muted", children: [_jsx(FA, { name: "caret-right", className: "me-2" }, void 0), memo] }, void 0);
    }
    return memo;
}
export function BandMemos({ memos }) {
    if (!memos)
        return null;
    return _jsx(_Fragment, { children: memos.map((v, index) => _jsx(BandMemo, { memo: v }, index)) }, void 0);
}
function buildMemosFromChildren(children) {
    let memos = [];
    function each(cs) {
        React.Children.forEach(cs, c => {
            if (!c)
                return;
            if (React.isValidElement(c) === false)
                return;
            let e = c;
            let { props } = e;
            if (props) {
                let { memo } = props;
                if (memo && typeof memo === 'string')
                    memos.push(memo);
                each(props.children);
            }
        });
    }
    each(children);
    if (memos.length === 0)
        return;
    return memos;
}
function buildDetailChildren(children) {
    let readOnly = true;
    function each(cs) {
        let ret = [];
        React.Children.forEach(cs, c => {
            if (c.type === React.Fragment) {
                debugger;
            }
            if (React.isValidElement(c) === false) {
                ret.push(c);
                return;
            }
            let e = c;
            let { props } = e;
            if (props) {
                let { key } = e;
                let { name, options } = props;
                if (!(props.readOnly === true))
                    readOnly = false;
                if (name) {
                    ret.push(_jsx(Value, { name: name, options: options }, key));
                    return;
                }
            }
            if (cs === c)
                return; // 这里应该不可能的，child 居然 = parent
            ret.push(React.createElement(e.type, props, ...each(e)));
            return;
        });
        return ret;
    }
    ;
    return [each(children), readOnly];
}
function Value({ name, options }) {
    let bandContainer = useBandContainer();
    let { defaultNone } = bandContainer;
    let val = bandContainer.getValue(name);
    if (options) {
        if (val) {
            let option = options.find(v => v.value === val);
            if (option) {
                val = option.label;
            }
        }
    }
    return _jsx("div", { className: 'py-2', children: val ?? defaultNone }, void 0);
}
export function Band(props) {
    let { label, labelSize, children, BandTemplate, sep, contentType, toEdit, rightIcon, contentContainerClassName } = props;
    let content = children;
    let bandContainer = useBandContainer();
    labelSize = bandContainer.props.labelSize;
    let memos = buildMemosFromChildren(children);
    let { current: band } = useRef(new BandContext(bandContainer, memos));
    let errors = useAtomValue(band.errors);
    if (!bandContainer) {
        return _jsxs("div", { children: ["Error: ", '<Band /> can only be in <Form />'] }, void 0);
    }
    BandTemplate = BandTemplate ?? bandContainer.BandTemplate;
    switch (contentType) {
        case BandContentType.com:
            break;
        default:
            if (bandContainer.isDetail === true) {
                switch (contentType) {
                    case BandContentType.check:
                        children = _jsx("div", { className: 'py-2', children: children }, void 0);
                        break;
                    default:
                        let [newChildren, readOnly] = buildDetailChildren(children);
                        children = _jsx(_Fragment, { children: newChildren }, void 0);
                        if (readOnly === true)
                            band.readOnly = true;
                        else if (bandContainer.readOnly === true) {
                            band.readOnly = true;
                        }
                        break;
                }
            }
            break;
    }
    return _jsx(VBandContext.Provider, { value: band, children: _jsx(BandTemplate, { label: label, labelSize: labelSize, errors: errors, memos: band.memos, content: content, sep: sep, contentType: contentType, toEdit: toEdit, rightIcon: rightIcon, contentContainerClassName: contentContainerClassName, children: children }, void 0) }, void 0);
}
export function BandCom(props) {
    return _jsx(Band, { ...props, contentType: BandContentType.com, children: props.children }, void 0);
}
//# sourceMappingURL=Band.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sep, Spinner } from "../coms";
export function List(props) {
    let [showLoading, setShowLoding] = useState(false);
    let navigate = useNavigate();
    let { items, className, itemKey, ItemView, onItemClick, onItemSelect, sep, none, loading } = props;
    className = className ?? '';
    useEffect(() => {
        // loading超过200ms，显示spinner
        setTimeout(() => {
            setShowLoding(true);
        }, 200);
    }, []);
    if (!items) {
        if (showLoading === false)
            return null;
        if (loading)
            return loading;
        return _jsx(Spinner, { className: "mx-3 my-2 text-primary" }, void 0);
    }
    let len = items.length;
    if (len === 0) {
        if (none)
            return none;
        return _jsx("div", { className: "mx-3 my-2 text-muted", children: "-" }, void 0);
    }
    ItemView = ItemView ?? DefaultItemView;
    let renderItem;
    function onCheckChange(item, evt) {
        onItemSelect(item, evt.currentTarget.checked);
    }
    let onItemNav;
    if (onItemClick) {
        onItemNav = async (item) => {
            let ret = await onItemClick(item);
            if (ret) {
                navigate(ret);
            }
        };
    }
    if (onItemSelect) {
        if (onItemNav) {
            renderItem = v => (_jsxs("div", { className: "d-flex", children: [_jsx("label", { className: "ps-3 pe-2 align-self-stretch d-flex align-items-center", children: _jsx("input", { type: "checkbox", className: "form-check-input", onChange: evt => onCheckChange(v, evt) }, void 0) }, void 0), _jsx("div", { className: "flex-grow-1 cursor-pointer", onClick: () => onItemNav(v), children: _jsx(ItemView, { value: v }, void 0) }, void 0)] }, void 0));
        }
        else {
            renderItem = v => (_jsxs("label", { className: "d-flex", children: [_jsx("input", { type: "checkbox", className: "form-check-input mx-3 align-self-center", onChange: evt => onCheckChange(v, evt) }, void 0), _jsx("div", { className: "flex-grow-1", children: _jsx(ItemView, { value: v }, void 0) }, void 0)] }, void 0));
        }
    }
    else {
        if (onItemNav) {
            className += ' tonwa-list-item';
        }
        renderItem = v => {
            let funcClick, cn;
            if (onItemNav) {
                funcClick = () => onItemNav(v);
                cn = 'tonwa-list-item cursor-pointer';
            }
            return _jsx("div", { onClick: funcClick, className: cn, children: _jsx(ItemView, { value: v }, void 0) }, void 0);
        };
    }
    sep = _jsx(Sep, { sep: sep }, void 0);
    let funcKey;
    switch (typeof itemKey) {
        default:
            funcKey = (item, index) => index;
            break;
        case 'string':
            funcKey = (item) => item[itemKey];
            break;
        case 'function':
            funcKey = itemKey;
            break;
    }
    return _jsx("ul", { className: 'm-0 p-0 ' + className, children: items.map((v, index) => {
            let key = funcKey(v, index);
            return _jsxs(React.Fragment, { children: [renderItem(v, index), index < len - 1 && sep] }, key);
        }) }, void 0);
}
function DefaultItemView(itemProps) {
    let { value } = itemProps;
    let cn = 'px-3 py-2';
    return _jsx("div", { className: cn, children: JSON.stringify(value) }, void 0);
}
//# sourceMappingURL=List.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
export function ButtonAsync(props) {
    const [isWaiting, setIsWaiting] = useState(false);
    let { children, onClick } = props;
    let isMounted = useRef(false);
    let newOnClick;
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    });
    if (onClick) {
        newOnClick = async (evt) => {
            setIsWaiting(true);
            try {
                await onClick(evt);
            }
            catch (err) {
                console.error(err);
                throw err;
            }
            finally {
                if (isMounted.current === true) {
                    setIsWaiting(false);
                }
            }
        };
    }
    if (isWaiting === true) {
        let { className } = props;
        className = (className ?? '') + ' position-relative';
        let style = {
            zIndex: 30001,
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        };
        return _jsxs("button", { ...props, disabled: true, className: className, children: [children, _jsx("div", { className: "d-flex position-absolute align-items-center justify-content-center", style: style, children: _jsx("i", { className: "fa fa-spinner fa-spin" }, void 0) }, void 0)] }, void 0);
    }
    else {
        return _jsx("button", { ...props, onClick: newOnClick, children: children }, void 0);
    }
}
//# sourceMappingURL=ButtonAsync.js.map
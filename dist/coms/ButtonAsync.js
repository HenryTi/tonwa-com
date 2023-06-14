import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ComAsync } from "./ComAsync";
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
        return _jsxs("button", { ...props, disabled: true, className: className, children: [children, _jsx(ComAsync, { isWaiting: true })] });
    }
    else {
        return _jsx("button", { ...props, onClick: newOnClick, children: children });
    }
}
export function ButtonSubmit({ className, isSubmiting, children, disabled }) {
    return _jsxs("button", { type: "submit", disabled: isSubmiting || (disabled ?? false), className: (className ?? '') + ' position-relative', children: [children, isSubmiting && _jsx(ComAsync, { isWaiting: true })] });
}
//# sourceMappingURL=ButtonAsync.js.map
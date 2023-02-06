import { useCallback } from "react";
export function useT(...t) {
    let callback = useCallback((str) => {
        for (let r of t) {
            let ret = r(str);
            if (ret)
                return ret;
        }
        return str;
    }, [t]);
    return callback;
}
//# sourceMappingURL=useT.js.map
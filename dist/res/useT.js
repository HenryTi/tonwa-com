import { useCallback } from "react";
export function useT(t, p) {
    let callback = useCallback((str) => {
        let ret = t(str);
        if (ret)
            return ret;
        return p?.(str) ?? str;
    }, [t]);
    return callback;
}
//# sourceMappingURL=useT.js.map
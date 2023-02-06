import { atom } from "jotai";
import React, { useContext } from "react";
import { getAtomValue, setAtomValue } from "../tools";
export class BandContext {
    container;
    errors = atom([]);
    memos;
    fields;
    readOnly = false;
    constructor(container, memos) {
        this.container = container;
        this.memos = memos;
        this.fields = {};
        container?.bands.push(this);
    }
    setError(name, error) {
        if (this.fields[name] === true) {
            let errors = getAtomValue(this.errors);
            if (error) {
                setAtomValue(this.errors, [...errors, ...error.map(v => ({ name, error: v }))]);
                return true;
            }
            return errors.length > 0;
        }
        return false;
    }
    clearError(name) {
        if (this.fields[name] === true) {
            setAtomValue(this.errors, []);
        }
    }
    clearAllErrors() {
        setAtomValue(this.errors, []);
    }
}
export const VBandContext = React.createContext(undefined);
export function useBand() {
    return useContext(VBandContext);
}
//# sourceMappingURL=BandContext.js.map
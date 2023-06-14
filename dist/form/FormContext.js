import { atom } from 'jotai';
import React, { useContext } from 'react';
import { setAtomValue } from '../tools';
import { BandContainerContext } from '../band';
export class FormContext extends BandContainerContext {
    errorResponse = atom({
        hasError: false,
        errors: undefined,
    });
    get isDetail() {
        return false;
    }
    setError(name, err) {
        if (!err)
            return;
        let errors;
        let hasError;
        if (Array.isArray(err) === false)
            err = [err];
        if (!name) {
            if (err && err.length > 0) {
                errors = [...err];
                hasError = true;
            }
        }
        else {
            hasError = super.setError(name, err);
        }
        setAtomValue(this.errorResponse, { hasError, errors });
        return hasError;
    }
    clearError(name) {
        super.clearError(name);
        setAtomValue(this.errorResponse, {
            hasError: false,
            errors: undefined,
        });
    }
    clearAllErrors() {
        super.clearAllErrors();
        setAtomValue(this.errorResponse, {
            hasError: false,
            errors: undefined,
        });
    }
    clearValues() {
        for (let i in this.valueAtoms) {
            this.setValue(i, undefined);
        }
        for (let i in this.fields) {
            this.fields[i].reset();
        }
        this.clearAllErrors();
    }
}
export const VFormContext = React.createContext(undefined);
export function useForm() {
    return useContext(VFormContext);
}
//# sourceMappingURL=FormContext.js.map
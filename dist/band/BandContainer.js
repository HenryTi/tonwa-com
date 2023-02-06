import React, { useContext } from "react";
import { atom } from "jotai";
import { getAtomValue, setAtomValue } from "../tools";
const defaultStringClassName = 'form-control';
const defaultCheckClassName = 'form-check-input';
const defaultSelectClassName = 'form-select';
const defaultPickClassName = 'form-control';
const defaultRangeClassName = 'form-range';
export class BandContainerContext {
    valueAtoms;
    defaultStringClassName = defaultStringClassName;
    defaultCheckClassName = defaultCheckClassName;
    defaultSelectClassName = defaultSelectClassName;
    defaultPickClassName = defaultPickClassName;
    defaultRangeClassName = defaultRangeClassName;
    defaultNone = '-';
    fields;
    fieldStates;
    bands;
    BandTemplate;
    props;
    readOnly;
    constructor(props) {
        let { values, BandTemplate, readOnly } = props;
        this.bands = [];
        this.BandTemplate = BandTemplate;
        this.props = props;
        this.readOnly = readOnly;
        this.valueAtoms = {};
        if (values) {
            for (let i in values) {
                this.valueAtoms[i] = atom(values[i]);
            }
        }
        this.fields = {};
        this.fieldStates = {};
        let each = (cs) => {
            React.Children.forEach(cs, c => {
                if (!c)
                    return;
                if (React.isValidElement(c) === false)
                    return;
                let e = c;
                let { props: cProps } = e;
                if (cProps) {
                    let { name } = cProps;
                    if (name)
                        this.fieldStates[name] = atom({ readOnly: false, disabled: false });
                    each(cProps.children);
                }
            });
        };
        each(props.children);
    }
    getValue(name) {
        let atom = this.valueAtoms[name];
        if (!atom)
            return undefined;
        return getAtomValue(atom);
    }
    setValue(name, val) {
        let a = this.valueAtoms[name];
        if (!a) {
            this.valueAtoms[name] = atom(val);
        }
        else {
            setAtomValue(a, val);
        }
        let values = {};
        values[name] = val;
        this.onValuesChanged(values);
    }
    getValues() {
        let values = {};
        for (let i in this.valueAtoms) {
            values[i] = getAtomValue(this.valueAtoms[i]);
        }
        return values;
    }
    onValuesChanged = async (values) => {
        for (let i in values) {
            let vNew = values[i];
            let vOld = this.getValue(i);
            if (vNew !== vOld) {
                await this.props.onValuesChanged?.({ name: i, value: vNew, preValue: vOld }, this);
                this.setValue(i, vNew);
            }
        }
    };
    setError(name, err) {
        let hasError = false;
        for (let band of this.bands) {
            let bandHasError = band.setError(name, err);
            if (bandHasError === false)
                continue;
            hasError = true;
        }
        return hasError;
    }
    clearError(name) {
        for (let band of this.bands) {
            band.clearError(name);
        }
    }
    clearAllErrors() {
        for (let band of this.bands) {
            band.clearAllErrors();
        }
    }
    setReadonly(name, readOnly) {
        let atomFieldState = this.fieldStates[name];
        let fieldState = getAtomValue(atomFieldState);
        if (fieldState) {
            setAtomValue(atomFieldState, {
                ...fieldState,
                readOnly,
            });
        }
    }
    setDisabled(name, disabled) {
        let atomFieldState = this.fieldStates[name];
        let fieldState = getAtomValue(atomFieldState);
        if (fieldState) {
            setAtomValue(atomFieldState, {
                ...fieldState,
                disabled,
            });
        }
    }
}
export const VBandContainerContext = React.createContext(undefined);
export function useBandContainer() {
    return useContext(VBandContainerContext);
}
//# sourceMappingURL=BandContainer.js.map
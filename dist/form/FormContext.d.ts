import React from 'react';
import { BandContainerContext } from '../band';
import { FormProps } from './Form';
export interface ErrorResponse {
    hasError: boolean;
    errors: string[];
}
export declare class FormContext extends BandContainerContext<FormProps> {
    readonly errorResponse: import("jotai").PrimitiveAtom<ErrorResponse> & {
        init: ErrorResponse;
    };
    get isDetail(): boolean;
    setError(name: string, err: string | string[]): boolean;
    clearError(name: string): void;
    clearAllErrors(): void;
    clearValues(): void;
}
export declare const VFormContext: React.Context<FormContext>;
export declare function useForm(): FormContext;

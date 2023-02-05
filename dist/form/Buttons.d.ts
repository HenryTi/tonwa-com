import React from 'react';
export interface ButtonProps {
    name?: string;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}
export declare function Submit({ name, className, children, onSubmit, disabled }: ButtonProps & {
    onSubmit: (data: any) => Promise<[name: string, err: string][] | string[] | string | void>;
}): JSX.Element;
export declare function Clear({ className, children }: ButtonProps): JSX.Element;
export declare function ClearErrorsButton({ className, children }: ButtonProps): JSX.Element;

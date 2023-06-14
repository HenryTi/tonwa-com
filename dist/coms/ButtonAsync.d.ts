import React, { MouseEvent, ReactNode } from "react";
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
}
export declare function ButtonAsync(props: {
    onClick: (evt: MouseEvent<HTMLButtonElement>) => Promise<void>;
} & Props): JSX.Element;
export declare function ButtonSubmit({ className, isSubmiting, children, disabled }: {
    className: string;
    isSubmiting: boolean;
    children: ReactNode;
    disabled?: boolean;
}): JSX.Element;
export {};

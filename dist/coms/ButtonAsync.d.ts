import React, { MouseEvent } from "react";
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
}
export declare function ButtonAsync(props: {
    onClick: (evt: MouseEvent<HTMLButtonElement>) => Promise<void>;
} & Props): JSX.Element;
export {};

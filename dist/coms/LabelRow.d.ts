import { ReactNode } from "react";
export interface ContainerProps {
    children: ReactNode;
}
type ContainerType = (props: ContainerProps) => JSX.Element;
export interface LabelRowPropsBase {
    className?: string;
    labelSize?: number;
    labelAlign?: 'start' | 'center' | 'end';
    labelClassName?: string;
    LabelContainer?: ContainerType;
    midClassName?: string;
    MidContainer?: ContainerType;
    RightContainer?: ContainerType;
    to?: string;
    vAlign?: 'start' | 'center' | 'end';
}
export interface LabelRowProps extends LabelRowPropsBase {
    children: ReactNode;
}
export declare function LabelRow({ className, labelSize, labelAlign, labelClassName, LabelContainer, midClassName, MidContainer, RightContainer, vAlign, to, children }: LabelRowProps): JSX.Element;
export {};

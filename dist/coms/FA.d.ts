import * as React from 'react';
export interface FAProps {
    name: string;
    className?: string;
    size?: 'lg' | '2x' | '3x' | '4x' | '5x';
    spin?: boolean;
    fixWidth?: boolean;
    border?: boolean;
    pull?: 'left' | 'right';
    pulse?: boolean;
    rotate?: 90 | 180 | 270;
    flip?: 'horizontal' | 'vertical';
    inverse?: boolean;
}
export declare function FA(props: FAProps): JSX.Element;
export interface StackedFAProps {
    className?: string;
    size?: 'lg';
    children: React.ReactNode;
}
export declare function StackedFA(props: StackedFAProps): JSX.Element;

import React from 'react';
export declare enum BandContentType {
    check = 0,
    com = 1
}
interface BandBaseProps {
    label?: string | JSX.Element;
    labelSize?: number;
    toEdit?: string;
    sep?: number | JSX.Element;
    contentType?: BandContentType;
    rightIcon?: JSX.Element;
    contentContainerClassName?: string;
}
export interface BandProps extends BandBaseProps {
    BandTemplate?: (props: BandTemplateProps) => JSX.Element;
}
export interface BandTemplateProps extends BandBaseProps {
    errors: readonly {
        readonly name: string;
        readonly error: string;
    }[];
    memos: string[];
    children: React.ReactNode;
    content: React.ReactNode;
}
export declare function BandFieldError({ error }: {
    error: string;
}): JSX.Element;
export declare function BandFieldErrors({ errors }: {
    errors: readonly {
        readonly name: string;
        readonly error: string;
    }[];
}): JSX.Element;
export declare function BandMemo({ memo }: {
    memo: string | JSX.Element;
}): JSX.Element;
export declare function BandMemos({ memos }: {
    memos: (string | JSX.Element)[];
}): JSX.Element;
export declare function Band(props: BandProps & {
    children: React.ReactNode;
}): JSX.Element;
export declare function BandCom(props: BandProps & {
    children: React.ReactNode;
}): JSX.Element;
export {};

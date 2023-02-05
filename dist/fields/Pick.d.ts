/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
declare type PickProps = {
    className?: string;
    onPick: (initValue: any) => Promise<any>;
    placeholder?: string;
    Value?: (props: {
        value: any;
    }) => JSX.Element;
} & FieldProps;
export declare function Pick(props: PickProps): JSX.Element;
export declare function BandPick(props: BandProps & PickProps): JSX.Element;
export {};

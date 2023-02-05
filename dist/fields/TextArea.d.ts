/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
declare type TextProps = {
    placeholder?: string;
    maxLength?: number;
    rows?: number;
} & FieldProps;
export declare function TextArea({ name, className, readOnly, placeholder, maxLength, rule, rows }: TextProps): JSX.Element;
export declare function BandTextArea(props: BandProps & TextProps): JSX.Element;
export {};

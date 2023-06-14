/// <reference types="react" />
import { FieldProps } from './field';
type CharInputBaseProps = {
    placeholder: string;
    maxLength: number;
    isValidKey?: (key: string) => boolean;
    type?: string;
} & FieldProps;
export declare function CharInput(props: CharInputBaseProps): JSX.Element;
export declare function CharInputBase({ name, className, readOnly, placeholder, maxLength, rule, isValidKey, initValue, type, disabled }: CharInputBaseProps & {
    initValue: any;
}): JSX.Element;
export {};

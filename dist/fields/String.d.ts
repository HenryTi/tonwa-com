/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface StringProps extends FieldProps {
    placeholder?: string;
    maxLength?: number;
}
export declare function String(props: StringProps): JSX.Element;
export declare function BandString(props: BandProps & StringProps): JSX.Element;
export {};

/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface NumberProps extends FieldProps {
    placeholder?: string;
    maxLength?: number;
    min?: number;
    max?: number;
}
interface DecimalProps extends NumberProps {
}
export declare function Decimal(props: DecimalProps): JSX.Element;
export declare function BandDecimal(props: BandProps & DecimalProps): JSX.Element;
interface IntProps extends NumberProps {
}
export declare function Int(props: IntProps): JSX.Element;
export declare function BandInt(props: BandProps & IntProps): JSX.Element;
export {};

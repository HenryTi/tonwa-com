/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface RangeProps extends FieldProps {
    min: number;
    max: number;
    step?: number;
}
export declare function Range(props: RangeProps): JSX.Element;
export declare function BandRange(props: BandProps & RangeProps): JSX.Element;
export {};

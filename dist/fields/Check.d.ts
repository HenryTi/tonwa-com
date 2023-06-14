/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
type CheckInputProps = {
    indeterminate?: boolean;
    checkedValue?: string | number | boolean;
    uncheckedValue?: string | number | boolean;
} & FieldProps;
interface CheckProps extends CheckInputProps {
    label?: JSX.Element | string;
}
export declare function Check(props: CheckProps): JSX.Element;
export declare function BandCheck(props: BandProps & CheckProps): JSX.Element;
export {};

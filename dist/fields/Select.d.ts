/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
import { OptionItem } from "../defines";
interface SelectProps extends FieldProps {
    options: OptionItem[];
    placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
export declare function BandSelect(props: BandProps & SelectProps): JSX.Element;
export {};

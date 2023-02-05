/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
import { OptionItem } from "../defines";
interface RadioProps extends FieldProps {
    options: OptionItem[];
    children?: React.ReactNode;
}
export declare function Radio(props: RadioProps): JSX.Element;
export declare function BandRadio(props: BandProps & RadioProps): JSX.Element;
export {};

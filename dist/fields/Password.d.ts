/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface PasswordProps extends FieldProps {
    placeholder?: string;
    maxLength?: number;
}
export declare function Password(props: PasswordProps): JSX.Element;
export declare function BandPassword(props: BandProps & PasswordProps): JSX.Element;
export {};

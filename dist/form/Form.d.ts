/// <reference types="react" />
import { BandContainerProps } from '../band';
import { Rule } from '../fields';
export interface FormProps extends BandContainerProps {
    rule?: Rule | Rule[];
}
export declare function Form(props: FormProps): JSX.Element;
export declare function FormErrors(): JSX.Element;
export declare function BandFormErrors(): JSX.Element;

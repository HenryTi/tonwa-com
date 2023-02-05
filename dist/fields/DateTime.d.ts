/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface DtProps extends FieldProps {
}
interface DateProps extends DtProps {
}
export declare function DatePicker(props: DateProps): JSX.Element;
interface TimeProps extends DtProps {
}
export declare function TimePicker(props: TimeProps): JSX.Element;
export declare function BandDatePicker(props: BandProps & DtProps): JSX.Element;
export declare function BandTimePicker(props: BandProps & DtProps): JSX.Element;
export {};

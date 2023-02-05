import * as React from 'react';
export interface EasyDateProps {
    date: Date | number;
    timeZone?: number;
}
export declare function EasyDate(props: EasyDateProps): JSX.Element;
interface EasyTimeProps extends EasyDateProps {
    always?: boolean;
}
export declare function EasyTime(props: EasyTimeProps): JSX.Element;
interface DateProps {
    date: Date;
    hideTime?: boolean;
    hideSameYear?: boolean;
}
export declare const VDate: React.FunctionComponent<DateProps>;
export {};

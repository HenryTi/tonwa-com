/// <reference types="react" />
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    children: React.ReactNode;
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
    gapClassName?: string;
    onCheckChanged?: (name: string, checked: boolean) => Promise<void>;
}
export declare function CheckAsync(props: Props): JSX.Element;
export {};

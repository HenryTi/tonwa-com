/// <reference types="react" />
export interface SearchBoxProps {
    className?: string;
    label?: string;
    initKey?: string;
    placeholder?: string;
    buttonText?: string;
    maxLength?: number;
    size?: 'sm' | 'md' | 'lg';
    inputClassName?: string;
    onSearch: (key: string) => Promise<void>;
    onFocus?: () => void;
    allowEmptySearch?: boolean;
}
export declare function SearchBox(props: SearchBoxProps): JSX.Element;

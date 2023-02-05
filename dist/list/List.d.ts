/// <reference types="react" />
interface ItemProps<T> {
    value: T;
}
export interface ListPropsWithoutItems<T> {
    className?: string;
    itemKey?: string | ((item: T) => string | number);
    ItemView?: (props: ItemProps<T>) => JSX.Element;
    sep?: JSX.Element;
    none?: JSX.Element;
    loading?: JSX.Element;
    onItemClick?: (item: T) => Promise<string | void> | string | void;
}
export interface ListProps<T> extends ListPropsWithoutItems<T> {
    items: readonly T[];
    onItemSelect?: (item: T, isSelected: boolean) => void;
}
export declare function List<T>(props: ListProps<T>): JSX.Element;
export {};

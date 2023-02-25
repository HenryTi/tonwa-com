export declare function useT<T extends (string | number)>(t: (str: T) => any, p?: (str: any) => any): ((string: T) => any);

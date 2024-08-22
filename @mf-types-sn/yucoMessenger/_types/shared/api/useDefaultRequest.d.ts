type ErrorCallback<E> = (error: E) => void;
type DefaultRequestFunction = <T, E = any>(f: () => Promise<T>, errorCallback?: ErrorCallback<E>) => Promise<T>;
export declare const useDefaultRequest: () => DefaultRequestFunction;
export {};

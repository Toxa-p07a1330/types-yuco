export declare const commonRequest: <T, U = unknown>(f: () => Promise<T>, errorCallback?: ((error: unknown) => U) | undefined) => Promise<U | Awaited<T> | null>;

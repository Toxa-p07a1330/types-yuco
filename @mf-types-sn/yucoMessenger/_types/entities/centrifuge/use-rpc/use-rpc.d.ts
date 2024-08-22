export declare const useRpc: () => {
    callRpc: <T extends import("../types").RpcMethod>(method: T, params: import("../types").IRpcParams[T]) => Promise<any>;
};

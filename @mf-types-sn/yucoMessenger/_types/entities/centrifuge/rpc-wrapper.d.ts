import { Centrifuge } from "centrifuge";
import { IRpcParams, RpcMethod } from "./types";
export declare const rpcCallWrapper: (centrifuge: Centrifuge | null) => {
    callRpc: <T extends RpcMethod>(method: T, params: IRpcParams[T]) => Promise<any>;
};

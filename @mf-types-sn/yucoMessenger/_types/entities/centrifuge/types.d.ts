import type { Centrifuge } from 'centrifuge';
import { IRpcChatParams, RpcChatMethod } from '../chat/model/rpc-types';
import { IRpcMessageParams, IRpcReactionParams, RpcMessageMethod, RpcReactionMethod } from '../chat/ui/message-entity/model/rpc-types';
export declare const CENTRIFUGE_ACTION_TYPE: {
    CONNECT: string;
    DISCONNECT: string;
    SUBSCRIBE: string;
};
export type FetchToken = {
    token: string;
};
export type RpcMethod = RpcMessageMethod | RpcChatMethod | RpcReactionMethod;
export interface IRpcParams extends IRpcChatParams, IRpcReactionParams, IRpcMessageParams {
}
export interface ICentrifugeStore {
    connected: boolean;
    centrifugeClient: Centrifuge | null;
    channelId: string | null;
    isSyncComplete: boolean;
    syncChunkCounter: number;
    allSyncChunksReceived: boolean;
    timestamp?: string;
}

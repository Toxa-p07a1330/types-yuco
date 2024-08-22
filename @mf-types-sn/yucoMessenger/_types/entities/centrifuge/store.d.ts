import type { Centrifuge, PublicationContext } from 'centrifuge';
import { ICentrifugeStore } from './types';
export declare const subscribe: import("@reduxjs/toolkit").AsyncThunk<string, void, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const connectCentrifuge: import("@reduxjs/toolkit").AsyncThunk<Centrifuge | null, {
    lastSyncTimestamp?: string | undefined;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const disconnectCentrifuge: import("@reduxjs/toolkit").AsyncThunk<void, void, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const connectAction: (wsToken: string | null, connectedCallback: (value: boolean, recall: boolean) => void, publishCallback: (ctx: PublicationContext) => void, lastSyncTimestamp: string | undefined) => Promise<Centrifuge | null>;
export declare const subscribeAction: (centrifugeClient: any, id: string | null) => any;
export declare const centrifugeReducer: import("redux").Reducer<ICentrifugeStore, import("redux").AnyAction>;
export declare const publish: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "centrifuge/publish">, setConnected: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "centrifuge/setConnected">, setSync: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "centrifuge/setSync">, incSyncCounter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"centrifuge/incSyncCounter">, decSyncCounter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"centrifuge/decSyncCounter">, setAllSyncChunksReceived: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "centrifuge/setAllSyncChunksReceived">, resetSyncState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"centrifuge/resetSyncState">, updateLastSyncingTimestamp: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "centrifuge/updateLastSyncingTimestamp">, setIsSyncComplete: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "centrifuge/setIsSyncComplete">, allChunksReceived: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"centrifuge/allChunksReceived">;

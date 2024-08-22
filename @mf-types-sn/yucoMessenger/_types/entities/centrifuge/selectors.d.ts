import { RootState } from 'shared/lib/store';
export declare const selectConnected: (state: RootState) => boolean;
export declare const selectClient: (state: RootState) => import("centrifuge").Centrifuge | null;
export declare const selectIsMessengerSyncComplete: (state: RootState) => boolean;
export declare const selectSyncTimestamp: (state: RootState) => string | undefined;
export declare const selectIsAllChunksReceived: (state: RootState) => boolean;
export declare const selectSyncChunkCounter: (state: RootState) => number;

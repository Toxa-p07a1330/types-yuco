export declare const DBSyncService: () => {
    handleNewTimestamp: (id: string, timestamp: string) => Promise<void>;
    syncMessages: () => Promise<void>;
};

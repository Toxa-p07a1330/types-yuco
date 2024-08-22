export declare const StorageUtils: () => {
    initStoragePersistence: () => Promise<void>;
    isStoragePersisted: () => Promise<boolean | undefined>;
    persist: () => Promise<boolean | undefined>;
    showEstimatedQuota: () => Promise<void>;
};

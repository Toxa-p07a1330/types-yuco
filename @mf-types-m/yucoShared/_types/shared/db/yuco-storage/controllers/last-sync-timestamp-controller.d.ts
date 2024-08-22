import { Table } from 'dexie';
import { LastSyncTimestamp } from 'shared/db/yuco-storage/types';
export declare const LastSyncTimestampController: (table: Table<LastSyncTimestamp>) => {
    actions: {
        getLastSyncTimestamp: (id: string) => Promise<LastSyncTimestamp[]>;
        setLastSyncTimestamp: (id: number, newTimestamp: string) => Promise<any>;
    };
    hookManager: {
        subscribeDeletingAction: (callback: (primKey: string | number, obj: LastSyncTimestamp) => any) => () => void;
        subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: LastSyncTimestamp) => any) => () => void;
        subscribeReadingAction: (callback: (obj: LastSyncTimestamp) => any) => () => void;
        subscribeCreatingAction: (callback: (primKey: string | number, obj: LastSyncTimestamp) => void | import("dexie").IndexableType | undefined) => () => void;
    };
};

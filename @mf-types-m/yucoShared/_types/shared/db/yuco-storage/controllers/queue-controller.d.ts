import { Table } from 'dexie';
import { TQueueItem } from 'shared/db/yuco-storage/types';
export declare const QueueController: (table: Table<TQueueItem>) => {
    actions: {
        deleteQueueItem: (id: number | string) => Promise<number>;
        getQueue: () => Table<TQueueItem, any, TQueueItem>;
        getQueueItem: (id: number | string) => Promise<import("dexie").Collection<TQueueItem, any, TQueueItem>>;
        getQueueItemsAll: () => Promise<TQueueItem[]>;
        getQueueItemsPage: (offset: number, limit: number) => Promise<TQueueItem[]>;
        setQueueItem: (item: TQueueItem) => Promise<any>;
    };
    hookManager: {
        subscribeDeletingAction: (callback: (primKey: string | number, obj: TQueueItem) => any) => () => void;
        subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: TQueueItem) => any) => () => void;
        subscribeReadingAction: (callback: (obj: TQueueItem) => any) => () => void;
        subscribeCreatingAction: (callback: (primKey: string | number, obj: TQueueItem) => void | import("dexie").IndexableType | undefined) => () => void;
    };
};

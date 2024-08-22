import Dexie, { Table } from 'dexie';
import { Followers, IPostDraft, LastSyncTimestamp, TMessage, TQueueItem } from './types';
export declare class YucoDexie extends Dexie {
    followers: Table<Followers>;
    messages: Table<TMessage>;
    queue: Table<TQueueItem>;
    last_sync_timestamp: Table<LastSyncTimestamp>;
    post_drafts: Table<IPostDraft>;
    constructor();
}
export declare const YucoStorage: {
    utils: {
        initStoragePersistence: () => Promise<void>;
        isStoragePersisted: () => Promise<boolean | undefined>;
        persist: () => Promise<boolean | undefined>;
        showEstimatedQuota: () => Promise<void>;
    };
    controllers: {
        messagesController: {
            actions: {
                addMessage: (message: TMessage) => Promise<void>;
                addMessages: (messages: TMessage[]) => Promise<void>;
                addReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, sender: import("./types").TUserAccount, self: boolean) => Promise<void>;
                cancelMessage: (cache_id: string) => Promise<void>;
                clearReplyMessage: (cache_id: string) => Promise<void>;
                deleteChatMessages: (uuid: string) => Promise<void>;
                deleteMessage: (message: TMessage) => Promise<void>;
                deleteMessageByCacheId: (cache_id: string) => Promise<void>;
                deleteReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, reactors: {
                    [key: string]: import("./types").TUserAccount;
                }, self: boolean) => Promise<void>;
                editMessageByCacheId: (cache_id: string, message: string) => Promise<void>;
                editReactionsById: (cache_id: string, reactions: any) => Promise<void>;
                editSelfReactionById: (cache_id: string, self_reaction: any) => Promise<void>;
                getChatMessagesAboveDate: (uuid: string | number, date: string, limit: number) => Promise<TMessage[]>;
                getChatMessagesLessDate: (uuid: string | number, date: string, limit: number) => Promise<TMessage[]>;
                getMessageByCacheId: (cache_id: string) => Promise<TMessage[]>;
                getMessagesByChatId: (uuid: string | number, limit: number) => Promise<TMessage[]>;
                getMessagesPrimaryKeysByChatId: (uuid: string | number, limit: number) => Promise<any[]>;
                pendMessage: (cache_id: string) => Promise<void>;
                readMessage: (id: string, is_read: boolean) => Promise<void>;
                rejectMessage: (cache_id: string) => Promise<void>;
                setMessageHeight: (cache_id: string, height: number) => Promise<void>;
                syncMessage: (cache_id: string) => Promise<void>;
                syncMessages: () => Promise<void>;
                updateExistingMessage: (message: TMessage) => Promise<void>;
                updateMessage: (message: TMessage) => Promise<void>;
                updateReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, sender: import("./types").TUserAccount, old_reaction: string, reactors: import("./types").TUserAccount[], self: boolean) => Promise<void>;
            };
            hookManager: {
                subscribeDeletingAction: (callback: (primKey: string | number, obj: TMessage) => any) => () => void;
                subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: TMessage) => any) => () => void;
                subscribeReadingAction: (callback: (obj: TMessage) => any) => () => void;
                subscribeCreatingAction: (callback: (primKey: string | number, obj: TMessage) => void | import("dexie").IndexableType | undefined) => () => void;
            };
        };
        queueController: {
            actions: {
                deleteQueueItem: (id: string | number) => Promise<number>;
                getQueue: () => Table<TQueueItem, any, TQueueItem>;
                getQueueItem: (id: string | number) => Promise<import("dexie").Collection<TQueueItem, any, TQueueItem>>;
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
        lastSyncTimestampController: {
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
    };
};

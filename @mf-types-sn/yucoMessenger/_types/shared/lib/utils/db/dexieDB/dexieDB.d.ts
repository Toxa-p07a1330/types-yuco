import Dexie, { Table } from 'dexie';
import { TChatsItemMessage, TMessage, TUserAccount } from 'entities/chat/model/types';
import { AbstractYucoDB } from '../yucoDB/yucoDB';
export interface Followers {
    bio?: string;
    birthday?: string;
    created_at?: string;
    deleted_at?: string;
    email?: string;
    id?: string | number;
    uid?: string | number;
    is_active?: string;
    is_follow?: string;
    is_follower?: string;
    is_private?: string;
    link?: string;
    name?: string;
    phone?: string;
    profession?: string;
    profile_photo?: string;
    sex?: string;
    updated_at?: string;
    user_type?: string;
    username: string;
}
export interface QueueItem {
    type: 'update' | 'create' | 'reply' | 'edit' | 'delete' | 'forward' | 'addReaction' | 'deleteReaction';
    data: any;
    importance: number;
}
export interface QueueData {
    cache_id: string;
    message_id?: string;
    uuid?: string;
    message?: string;
}
export interface Segment {
    id: number;
    from: string;
    to: string;
}
export interface LastSyncTimestamp {
    id: number;
    timestamp: string;
}
export declare class YucoDexie extends Dexie {
    followers: Table<Followers>;
    messages: Table<TMessage>;
    queue: Table<QueueItem>;
    last_sync_timestamp: Table<LastSyncTimestamp>;
    constructor();
}
export declare class YucoDB extends AbstractYucoDB {
    constructor(db: YucoDexie);
    get getDB(): YucoDexie;
    addMessage(message: TMessage | TChatsItemMessage): Promise<void>;
    updateExistingMessage(message: TMessage | TChatsItemMessage): Promise<void>;
    updateMessage(message: TMessage): Promise<void>;
    deleteMessage(message: TMessage): Promise<void>;
    clearReplyMessage(cache_id: string): Promise<void>;
    deleteMessageByCacheId(cache_id: string): Promise<void>;
    syncMessages(): Promise<void>;
    addMessages(messages: TMessage[]): Promise<void>;
    editMessageByCacheId(cache_id: string, message: string): Promise<void>;
    editReactionsById(cache_id: string, reactions: any): Promise<void>;
    addReactionByCacheId(cache_id: string, reaction: string, account_uuid: string, sender: TUserAccount, self: boolean): Promise<void>;
    updateReactionByCacheId(cache_id: string, reaction: string, account_uuid: string, sender: TUserAccount, old_reaction: string, reactors: TUserAccount[], self: boolean): Promise<void>;
    deleteReactionByCacheId(cache_id: string, reaction: string, account_uuid: string, reactors: {
        [key: string]: TUserAccount;
    }, self: boolean): Promise<void>;
    setMessageHeight(cache_id: string, height: number): Promise<void>;
    editSelfReactionById(cache_id: string, self_reaction: any): Promise<void>;
    getMessageByCacheId(cache_id: string): Promise<any>;
    readMessage(id: string, is_read: boolean): Promise<void>;
    rejectMessage(cache_id: string): Promise<void>;
    pendMessage(cache_id: string): Promise<void>;
    syncMessage(cache_id: string): Promise<void>;
    deleteChatMessages(uuid: string): Promise<void>;
    cancelMessage(cache_id: string): Promise<void>;
    getMessagesByChatId(uuid: number | string, limit: number): Promise<any>;
    getMessagesPrimaryKeysByChatId(uuid: number | string, limit: number): Promise<any>;
    getChatMessagesLessDate(uuid: number | string, date: string, limit: number): Promise<any>;
    getChatMessagesAboveDate(uuid: number | string, date: string, limit: number): Promise<any>;
    getQueueItem(id: number | string): Promise<any>;
    getQueueItemsAll(): Promise<any>;
    getQueueItemsPage(offset: number, limit: number): Promise<any>;
    getQueue(): any;
    getMessages(): any;
    getLastSyncTimestamp(id: string): Promise<any>;
    setLastSyncTimestamp(id: string, newTimestamp: string): Promise<any>;
    deleteQueueItem(id: number | string): Promise<any>;
    setQueueItem(item: QueueItem): Promise<any>;
    showEstimatedQuota(): Promise<void>;
    private isStoragePersisted;
    private persist;
    private tryPersistWithoutPromtingUser;
    initStoragePersistence(): Promise<void>;
}
export declare const YucoMessengerStorage: YucoDB;

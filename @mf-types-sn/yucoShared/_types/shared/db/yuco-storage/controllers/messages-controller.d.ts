import { Table } from 'dexie';
import { TMessage, TUserAccount } from 'shared/db/yuco-storage/types';
export declare const MessagesController: (table: Table<TMessage>) => {
    actions: {
        addMessage: (message: TMessage) => Promise<void>;
        addMessages: (messages: TMessage[]) => Promise<void>;
        addReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, sender: TUserAccount, self: boolean) => Promise<void>;
        cancelMessage: (cache_id: string) => Promise<void>;
        clearReplyMessage: (cache_id: string) => Promise<void>;
        deleteChatMessages: (uuid: string) => Promise<void>;
        deleteMessage: (message: TMessage) => Promise<void>;
        deleteMessageByCacheId: (cache_id: string) => Promise<void>;
        deleteReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, reactors: {
            [key: string]: TUserAccount;
        }, self: boolean) => Promise<void>;
        editMessageByCacheId: (cache_id: string, message: string) => Promise<void>;
        editReactionsById: (cache_id: string, reactions: any) => Promise<void>;
        editSelfReactionById: (cache_id: string, self_reaction: any) => Promise<void>;
        getChatMessagesAboveDate: (uuid: number | string, date: string, limit: number) => Promise<TMessage[]>;
        getChatMessagesLessDate: (uuid: number | string, date: string, limit: number) => Promise<TMessage[]>;
        getMessageByCacheId: (cache_id: string) => Promise<TMessage[]>;
        getMessagesByChatId: (uuid: number | string, limit: number) => Promise<TMessage[]>;
        getMessagesPrimaryKeysByChatId: (uuid: number | string, limit: number) => Promise<any[]>;
        pendMessage: (cache_id: string) => Promise<void>;
        readMessage: (id: string, is_read: boolean) => Promise<void>;
        rejectMessage: (cache_id: string) => Promise<void>;
        setMessageHeight: (cache_id: string, height: number) => Promise<void>;
        syncMessage: (cache_id: string) => Promise<void>;
        syncMessages: () => Promise<void>;
        updateExistingMessage: (message: TMessage) => Promise<void>;
        updateMessage: (message: TMessage) => Promise<void>;
        updateReactionByCacheId: (cache_id: string, reaction: string, account_uuid: string, sender: TUserAccount, old_reaction: string, reactors: TUserAccount[], self: boolean) => Promise<void>;
    };
    hookManager: {
        subscribeDeletingAction: (callback: (primKey: string | number, obj: TMessage) => any) => () => void;
        subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: TMessage) => any) => () => void;
        subscribeReadingAction: (callback: (obj: TMessage) => any) => () => void;
        subscribeCreatingAction: (callback: (primKey: string | number, obj: TMessage) => void | import("dexie").IndexableType | undefined) => () => void;
    };
};

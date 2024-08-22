import { IChatAttachments, TMessage } from 'entities/chat/model/types';
export declare const SyncMessagesQueueActions: () => {
    addCreateMessageQueueAction: (uuid: string, message: string, cache_id: string, senderId: string, attachments?: IChatAttachments[], object?: {
        object_uuid: number;
        object_type: string;
    }) => Promise<any>;
    addReplyMessageQueueAction: (message_id: string, message: string, cache_id: string) => Promise<any>;
    addEditMessageQueueAction: (message_id: string, message: string, cache_id: string) => Promise<any>;
    addDeleteMessageQueueAction: (uuid: string, messages: TMessage[], delete_type: string) => Promise<void>;
    addForwardMessagesQueueAction: (chat_uuid: string, forward_messages: {
        uuid: string | undefined;
        cache_id: string;
    }[], message: string, cache_id: string) => Promise<any>;
    addReactionQueueAction: (message_id: string, action: string, cache_id: string) => Promise<void>;
    deleteReactionQueueAction: (message_id: string, action: string, cache_id: string) => Promise<void>;
};

import { IChatAttachmentsReq } from './types';
import { AxiosResponse } from 'axios';
export declare const getMessagesReq: (chat_id: string, limit?: number, ws_start_date?: string, ws_end_date?: string) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSMessageList, any>>;
export declare const sendMessageReq: ({ uuid, message, cache_id, attachments, object }: {
    uuid: string;
    message: string;
    cache_id: string;
    attachments?: IChatAttachmentsReq[] | undefined;
    object?: {
        object_id: number;
        object_type: string;
    } | undefined;
}) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSFullMessage, any>>;
export declare const editMessageReq: (message_id: string, message: string) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSFullMessage, any>>;
export declare const replyMessageReq: (message_id: string, message: string, cache_id: string) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSFullMessage, any>>;
export declare const deleteMessageReq: (message_ids: string[], delete_type: 'global' | 'local') => Promise<AxiosResponse<any, any>>;
export declare const readMessagesReq: (message_ids: string[]) => Promise<AxiosResponse<any, any>>;
export declare const forwardMessagesReq: (chat_uuid: string, forward_messages: {
    uuid: string;
    cache_id: string;
}[], message: string, cache_id: string) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSFullMessage[], any>>;
export declare const addReactionReq: (message_id: string, action: string) => Promise<AxiosResponse<void, any>>;
export declare const deleteReactionReq: (message_id: string, action: string) => Promise<AxiosResponse<void, any>>;
export declare const getStoryById: (storyId: number) => Promise<AxiosResponse<import("../../../../@mf-types/yucoShared/_types/generated-api/social-network").SJBGetStory, any> | null>;
export declare const getPostById: (postId: number) => Promise<import("../../../../@mf-types/yucoShared/_types/generated-api/social-network").PostDetailSchemaWithFlags | null>;
export declare const muteChat: (chatId: string) => Promise<import("../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSMute | null>;
export declare const unMuteChat: (chatId: string) => Promise<void | null>;

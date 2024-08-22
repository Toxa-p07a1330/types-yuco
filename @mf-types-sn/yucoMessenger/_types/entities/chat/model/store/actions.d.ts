import { Centrifuge } from 'centrifuge';
import { IActionDeleteMessage, IActionEditMessage, IActionForwardMessage, IActionSendMessage } from '../types';
export declare const sendMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, IActionSendMessage, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const editMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, IActionEditMessage, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const cancelMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    cache_id: string;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const retryMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    cache_id: string;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, IActionDeleteMessage, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const replyMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    uuid: string;
    message_id: string;
    message: string;
    cache_id: string;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addReaction: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    message_id: string;
    action: string;
    cache_id: string;
    resolve: any;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateReaction: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    message_id: string;
    action: string;
    cache_id: string;
    resolve: any;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteReaction: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    message_id: string;
    action: string;
    cache_id: string;
    resolve: any;
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const forwardMessage: import("@reduxjs/toolkit").AsyncThunk<void | null, IActionForwardMessage, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const readMessages: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    message_ids: string[];
}, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchMessagesAction: (uuid: string, limit?: number, ws_start_date?: string, ws_end_date?: string) => Promise<import("../../../../../@mf-types/yucoShared/_types/generated-api/messenger").MSMessageList>;
export declare const editMessageAction: (queueItem: {
    message_id: string;
    message: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const replyMessageAction: (queueItem: {
    message_id: string;
    message: string;
    cache_id: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const deleteMessageAction: (queueItem: {
    chat_uuid: string;
    message_uuids: string[];
    delete_type: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const forwardMessagesAction: (queueItem: IActionForwardMessage, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const addReactionAction: (queueItem: {
    message_id: string;
    action: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const updateReactionAction: (queueItem: {
    message_id: string;
    action: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const deleteReactionAction: (queueItem: {
    message_id: string;
    action: string;
}, centrifugeClient: Centrifuge | null) => Promise<boolean>;
export declare const messageQueueItemHandler: {
    create: (queueItem: IActionSendMessage, centrifugeClient: Centrifuge | null) => Promise<boolean>;
    reply: (queueItem: {
        message_id: string;
        message: string;
        cache_id: string;
    }, centrifugeClient: Centrifuge | null) => Promise<boolean>;
    edit: (queueItem: {
        message_id: string;
        message: string;
    }, centrifugeClient: Centrifuge | null) => Promise<boolean>;
    delete: (queueItem: {
        chat_uuid: string;
        message_uuids: string[];
        delete_type: string;
    }, centrifugeClient: Centrifuge | null) => Promise<boolean>;
    forward: (queueItem: IActionForwardMessage, centrifugeClient: Centrifuge | null) => Promise<boolean>;
};

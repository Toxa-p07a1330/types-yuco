import { IChatAttachmentsReq } from 'entities/chat/model/types';
export declare enum RpcMessageMethod {
    CREATE_MESSAGE = "create_message",
    UPDATE_MESSAGE = "update_message",
    REPLY_MESSAGE = "reply_message",
    DELETE_MESSAGE = "delete_message",
    FORWARD_MESSAGE = "forward_message",
    READ_MESSAGE = "read_message"
}
export declare enum RpcReactionMethod {
    UPDATE_REACTION = "update_reaction",
    CREATE_REACTION = "create_reaction",
    DELETE_REACTION = "delete_reaction"
}
export interface IRpcMessageParams {
    [RpcMessageMethod.CREATE_MESSAGE]: {
        chat_id: string;
        message: string;
        cache_id: string;
        attachments: IChatAttachmentsReq[] | undefined;
        object?: {
            object_id: number;
            object_type: string;
        };
    };
    [RpcMessageMethod.UPDATE_MESSAGE]: {
        uuid: string;
        message: string;
    };
    [RpcMessageMethod.REPLY_MESSAGE]: {
        message_uuid: string;
        message: string;
        cache_id: string;
    };
    [RpcMessageMethod.DELETE_MESSAGE]: {
        message_uuids: string[];
        delete_type: string;
    };
    [RpcMessageMethod.FORWARD_MESSAGE]: {
        chat_uuid: string;
        forward_messages: {
            uuid: string | undefined;
            cache_id: string;
        }[];
        message: string;
        cache_id: string;
    };
    [RpcMessageMethod.READ_MESSAGE]: {
        message_uuids: string[];
    };
}
export interface IRpcReactionParams {
    [RpcReactionMethod.UPDATE_REACTION]: {
        message_uuid: string;
        reaction: string;
    };
    [RpcReactionMethod.CREATE_REACTION]: {
        message_uuid: string;
        reaction: string;
    };
    [RpcReactionMethod.DELETE_REACTION]: {
        message_uuid: string;
        reaction: string;
    };
}

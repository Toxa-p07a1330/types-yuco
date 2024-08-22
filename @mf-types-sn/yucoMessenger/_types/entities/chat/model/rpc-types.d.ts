export declare enum RpcChatMethod {
    DELETE_CHAT = "delete_chat",
    LEAVE_CHAT = "leave_chat"
}
export interface IRpcChatParams {
    [RpcChatMethod.DELETE_CHAT]: {
        chat_id: string;
    };
    [RpcChatMethod.LEAVE_CHAT]: {
        chat_uuid: string;
        successor?: string;
    };
}

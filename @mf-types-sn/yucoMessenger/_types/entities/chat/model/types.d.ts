/// <reference types="react" />
import { IMember, TChatMutePeriod, TChatSelectionItem, TChatState, TChatTypes, TMemberRole, TUserSelectionCard, TUserSelectionTag } from 'shared/types';
export declare const FileTypes: {
    readonly File: "file";
    readonly Photo: "photo";
    readonly Video: "video";
};
export type TFileType = (typeof FileTypes)[keyof typeof FileTypes];
export type TChatsItemMessage = {
    created_at: string;
    message: string;
    is_read: boolean;
    account_uuid: string | number;
    uuid?: string;
    cache_id?: string;
    attachments: IChatAttachments[];
    source_message?: TSourceMessage;
    reactions?: TReactions[];
    object_uuid?: number;
    object_type?: string;
};
export type TChatItem = {
    title: string;
    icon_hashname: string;
    type: TChatTypes;
    message: TChatsItemMessage;
    messages?: TChatsItemMessage[];
    mute: TChatMutePeriod | null;
    state: TChatState;
    count_unread_messages?: number | string;
    role: TMemberRole;
    avatar_path?: string;
    uuid: string;
    updated_at: string;
    folders: TChatFolders[];
    icon_url?: string;
};
export type TChatFolders = {
    uuid: string;
    name: string;
    is_pin: boolean;
};
export type TCommonMessage = {
    message?: string | null;
    attachments?: IChatAttachmentsRes[];
    created_at: string;
    account_uuid: string;
    uuid?: string;
    is_read: boolean;
    sender: TMessageSender;
    cache_id: string;
    updated_at?: string;
    chat_uuid: string;
    syncing?: number;
    is_edit?: boolean;
    status: TMessageStatus;
    reactions?: TReactions;
    self_reaction?: string;
    height?: number;
    object_expired?: boolean;
};
export type TReplyMessage = TCommonMessage & {
    reply_id?: string;
    source_message?: TSourceMessage;
};
export type TForwardMessage = TCommonMessage & {
    forward_author_id?: string;
    fw_source_message?: string;
    forward_sender?: TMessageSender;
};
export type TYucoMessage = (TReplyMessage | TForwardMessage) & {
    object_uuid?: number;
    object_type?: string;
};
export type TMessage = TYucoMessage & TReplyMessage & TForwardMessage;
export type TMessagePool = {
    messages: TMessage[];
    initialized: boolean;
    filled: number;
    fetched: number;
};
export declare const MessageStatus: {
    readonly PENDING: "pending";
    readonly REJECTED: "rejected";
    readonly SYNCED: "synced";
    readonly CANCELED: "canceled";
};
export type TMessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus];
export type TMessageResponse = {
    message?: string | null;
    created_at: string;
    account_uuid: string;
    chat_uuid: string;
    uuid?: string;
    is_read: boolean;
    source_message?: TSourceMessage;
    forward_author_id?: string;
    fw_source_message?: string;
    fw_source_account_uuid?: string;
    forward_sender?: TMessageSender;
    reply_id?: string;
    sender: TMessageSender;
    cache_id: string;
    updated_at?: string;
    is_edit?: boolean;
    attachments?: IChatAttachmentsRes[];
    synced?: number;
    reactions?: TReactions;
    self_reaction?: string;
    object_uuid: number;
    object_type: string;
    height: number;
};
export type TSourceMessage = {
    uuid: string;
    message?: string;
    account_uuid: string;
    created_at: string;
    updated_at?: string;
    sender: TMessageSender;
    cache_id: string;
    fw_source_message: string;
    attachments: IChatAttachmentsRes[];
    object_uuid?: number;
    object_type?: string;
    deleted?: boolean;
    object_expired?: boolean;
} | {
    deleted: true;
};
export interface IActiveMessage {
    ref: React.RefObject<HTMLDivElement>;
    data: TMessage;
    isMyMessage: boolean;
}
export declare const MESSAGE_ACTION_NAME: {
    REPLY: string;
    CANCEL: string;
    COPY: string;
    FORWARD: string;
    DELETE: string;
    EDIT: string;
    SELECT: string;
    DELETE_FOR_ALL: string;
    DELETE_FOR_ME: string;
    RETRY: string;
};
export declare const CHAT_MODE: {
    COMMON: string;
    FORWARD: string;
    EDIT: string;
    SELECT: string;
    REPLY: string;
    DELETE: string;
};
export declare enum MessageQueueTypes {
    CREATE = "create",
    REPLY = "reply",
    EDIT = "edit",
    DELETE = "delete",
    FORWARD = "forward"
}
export interface TMessagesQueue {
    type: 'update' | 'create' | 'reply' | 'edit' | 'delete' | 'forward' | 'addReaction' | 'deleteReaction';
    data: any;
    importance: number;
    id?: string | number;
}
export type TStorageMessagesQueue = TMessagesQueue & {
    id: number;
};
export interface IChatAttachmentsRes {
    hashname: string;
    thumbnail_hashname?: string;
    object_type: string;
    thumbnail?: string;
    is_file: boolean;
    file_name: string;
    size: number;
    dim?: any;
}
export interface IChatAttachmentsReq {
    hashname: string;
    type: string;
    thumbnail_hashname?: string;
    is_file: boolean;
}
export declare enum READ_URL_SIZES {
    original = 0,
    medium = 1,
    small = 2,
    _smallest = 3,
    _biggest = 4,
    any = 5
}
export interface IChatContentRes {
    hashname: string;
    object_type: string;
    available_sizes: READ_URL_SIZES[];
    thumbnail_hashname: string;
    thumbnail_available_sizes: READ_URL_SIZES[];
    file_name: string;
    size: number;
}
export interface IChatAttachments {
    hashname: string;
    object_type: string;
    thumbnail?: string;
    is_file: boolean;
    file_name: string;
    size: number;
}
export interface IChatAttachmentsFulfilled {
    hashname: string;
    object_type: string;
    thumbnail?: string;
    is_file: boolean;
    file_name: string;
    size: number;
    data: string;
}
export type ReactionResponse = {
    detail: string;
};
type ReactionKey = 'dislike' | 'fire' | 'funny' | 'great' | 'heart' | 'like' | 'love' | 'pls' | 'surprise' | string;
export type TReactions = Record<ReactionKey, number | TUserAccount[]>;
export declare enum ReadUrlEnum {
    ORIGINAL = "original",
    SMALL = "small",
    MEDIUM = "medium",
    COMPRESSED = "compress",
    _SMALLEST = "_smallest"
}
interface IReadUrl {
    size_type: ReadUrlEnum;
    url: string;
}
export interface IContent {
    configuration: string | null;
    object_type: string;
    hashname: string;
    id: number;
    number: number;
    available_sizes: ReadUrlEnum[];
    read_urls: IReadUrl[];
    thumbnail_available_sizes: ReadUrlEnum[];
    thumbnail_read_urls: IReadUrl[];
    user: any;
    created_at: string;
}
export type PostType = {
    id: number;
    author: IAuthor;
    title: string;
    location: {
        address: string;
        longitude: number;
        latitude: number;
        id: number;
        name: string;
    };
    username: string;
    is_active: boolean;
    created_at: Date;
    deleted_at: string | null;
    contents: {
        gradientUrl: {
            url: string;
        };
        tagged_users?: any[];
        name: string;
        path: string;
        pathOriginal: string;
        thumbnailPath?: string;
        object_type?: string;
        thumbnail_hashname?: string;
        hashname?: string;
        type?: string;
        configuration: any;
        available_sizes: ReadUrlEnum[];
        read_urls: IReadUrl[];
        thumbnail_available_sizes: ReadUrlEnum[];
        thumbnail_read_urls: IReadUrl[];
    }[];
    likes: number;
    dislikes: number;
    comments: number;
    tag_color: string;
    contents_numbers: number[];
    reactions: TReactions;
    self_reaction: string;
    dislikes_visible?: boolean;
    likes_visible?: boolean;
    comments_enable?: boolean;
    reactions_enable?: boolean;
    reactions_count?: number;
    width?: number;
    height?: number;
    is_increasable?: boolean;
    configuration: any;
    type: 'video' | 'photo';
};
export interface IAuthor {
    account_id?: string | null;
    id: number;
    profile_photo?: IContent;
    username: string;
}
export interface IActionSendMessage {
    uuid: string;
    message: string;
    cache_id: string;
    senderId: string;
    attachments?: IChatAttachments[];
    object?: {
        object_uuid: number;
        object_type: string;
    };
}
export interface IActionEditMessage {
    message_id: string;
    message: string;
    cache_id: string;
}
export interface IActionForwardMessage {
    chat_uuid: string;
    forward_messages: {
        uuid: string | undefined;
        cache_id: string;
    }[];
    message: string;
    cache_id: string;
}
export interface IActionFetchMessages {
    uuid: string;
    limit?: number;
    ws_start_date?: string;
    ws_end_date?: string;
}
export interface IActionDeleteMessage {
    chat_uuid: string;
    messages: TMessage[];
    delete_type: string;
}
export type ChatListType = {
    list: TChatItem[];
    memberToOwner: IMember | null;
    potentialOwners: TUserSelectionCard[];
    isSelectChatsMode: boolean;
    selectedChats: TChatSelectionItem[];
    newFolderName: string;
    folderDeleteProcessed: string;
    isEditMode: boolean;
    interactiveFolderName: string;
    interactiveFolderId: string;
};
export declare const CHAT_ACTION_TYPE: {
    SEND_MESSAGE: string;
    GET_MESSAGES: string;
    EDIT_MESSAGE: string;
    DELETE_MESSAGE: string;
    READ_MESSAGE: string;
    ADD_REACTION: string;
    UPDATE_REACTION: string;
    DELETE_REACTION: string;
    CANCEL_MESSAGE: string;
    DELETE_CHAT: string;
};
export interface IChatState {
    messages: TMessage[];
    chatEntity?: TChatItem;
    activeMessage: TMessage | undefined;
    selectedMessages: TMessage[];
    messagesToForward: TMessage[];
    members: TUserSelectionTag[];
    popovers: TChatPopover[];
    mediaAttachments: TChatDetailsAttachment[];
    fileAttachments: TChatDetailsAttachment[];
}
export type TChatEntity = {
    mute: null | boolean;
    count_unread_messages: number;
    role: string;
    pinned_messages: any[];
    directories: any[];
    messages: TMessage[];
    message: TMessage;
    title: string;
    uuid: string;
    hash_name: null | string;
    created_at: string;
    updated_at: string;
    type: string;
};
export type TChatMessage = {
    message: string;
    created_at: string | Date;
    is_read: boolean;
    sender: TMessageSender;
};
export type TUserAccount = {
    avatar?: string | null;
    account_uuid: string;
    username: string;
    profile_id: string;
    role?: string;
};
export type TMessageSender = TUserAccount;
export type TSendMessageAction = {
    payload: TMessage;
    type: string;
};
export type TGetMessagesAction = {
    payload: Array<TMessage>;
    type: string;
};
export type TSetLoadingAction = {
    payload: boolean;
    type: string;
};
export type TChatPopover = {
    component: any;
    isOpen: boolean;
};
export type TChatDetailsAttachment = {
    object_type: string;
    file_type: string;
    file_name: string;
    hashname: string;
    thumbnail_available_sizes: string[] | null;
    thumbnail_hash_name: string | null;
    hashname_url: string;
    thumbnail_url: string | null;
    size: number;
};
export interface IAttachments {
    attachments: TChatDetailsAttachment[] | false;
}
export interface IAttachmentsType {
    typeOfAttachments: 'media' | 'links' | 'files' | 'voice' | 'members';
    offset: number;
    height?: number;
    scrollable: boolean;
    fetchAttachments?: () => Promise<void>;
}
export interface IDefaultMessage {
    account_uuid: string;
    chat_uuid: string;
    created_at: string;
    message: string;
    is_read: boolean;
    sender: {
        avatar: string;
        account_uuid: string;
        username: string;
        profile_id: string;
    };
}
export {};

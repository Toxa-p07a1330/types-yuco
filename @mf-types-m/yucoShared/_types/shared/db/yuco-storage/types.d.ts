import { IndexableType } from 'dexie';
export declare const MessageStatus: {
    readonly PENDING: "pending";
    readonly REJECTED: "rejected";
    readonly SYNCED: "synced";
    readonly CANCELED: "canceled";
};
export type TMessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus];
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
export interface IChatAttachments {
    hashname: string;
    object_type: string;
    thumbnail?: string;
    is_file: boolean;
    file_name: string;
    size: number;
}
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
export type TUserAccount = {
    avatar?: string | null;
    account_uuid: string;
    username: string;
    profile_id: string;
    role?: string;
};
type ReactionKey = 'dislike' | 'fire' | 'funny' | 'great' | 'heart' | 'like' | 'love' | 'pls' | 'surprise' | string;
export type TReactions = Record<ReactionKey, number | TUserAccount[]>;
export type TMessageSender = TUserAccount;
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
export type TQueueItem = {
    type: 'update' | 'create' | 'reply' | 'edit' | 'delete' | 'forward' | 'addReaction' | 'deleteReaction';
    data: any;
    importance: number;
    id?: number;
};
export interface LastSyncTimestamp {
    id: number;
    timestamp: string;
}
export interface IPostDraft {
    description: string;
    options: TPostCreationOptions;
    tag_color: string;
    content: IDraftMedia[];
    location: ILocation | number;
    tag_people: IUserTag[];
    aspect_ratio: number;
    height: number;
    is_reel?: boolean;
    created_at: string;
    id?: number;
    preview: string;
}
export type TPostCreationOptions = {
    settingsVk: boolean;
    settingsLikes: boolean;
    settingsShare: boolean;
    settingsComments: boolean;
};
interface IUserTag {
    id: string;
    username: string;
    coordinateX: number;
    coordinateY: number;
    slide: number;
    imageWidth?: number;
    imageHeight?: number;
    wrapperHeight?: number;
    wrapperWidth?: number;
    avatar_path: string;
}
interface ILocation {
    longitude: number;
    latitude: number;
    address: string;
    name: string;
    score: number;
    id: number;
}
export declare const FileTypes: {
    readonly File: "file";
    readonly Image: "image";
    readonly Video: "video";
};
export type TFileType = (typeof FileTypes)[keyof typeof FileTypes];
export type TMediaType = Exclude<TFileType, 'file'>;
interface IDraftMedia {
    name: string;
    mediaType: TMediaType;
    preview?: string;
}
export interface TTableHookMap<T> {
    deleting: (primKey: number | string, obj: T) => any;
    updating: (modifications: Object, primKey: number | string, obj: T) => any;
    creating: (primKey: number | string, obj: T) => void | undefined | IndexableType;
    reading: (obj: T) => T | any;
}
export type TTableHookEvent = keyof TTableHookMap<any>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export {};

import { TChatItem } from 'entities/chat/model/types';
export type TUserSelectionItem = {
    user: IMember;
};
export type TChatSelectionItem = {
    chat: TChatItem;
};
export type TChatMutePeriod = {
    since: string;
    till: string | null;
};
export type TSender = {
    hashname: string;
    username: string;
    id: string | number;
};
export type TChatState = {
    muted: boolean;
    pined: boolean;
    archived: boolean;
};
export declare const DIALOGS_ACTION_TYPE: {
    GET_DIALOGS: string;
    CREATE_DIALOG: string;
};
export type TUserSelectionTag = TUserSelectionItem & {
    readyToDelete: boolean;
    role?: 'owner' | 'member' | 'admin';
};
export type TChatSelectionTag = TChatSelectionItem & {
    readyToDelete: boolean;
    role?: 'owner' | 'member' | 'admin';
};
export type TUserSelectionCard = TUserSelectionItem & {
    selected: boolean;
};
export type TChatSelectionCard = TChatSelectionItem & {
    selected: boolean;
};
export interface IGetFollowersCallback {
    limit: number;
    followers: string;
    sort: string;
    offsetId?: string;
    search?: string;
}
export interface IGetChatListCallback {
    limit: number;
    sort?: string;
    offsetId?: string;
    search?: string;
}
export interface IUser {
    id: string;
    deleted_at: string;
    name: string;
    phone: string;
    password: string;
    email: string;
    username: string;
    birthday: string;
    sex: string;
    bio: string;
    link: string;
    business_name: string;
    business_username: string;
    business_link: string;
    business_info: string;
    business_phone: string;
    profile_photo: {
        content_type: string;
        file_type: string;
        hash_name: string;
        number: null | number;
    };
    business_email: string;
    business_address: string;
    profession: string | null;
    avatar_path: string | null;
    posts_count: string | number;
    likes_count: string | number;
    count_followers: string | number;
    count_following: string | number;
    is_follow: boolean;
    is_follower: boolean;
    new_notifications: boolean;
    actual_stories_viewed?: boolean;
    have_password?: boolean;
    mentioned_users_in_bio?: any;
    unapproved_tags_count?: number;
    account_id: string;
}
export interface IMember {
    avatar: string;
    id: string;
    profile_id: string;
    username: string;
    avatar_path: string;
    is_follow?: boolean;
    name?: boolean;
    account_id: string;
    role?: string;
    account_uuid?: string;
}
export interface IAvatarReadUrls {
    size_type: 'original' | 'medium' | 'small';
    url: string;
}
export declare const ChatTypes: {
    readonly GROUP_OPEN: "group_open";
    readonly PRIVATE: "private";
    readonly GROUP_PRIVATE: "group_private";
};
export type TChatTypes = (typeof ChatTypes)[keyof typeof ChatTypes];
export declare const MemberRole: {
    readonly MEMBER: "member";
    readonly ADMIN: "admin";
    readonly OWNER: "owner";
};
export type TMemberRole = (typeof MemberRole)[keyof typeof MemberRole];
export declare enum VariableScrollLayoutMode {
    USER_SELECTION = "user_selection",
    TAB_SCROLL = "tab_scroll",
    COMMON = "common",
    EDIT_AVATAR = "edit_avatar"
}
export declare enum DeleteType {
    GLOBAL = "global",
    LOCAL = "local"
}
export declare const defaultPopoverRect: {
    bottom: number;
    left: number;
    width: number;
    top: number;
    height: number;
    right: number;
};
export declare const MODAL_TYPES: {
    DEFAULT_MODAL: string;
    SHEET_MODAL: string;
};
export declare const ALERT_TYPES: {
    DEFAULT_ALERT: string;
};
export interface IYucoDefaultAlert {
    header?: string;
    cssClass?: string;
    message?: string;
    buttons?: IAlertButton[];
    onDidDismiss?: () => void;
}
export interface IAlertButton {
    text: string;
    role: string;
    handler: () => void;
    cssClass: string;
}
export interface IAction {
    name: string;
    icon?: string;
    callback?: (value?: any) => void;
}
export interface IActions {
    [key: string]: IAction;
}
export declare const TAB: {
    members: string;
    media: string;
    files: string;
    voice: string;
    links: string;
};
export type TabType = keyof typeof TAB;
export declare const VIDEO_TYPES: string[];
export interface IAttachmentMedia {
    contentType: string;
    thumbnail: string;
    original?: Promise<string | undefined>;
    hashName: string;
    isFile: boolean;
    fileName: string;
    size: number;
    dim?: any;
}
export interface IMediaViewContent {
    source: string;
    contentType: string;
    filePath: string;
    poster?: string;
}
export declare const CONTROL_ROLES: {
    GALLERY: string;
    FILE: string;
    LOCATION: string;
    WALLET: string;
};
export interface UserPhoto {
    filepath: string;
    webviewPath: string;
    contentType: string;
}
export interface UserMedia extends UserPhoto {
    creationDate?: string;
    size?: number;
    fileName?: string;
    preview?: string;
}

import { TUserSelectionCard, TUserSelectionItem, TUserSelectionTag } from 'shared/types';
type TGroupChat = {
    users: TUserSelectionItem[];
    cards: TUserSelectionCard[];
    tags: TUserSelectionTag[];
    title: string;
    hash_name: string;
};
export declare const groupChatReducer: import("redux").Reducer<TGroupChat, import("redux").AnyAction>;
export declare const setUsers: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionItem[], "groupChat/setUsers">, resetUsers: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"groupChat/resetUsers">, resetTags: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"groupChat/resetTags">, onCardAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionCard, "groupChat/onCardAction">, onTagAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionTag, "groupChat/onTagAction">, onInputAction: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"groupChat/onInputAction">, onDeleteAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "groupChat/onDeleteAction">, onAdjustAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "groupChat/onAdjustAction">, setTitle: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "groupChat/setTitle">, setHashName: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "groupChat/setHashName">, setTags: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionItem[], "groupChat/setTags">, resetSelection: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"groupChat/resetSelection">;
export {};

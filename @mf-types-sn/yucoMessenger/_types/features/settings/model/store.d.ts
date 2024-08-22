import { TUserSelectionCard, TUserSelectionItem, TUserSelectionTag } from 'shared/types';
import { TMessengerSettingsLastSeenItem } from '../last-seen/model';
type TUserSelection = {
    users: TUserSelectionItem[];
    neverShareWithCards: TUserSelectionCard[];
    neverShareWithTags: TUserSelectionTag[];
    neverShareWithTagsTemp: TUserSelectionTag[];
    blockedCards: TUserSelectionCard[];
    blockedTags: TUserSelectionTag[];
    blockedTagsTemp: TUserSelectionTag[];
    onlineVisibility: TMessengerSettingsLastSeenItem[];
};
export declare const messengerSettingsReducer: import("redux").Reducer<TUserSelection, import("redux").AnyAction>;
export declare const setNeverShareWithUsers: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionItem[], "messenger-settings/setNeverShareWithUsers">, resetUsers: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messenger-settings/resetUsers">, onNeverShareWithCardsAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionCard, "messenger-settings/onNeverShareWithCardsAction">, onBlockedCardsAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionCard, "messenger-settings/onBlockedCardsAction">, onNeverShareWithTagAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionTag, "messenger-settings/onNeverShareWithTagAction">, onBlockedTagAction: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionTag, "messenger-settings/onBlockedTagAction">, applyChanges: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messenger-settings/applyChanges">, discardChanges: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messenger-settings/discardChanges">, setBlockedUsers: import("@reduxjs/toolkit").ActionCreatorWithPayload<TUserSelectionItem[], "messenger-settings/setBlockedUsers">, setOnlineVisibility: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "messenger-settings/setOnlineVisibility">, onNeverShareInputAction: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messenger-settings/onNeverShareInputAction">, onBlockedUserInputAction: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messenger-settings/onBlockedUserInputAction">;
export {};

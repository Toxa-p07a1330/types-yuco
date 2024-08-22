import { RootState } from 'shared/lib/store';
import { TMessengerSettingsLastSeenItem } from '../last-seen/model';
export declare const selectNeverShareWithTags: (state: RootState) => import("../../../shared/types").TUserSelectionTag[];
export declare const selectNeverShareWithCards: (state: RootState) => import("../../../shared/types").TUserSelectionCard[];
export declare const selectBlockedTags: (state: RootState) => import("../../../shared/types").TUserSelectionTag[];
export declare const selectBlockedCards: (state: RootState) => import("../../../shared/types").TUserSelectionCard[];
export declare const selectUsers: (state: RootState) => import("../../../shared/types").TUserSelectionItem[];
export declare const selectOnlineVisibility: (state: RootState) => TMessengerSettingsLastSeenItem[];
export declare const selectOnlineVisibilityValue: (state: RootState) => TMessengerSettingsLastSeenItem | undefined;

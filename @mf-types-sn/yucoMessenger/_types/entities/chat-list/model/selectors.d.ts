import { RootState } from 'shared/lib/store';
export declare const selectChatList: (state: RootState) => import("../..").TChatItem[];
export declare const selectMembersToAdmin: (state: RootState) => import("../../../shared/types").IMember | null;
export declare const selectPotentialOwners: (state: RootState) => import("../../../shared/types").TUserSelectionCard[];
export declare const selectIsSelectChatsMode: (state: RootState) => boolean;
export declare const selectSelectedChats: (state: RootState) => import("../../../shared/types").TChatSelectionItem[];
export declare const selectNewFolderName: (state: RootState) => string;
export declare const selectWasFolderDeleteProcessed: (state: RootState) => string;
export declare const selectIsFolderEditMode: (state: RootState) => boolean;

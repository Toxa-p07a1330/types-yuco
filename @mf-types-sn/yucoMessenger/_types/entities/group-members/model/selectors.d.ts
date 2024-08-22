import { RootState } from 'shared/lib/store';
export declare const selectCards: (state: RootState) => import("../../../shared/types").TUserSelectionCard[];
export declare const selectUsers: (state: RootState) => import("../../../shared/types").TUserSelectionItem[];
export declare const selectTags: (state: RootState) => import("../../../shared/types").TUserSelectionTag[];
export declare const selectTitle: (state: RootState) => string;
export declare const selectHashName: (state: RootState) => string;

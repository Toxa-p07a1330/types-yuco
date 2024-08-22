/// <reference types="react" />
import { TUserSelectionCard, TUserSelectionTag } from 'shared/types';
export declare const UseNewGroup: (setState: any) => {
    tagCallback: (item: TUserSelectionTag) => void;
    cardCallback: (item: TUserSelectionCard) => void;
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    searchUserHandler: (event: any) => void;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    tags: TUserSelectionTag[];
    cards: TUserSelectionCard[];
    searchUser: string;
    isFollowersLoading: boolean;
    editPhoto: (nash_name: string) => void;
};

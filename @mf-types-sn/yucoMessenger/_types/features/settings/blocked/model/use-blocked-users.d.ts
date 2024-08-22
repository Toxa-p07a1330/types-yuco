/// <reference types="react" />
export declare const UseBlockedUsers: () => {
    tagCallback: (item: import("../../../../shared/types").TUserSelectionTag) => void;
    cardCallback: (item: import("../../../../shared/types").TUserSelectionCard) => void;
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    searchUserHandler: (event: any) => void;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    tags: any;
    cards: any;
    searchUser: string;
    isFollowersLoading: boolean;
};
